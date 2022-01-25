const express = require('express');
require('./db/mongoose');
const userRouter = require('./routes/user');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(userRouter);

module.exports = app;
