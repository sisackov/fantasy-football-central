const PlayerData = require('../models/playerData.model');
const PlayerDataService = require('../services/playerData.service');
const TeamDefenseStatsService = require('./defenseStats.service');
const { ESPN_TEAM_ROSTER_LINKS, FNFL_TEAM_IDS } = require('../utils/constants');
const {
    getPlayersData,
    getTeamDefenseStats,
    getKickerStats,
    getPlayerStatsNFL,
} = require('../utils/puppeteer');

async function scrapePlayerData() {
    performance.mark('spd_START');

    const playersDataList = [];

    for (const teamLink of ESPN_TEAM_ROSTER_LINKS) {
        console.log(`Getting data for ${teamLink}`);
        const teamRoster = await getPlayersData(teamLink);
        playersDataList.push(...teamRoster);
    }

    PlayerDataService.deletePlayerDataCollection();
    for (const player of playersDataList) {
        try {
            console.log('Saving data for', player.name);
            await PlayerDataService.createPlayerData(player); //! w/out await the db crashes because of too many calls
        } catch (e) {
            console.error('Failed to save data for: ', player, e);
        }
    }
    console.log('Saved all player data to DB');

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

async function scrapeTeamDefenseStats() {
    performance.mark('stds_START');

    const dataList = [];

    for (const team of FNFL_TEAM_IDS) {
        console.log(`Getting data for ${JSON.stringify(team)}`);
        const games = await getTeamDefenseStats(team);
        dataList.push({ team: team.team, games });
    }

    TeamDefenseStatsService.deleteDefenseStatsCollection();
    for (const data of dataList) {
        try {
            console.log('Saving data for', data.team);
            await TeamDefenseStatsService.createDefenseStats(data); //todo: is await needed here?
        } catch (e) {
            console.error('Failed to save data for: ', data.team, e);
        }
    }
    console.log('Saved all team defense data to DB');

    performance.mark('stds_END');
    const measure = performance.measure('stds', 'stds_START', 'stds_END');
    console.log(
        `scrapeTeamDefenseStats performance measure: ${
            measure.duration / 60000
        } minutes`
    );
}

module.exports = {
    scrapePlayerData,
    scrapePlayerStats,
    scrapeTeamDefenseStats,
};
