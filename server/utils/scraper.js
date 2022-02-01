const PlayerData = require('../models/playerData.model');
const PlayerDataService = require('../services/playerData.service');
const DefenseStatsService = require('../services/defenseStats.service');
const { ESPN_TEAM_ROSTER_LINKS, FNFL_TEAM_IDS } = require('./constants');
const {
    getPlayersData,
    getTeamDefenseStats,
    getKickerStats,
    getPlayerStatsNFL,
} = require('./puppeteer');

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

    for (const playerData of playerDataList) {
        const pName = playerData.name.toLowerCase().split(' ').join('-');
        const { position } = playerData;
        console.log(`Getting data for ${pName}`);
        if (position === 'PK') {
            playerData.stats = await getKickerStats(pName);
        } else {
            playerData.stats = await getPlayerStatsNFL(pName, position);
            playerData.stats.games.reverse();
        }

        try {
            await playerData.save();
        } catch (e) {
            console.error('Failed to save data for: ', playerData, e);
        }
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

module.exports = {
    scrapePlayerData,
    scrapePlayerStats,
    scrapeDefenseStats,
};
