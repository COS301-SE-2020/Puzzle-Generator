<<<<<<< HEAD
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
=======
const express = require('express');
const path = require('path');
const { request } = require('http');
const { response } = require('express');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.all("/*", function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
	next();
  });

//import  db
const db = require('./config/database');

//test db connection
  db.authenticate() 
    .then( () => {console.log("Successfully connected to db");} )
    .catch( error => {console.log("Error: ", error);})

app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {response.send("Sequelize API test");});

//all requests associated with the user must make use of this route
app.use('/api/users', require('./routes/users'));


//all requests associated with the user must make use of this route
app.use('/api/puzzles', require('./routes/puzzles'));

const PORT = process.env.PORT || 3200;

app.listen(PORT, console.log(`Server running at: ${PORT}`));
>>>>>>> node/sequelize
