const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const app = express();

const indexRouter = require('./server/routes/index');
const streaksRouter = require('./server/routes/streaks');
const usersRouter = require('./server/routes/users');

mongoose.connect(
	`mongodb://${process.env.MOMENTUMM_DB_USER}:${
		process.env.MOMENTUMM_DB_PASSWORD
	}@ds125322.mlab.com:25322/momentumm`,
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'frontend')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/streaks', streaksRouter);

module.exports = app;
