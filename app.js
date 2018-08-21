var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var streaksRouter = require('./routes/streaks');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'frontend')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/streaks', streaksRouter);

module.exports = app;
