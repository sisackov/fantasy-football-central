const PlayerDataService = require('../services/playerData.service');
const TeamDefenseStatsService = require('../services/teamDefenseStats.service');
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
            await PlayerDataService.createPlayerData(player); //todo: is await needed here?
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
    // const playerDataList = await PlayerDataService.getAllPlayerData();
    const playerDataList = await PlayerDataService.getAllPlayersByPosition(
        'PK'
    );
    // console.log('Roster: ', playerData);
    const playersInfo = [];

    for (const playerData of playerDataList.slice(0, 3)) {
        const pName = playerData.name.toLowerCase().split(' ').join('-');
        console.log(`Getting data for ${pName}`);
        let playerInfo = {};
        if (playerData.position === 'PK') {
            playerInfo = await getKickerStats(pName);
        } else {
            playerInfo = await getPlayerStatsNFL(pName, playerData.position);
        }
        playersInfo.push(playerInfo);
    }
    console.log('Total players:', playersInfo);

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
