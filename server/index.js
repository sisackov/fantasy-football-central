const app = require('./app');
const { scrapeData } = require('./utils/scraper');
const port = process.env.PORT;
const schedule = require('node-schedule');
const { herokuKeepAlive } = require('./utils/utils');

app.listen(port, () => {
    console.log('Server is up on port ' + port);
});

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
