const {
    getKickerStats,
    getPlayersData,
    espnTeamRosterLinks,
    getPlayerStatsNFL,
} = require('./scraper/puppeteer.js');

const app = require('./app');
const port = process.env.PORT;

app.listen(port, () => {
    console.log('Server is up on port ' + port);
});

async function playersDataBatch() {
    console.log('Starting server...');
    const playerData = [];
    for (const teamLink of espnTeamRosterLinks) {
        console.log(`Getting data for ${teamLink}`);
        const teamRoster = await getPlayersData(teamLink);
        // console.log(teamRoster);
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
// playerInfoBatch();

//generates a good JWT SECRET
// console.log(require('crypto').randomBytes(256).toString('base64'));

// const jwt = require('jsonwebtoken');
// const token = jwt.sign({ _id: 'abc123' }, process.env.JWT_SECRET);
// console.log('token', token);

// const decoded = jwt.verify(token, process.env.JWT_SECRET);
// console.log('decoded', decoded);
