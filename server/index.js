const app = require('./app');
const { scrapeData } = require('./utils/scraper');
const port = process.env.PORT || process.env.SERVER_PORT;
const schedule = require('node-schedule');
const { herokuKeepAlive } = require('./utils/utils');

app.listen(port, () => {
    console.log('Server is up on port ' + port);
    console.log('NODE_ENV ' + process.env.NODE_ENV);
});

// scrapeData();

// const rule = new schedule.RecurrenceRule();
// rule.hour = 23;
// rule.dayOfWeek = 5;
// rule.tz = 'Etc/UTC'; //this will execute the job at 23:00 UTC on Fridays
// schedule.scheduleJob(rule, scrapeData);

//runs every tenth minute
schedule.scheduleJob('*/10 * * * *', herokuKeepAlive);
