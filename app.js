var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//const { request } = require('http');
//const { response } = require('express');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var puzzleRouter = require('./routes/puzzle');
var apiRouter = require('./routes/api');

const db = require('./config/dbConfig');

//test db connection
db.authenticate()
    .then( () => {console.log("Successfully connected to db");} )
    .catch( error => {console.log("Error: ", error);})

var app = express();
app.use(express.json());
app.use(cors());

app.all("/*", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.engine('html',require('pug').renderFile);
// app.set('view engine', 'html');

app.use(logger('dev'));
//app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//app.use(express.static(path.join(__dirname, 'src')));
app.set("views",path.join(__dirname,"views"));

/**
 * Angular - Heroku stuff
 * */
app.use(bodyParser.json());
app.use(express.static(__dirname+"/dist/"));
/**
 * End Angular - Heroku stuff
 */

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api', apiRouter);
//app.use('/api/login', loginRouter);
app.use('api/puzzle', puzzleRouter);

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

//import  db
app.get('/', (request, response) => {response.send("Sequelize API test");});

module.exports = app;
console.log(process.env.dbPass)
/*
//all requests associated with the user must make use of this route
app.use('/api/users', require('./routes/users'));


//all requests associated with the user must make use of this route
app.use('/api/puzzles', require('./routes/puzzles'));

const PORT = process.env.PORT || 3200;

app.listen(PORT, console.log(`Server running at: ${PORT}`));
*/
