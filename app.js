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
// app.use(express.json());
app.use(express.json({limit: '2mb'}));
//app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {response.send("Sequelize API test");});

//all requests associated with the user must make use of this route
app.use('/api/users', require('./routes/users'));


//all requests associated with the user must make use of this route
app.use('/api/puzzles', require('./routes/puzzles'));

const PORT = process.env.PORT || 3200;

app.listen(PORT, console.log(`Server running at: ${PORT}`));
