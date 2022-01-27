const express = require('express');
require('./db/mongoose');
const userRouter = require('./routes/user.routes');
const morgan = require('morgan');
const {
    ROUTES_API_PREFIX,
    ROUTES_SERVER_PREFIX,
} = require('./utils/constants');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(ROUTES_SERVER_PREFIX, userRouter);

module.exports = app;
