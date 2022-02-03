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
const { loadState, saveState } = require('./utils');

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

async function scrapePlayerStats(scrapeState) {
    performance.mark('sps_START');
    const playerDataList = await PlayerData.find();

    for (let i = scrapeState.playerIndex; i < playerDataList.length; i++) {
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
        scrapeState.playerIndex = i + 1;
        saveState(scrapeState);
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

async function scrapeData() {
    //todo: add this work around to presentation
    // const scrapeState = loadState();
    // if (!scrapeState.scrapedPlayerData) {
    //     await scrapePlayerData();
    //     scrapeState.scrapedPlayerData = true;
    //     saveState(scrapeState);
    // }
    // if (!scrapeState.scrapedPlayerStats) {
    //     await scrapePlayerStats(scrapeState);
    //     scrapeState.scrapedPlayerStats = true;
    //     scrapeState.playerIndex = 0;
    //     saveState(scrapeState);
    // }
    // if (!scrapeState.scrapedDefenseStats) {
    //     await scrapeDefenseStats();
    // }
    // //reset scrape state so that next time it will start from scratch
    // scrapeState.scrapedPlayerData = false;
    // scrapeState.scrapedPlayerStats = false;
    // scrapeState.scrapedDefenseStats = false;
    // saveState(scrapeState);

    await scrapePlayerData();
    await scrapePlayerStats();
    await scrapeDefenseStats();
    console.log('Scraping complete');
}

module.exports = {
    scrapePlayerData,
    scrapePlayerStats,
    scrapeDefenseStats,
    scrapeData,
};
