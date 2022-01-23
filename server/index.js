const {
    getKickerStats,
    getPlayersData,
    espnTeamRosterLinks,
    getPlayerStatsNFL,
} = require('./scraper/puppeteer.js');

async function playersDataBatch() {
    console.log('Starting server...');
    const playerData = [];
    for (const teamLink of espnTeamRosterLinks) {
        console.log(`Getting data for ${teamLink}`);
        const teamRoster = await getPlayersData(teamLink);
        console.log(teamRoster);
        playerData.push(...teamRoster);
    }
    console.log('Total players:', playerData);
}
// playersDataBatch();

async function playerInfoBatch() {
    console.log('Starting server...');
    const playerData = await getPlayersData(espnTeamRosterLinks[0]);
    console.log('Roster: ', playerData);
    const playersInfo = [];

    for (const player of playerData) {
        const pName = player.name.toLowerCase().split(' ').join('-');
        console.log(`Getting data for ${pName}`);
        const playerInfo = await getPlayerStatsNFL(pName, player.position);
        playersInfo.push(playerInfo);
    }
    console.log('Total players:', playersInfo);
}
playerInfoBatch();
