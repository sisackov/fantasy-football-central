const express = require('express');
require('./db/mongoose');
const userRouter = require('./routes/user.routes');
const playerDataRouter = require('./routes/playerData.routes');
const {
    ROUTES_API_PREFIX,
    ROUTES_SERVER_PREFIX,
} = require('./utils/constants');

const app = express();

if (process.env.NODE_ENV === 'development') {
    const morgan = require('morgan');
    app.use(morgan('dev'));
}
app.use(express.json());
app.use(ROUTES_SERVER_PREFIX, userRouter);
app.use(ROUTES_API_PREFIX, playerDataRouter);

module.exports = app;
