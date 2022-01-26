const app = require('./app');
const {
    scrapePlayerData,
    scrapeTeamDefenseStats,
    scrapePlayerStats,
} = require('./services/scraper');
const port = process.env.PORT;
const schedule = require('node-schedule');

app.listen(port, () => {
    console.log('Server is up on port ' + port);
});

const rule = new schedule.RecurrenceRule();
rule.hour = 10;
rule.tz = 'Etc/UTC'; //this will execute the job at 10:00 UTC every day
schedule.scheduleJob(rule, scrapePlayerData);

//runs at minute 47 every 3rd hour
// schedule.scheduleJob('47 */3 * * *', scrapeTeamDefenseStats);

scrapePlayerStats();
