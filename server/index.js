const app = require('./app');
// const { scrapeData } = require('./utils/scraper');
const port = process.env.PORT || process.env.SERVER_PORT;
const schedule = require('node-schedule');
const { herokuKeepAlive } = require('./utils/utils');

app.listen(port, () => {
    console.log('Server is up on port ' + port);
    console.log('NODE_ENV ' + process.env.NODE_ENV);
});

//this will execute the job at 23:00 UTC on Fridays
// schedule.scheduleJob({hour:23, dayOfWeek: 5, tz: 'Etc/UTC'}, scrapeData);

//runs every 25th minute
schedule.scheduleJob('*/25 * * * *', herokuKeepAlive);
