const app = require('./app');
const axios = require('axios');
const { scrapeData } = require('./utils/scraper');
const port = process.env.PORT;
const schedule = require('node-schedule');
const { herokuKeepAlive } = require('./utils/utils');
// const DefenseStats = require('./models/defenseStats.model');
// const PlayerData = require('./models/playerData.model');

app.listen(port, () => {
    console.log('Server is up on port ' + port);
});

async function testDb() {
    // const teamInDB = await DefenseStats.findOne({ team: 'Buffalo Bills' });
    // await teamInDB.save();
    // const playerData = await PlayerData.findOne({ name: 'Stefon Diggs' });
    // await playerData.save();
}
// testDb();

// scrapeData();

const rule = new schedule.RecurrenceRule();
rule.hour = 23;
rule.dayOfWeek = 5;
rule.tz = 'Etc/UTC'; //this will execute the job at 23:00 UTC on Fridays
schedule.scheduleJob(rule, scrapeData);

//runs every tenth minute
schedule.scheduleJob('*/10 * * * *', herokuKeepAlive);

//runs at minute 10 every 3rd hour
// schedule.scheduleJob('10 */3 * * *', scrapeDefenseStats);

// schedule.scheduleJob('25 */3 * * *', scrapePlayerStats);
