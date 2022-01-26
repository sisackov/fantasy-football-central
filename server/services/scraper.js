const PlayerData = require('../models/playerData');
const { ESPN_TEAM_ROSTER_LINKS } = require('../utils/constants');
const { getPlayersData } = require('../utils/puppeteer');

async function scrapePlayerData() {
    performance.mark('scrapePlayerData_START');

    // const teamRoster = await getPlayersData('sf/san-francisco-49ers');
    // console.log('Roster: ', teamRoster);

    const playersDataList = [];

    for (const teamLink of ESPN_TEAM_ROSTER_LINKS) {
        console.log(`Getting data for ${teamLink}`);
        const teamRoster = await getPlayersData(teamLink);
        playersDataList.push(...teamRoster);
    }

    for (const player of playersDataList) {
        try {
            console.log('Saving data for', player.name);
            const playerData = new PlayerData(player);
            await playerData.save();
        } catch (e) {
            console.error('Failed to save data for: ', player, e);
        }
    }
    console.log('Saved all player data to DB');

    performance.mark('scrapePlayerData_END');
    const measure = performance.measure(
        'scrapePlayerData',
        'scrapePlayerData_START',
        'scrapePlayerData_END'
    );
    console.log(measure);
}

async function scrapePlayerStats() {
    console.log('Starting server...');
    const playerData = await getPlayersData(espnTeamRosterLinks[0]);
    console.log('Roster: ', playerData);
    const playersInfo = [];

    for (const player of playerData) {
        const pName = player.name.toLowerCase().split(' ').join('-');
        console.log(`Getting data for ${pName}`);
        let playerInfo = {};
        if (player.position === 'PK') {
            playerInfo = await getKickerStats(pName);
        } else {
            playerInfo = await getPlayerStatsNFL(pName, player.position);
        }
        playersInfo.push(playerInfo);
    }
    console.log('Total players:', playersInfo);
}
// scrapePlayerStats();

module.exports = {
    scrapePlayerData,
    scrapePlayerStats,
};
