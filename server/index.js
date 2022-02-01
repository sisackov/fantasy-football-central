const app = require('./app');
const {
    scrapePlayerData,
    scrapeDefenseStats,
    scrapePlayerStats,
} = require('./utils/scraper');
const port = process.env.PORT;
const schedule = require('node-schedule');

app.listen(port, () => {
    console.log('Server is up on port ' + port);
});

async function scrapeAll() {
    await scrapePlayerData();
    await scrapePlayerStats();
    await scrapeDefenseStats();
}
scrapeAll();

// const rule = new schedule.RecurrenceRule();
// rule.hour = 10;
// rule.dayOfWeek = 2;
// rule.tz = 'Etc/UTC'; //this will execute the job at 10:00 UTC every Tuesday
// schedule.scheduleJob(rule, scrapePlayerData);

//runs at minute 10 every 3rd hour
// schedule.scheduleJob('10 */3 * * *', scrapeDefenseStats);

// schedule.scheduleJob('25 */3 * * *', scrapePlayerStats);
