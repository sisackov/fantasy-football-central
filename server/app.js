const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL);

const userRouter = require('./routes/user.routes');
const playerDataRouter = require('./routes/playerData.routes');
const defenseStatsRouter = require('./routes/defenseStats.routes');
const {
    ROUTES_API_PREFIX,
    ROUTES_SERVER_PREFIX,
} = require('./utils/constants');

const app = express();

const publicPath = path.join(__dirname, 'build');
app.use(cors());
app.use(express.static(publicPath));

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
} else {
    app.use(morgan('short'));
}

app.use(express.json());
app.use(ROUTES_SERVER_PREFIX, userRouter);
app.use(ROUTES_API_PREFIX, playerDataRouter);
app.use(ROUTES_API_PREFIX, defenseStatsRouter);

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(publicPath, 'index.html'));
    // res.sendFile(path.resolve(PUBLIC_PATH, "index.html"));
});

module.exports = app;
