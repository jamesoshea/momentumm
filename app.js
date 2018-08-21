const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./server/routes/index');
const streaksRouter = require('./server/routes/streaks');
const usersRouter = require('./server/routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'frontend')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/streaks', streaksRouter);

module.exports = app;
