const { getKickerStats } = require('./scraper/puppeteer.js');

async function startRun() {
    console.log('Starting server...');
    const playerData = await getKickerStats('nick-folk');
    console.log(playerData);
}
