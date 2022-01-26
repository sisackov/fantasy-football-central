const app = require('./app');
const { scrapePlayerData } = require('./services/scraper');
const port = process.env.PORT;

app.listen(port, () => {
    console.log('Server is up on port ' + port);
});

// scrapePlayerData();

//generates a good JWT SECRET
// console.log(require('crypto').randomBytes(256).toString('base64'));

// const jwt = require('jsonwebtoken');
// const token = jwt.sign({ _id: 'abc123' }, process.env.JWT_SECRET);
// console.log('token', token);

// const decoded = jwt.verify(token, process.env.JWT_SECRET);
// console.log('decoded', decoded);
