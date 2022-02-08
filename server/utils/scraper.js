const PlayerData = require('../models/playerData.model');
const PlayerDataService = require('../services/playerData.service');
const DefenseStatsService = require('../services/defenseStats.service');
const LeagueAvgService = require('../services/leagueAvg.service');
const { ESPN_TEAM_ROSTER_LINKS, FNFL_TEAM_IDS } = require('./constants');
const {
    getPlayersData,
    getTeamDefenseStats,
    getKickerStats,
    getPlayerStatsNFL,
} = require('./puppeteer');
const { getFixedValue } = require('./utils');
// const { loadState, saveState } = require('./utils');

async function savePlayerData(playersDataList) {
    PlayerDataService.deletePlayerDataCollection();
    for (const player of playersDataList) {
        try {
            console.log('Saving data for', player.name);
            await PlayerDataService.createPlayerData(player); //! w/out await the db crashes because of too many calls
        } catch (e) {
            console.error('Failed to save data for: ', player, e.message);
        }
    }
    console.log('Saved all player data to DB');
}

async function scrapePlayerData() {
    performance.mark('spd_START');

    const playersDataList = [];

    for (const teamLink of ESPN_TEAM_ROSTER_LINKS) {
        console.log(`Getting data for ${teamLink}`);
        const teamRoster = await getPlayersData(teamLink);
        playersDataList.push(...teamRoster);
    }

    await savePlayerData(playersDataList);

    performance.mark('spd_END');
    const measure = performance.measure('spd', 'spd_START', 'spd_END');
    console.log(
        `scrapePlayerData performance measure: ${
            measure.duration / 60000
        } minutes`
    );
}

async function scrapePlayerStats() {
    performance.mark('sps_START');
    const playerDataList = await PlayerData.find();

    for (let i = 0; i < playerDataList.length; i++) {
        const playerData = playerDataList[i];
        const pName = playerData.name.toLowerCase().split(' ').join('-');
        const { position } = playerData;
        console.log(`Getting data for ${pName}`);
        if (position === 'PK') {
            playerData.stats = await getKickerStats(pName);
        } else {
            if (pName === 'josh-allen') {
                //todo: search links with https://www.nfl.com/players/active/all?query=josh%20allen
                //! link selector: span.d3-o-player-headshot~a
                //!headshot selector: span.d3-o-player-headshot img.img-responsive
                playerData.stats = await getPlayerStatsNFL(
                    pName + '-4',
                    position
                );
            } else {
                playerData.stats = await getPlayerStatsNFL(pName, position);
            }
        }

        try {
            await playerData.save();
        } catch (e) {
            console.error('Failed to save data for: ', playerData, e);
        }
        console.log(`Scraped player #${i}`);
    }

    performance.mark('sps_END');
    const measure = performance.measure('sps', 'sps_START', 'sps_END');
    console.log(
        `scrapePlayerStats performance measure: ${
            measure.duration / 60000
        } minutes`
    );
}

//dataList: { team: String, stats: {year:Number, games:[]} }
async function saveDefenseStats(dataList) {
    DefenseStatsService.deleteDefenseStatsCollection();
    for (const teamData of dataList) {
        const team = teamData.team;
        try {
            console.log('Saving data for', team);
            await DefenseStatsService.createDefenseStats(teamData);
        } catch (e) {
            console.error('Failed to save data for: ', team, e.message);
        }
    }
    console.log('Saved all defense stats to DB');
}

async function scrapeDefenseStats() {
    performance.mark('sds_START');

    const dataList = [];

    for (const team of FNFL_TEAM_IDS) {
        console.log(`Getting data for ${JSON.stringify(team)}`);
        const stats = await getTeamDefenseStats(team);
        dataList.push({ team: team.team, stats });
    }

    await saveDefenseStats(dataList);

    performance.mark('sds_END');
    const measure = performance.measure('sds', 'sds_START', 'sds_END');
    console.log(
        `scrapeDefenseStats performance measure: ${
            measure.duration / 60000
        } minutes`
    );
}

async function saveLeagueAvg(dataList) {
    LeagueAvgService.deleteLeagueAvgCollection();
    for (const stat of dataList) {
        try {
            await LeagueAvgService.createLeagueAvg(stat);
        } catch (e) {
            console.error('Failed to save data for: ', stat, e.message);
        }
    }
    console.log('Saved all leagueAvg to DB');
}

async function computeLeagueAvg() {
    performance.mark('cla_START');

    const players = await PlayerData.find({});
    const playerData = {
        QB: { totals: [], averages: [] },
        RB: { totals: [], averages: [] },
        WR: { totals: [], averages: [] },
        TE: { totals: [], averages: [] },
        PK: { totals: [], averages: [] },
    }; //todo DST
    players.forEach((player) => {
        const p = player.toObject();
        if (p.stats.length) {
            playerData[p.position].totals.push(p.stats[0].totals);
            playerData[p.position].averages.push(p.stats[0].averages);
        }
    });

    const stats = [];
    for (const position in playerData) {
        const totals = playerData[position].totals.filter(
            (stat) => stat && stat.fantasyScore > 0
        );

        const totalsSum = {};
        for (const stat in totals[0]) {
            totalsSum[stat] = totals.reduce(
                (acc, curr) => acc + (curr[stat] || 0),
                0
            );
        }
        for (const stat in totalsSum) {
            totalsSum[stat] = getFixedValue(totalsSum[stat] / totals.length);
        }
        // console.log(totalsSum);
        const averages = playerData[position].averages.filter(
            (stat) => stat && stat.fantasyScore > 0
        );
        const averagesSum = {};
        for (const stat in averages[0]) {
            averagesSum[stat] = averages.reduce(
                (acc, curr) => acc + (curr[stat] || 0),
                0
            );
        }
        for (const stat in averagesSum) {
            averagesSum[stat] = getFixedValue(
                averagesSum[stat] / averages.length
            );
        }
        stats.push({
            position,
            totals: totalsSum,
            averages: averagesSum,
        });
    }
    // console.log(stats);

    await saveLeagueAvg(stats);

    performance.mark('cla_END');
    const measure = performance.measure('cla', 'cla_START', 'cla_END');
    console.log(
        `computeLeagueAvgs performance measure: ${
            measure.duration / 60000
        } minutes`
    );
}

async function scrapeData() {
    await scrapePlayerData();
    await scrapePlayerStats();
    await scrapeDefenseStats();
    console.log('Scraping complete');
    await computeLeagueAvg();
}

module.exports = {
    scrapePlayerData,
    scrapePlayerStats,
    scrapeDefenseStats,
    scrapeData,
};
