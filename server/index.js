const app = require('./app');
const {
    scrapePlayerData,
    scrapeTeamDefenseStats,
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
// schedule.scheduleJob('0 */8 * * *', scrapePlayerData);//this will run every 8 hours

scrapeTeamDefenseStats();
