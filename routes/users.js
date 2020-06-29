var express = require('express');
var router = express.Router();

const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv').config();

const Str = require('@supercharge/strings');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

const DB_NAME = "dfqtmc7rr2t3l3";
const DB_USERNAME = "kxdtgexhuustyz";
const DB_PASSWORD = "90aa97f7e6cbcae5a990672689f5501f60beb55617de070c88f1913aed6f7b5f";
const DB_HOST = "ec2-54-228-209-117.eu-west-1.compute.amazonaws.com";
//pool = require("./pool");
const Pool = require("pg").Pool;
const pool = new Pool
({
  user:DB_USERNAME,
  host:DB_HOST,
  database:DB_NAME,
  password:DB_PASSWORD,
  ssl: { rejectUnauthorized: false }
});



router.post('/createUser', (request, response) => {
  //set headers
  response.header('Access-Control-Allow-Origin','*');
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  response.header('Content-Type','application/json');
  //retrieve password, username and name from the request body
  const newUserUsername = request.query.username;
  const newUserPassword = request.query.password;
  console.log(request.query.name);
  const newUserName = request.query.name;
  //hash password using bcrypt
  const hashedPassword = bcrypt.hashSync(newUserPassword, 10);

  var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(!regex.test(newUserUsername))
  {//checking if email is valid
    response.status(403).send("Invalid username, must be a valid email address");
  }
  else
  {
    pool.query('SELECT * FROM public."users" WHERE "username" = ($1)', [newUserUsername], (error, results) => {
      if(error){//failure to connect to db server
        response.status(400).send("Server error 1: " + error.message );
      }
      else
      {
        if(results.rowCount >= 1){
          response.status(409).send("User already exists in the db");
        }
        else
        {
          //generate token for user
          var randomToken = Str.random();
          //check if token does not exist in db. Generate new token if it exists
          function checkToken() {
            pool.query('SELECT * FROM public."users" WHERE "token" = ($1)', [randomToken],(err,res)=>{
              if(err)
              {
                response.status(400).send("Server error at token check: " + errr.message);
              }
              if(res.rowCount === 0)
              {
                return;
              }
              else // Token allready exists, generates a new token and calls function again
              {
                response.status(409).send("Token already assigned to user in the db");
                randomToken = Str.random();
                checkToken()
              }
            });
          };
          //checkToken();

          //insert new user record into db
          pool.query('INSERT INTO public."users"("name", "username", "password", "token") VALUES ($1,$2,$3,$4) ', [newUserName, newUserUsername, hashedPassword, randomToken], (err, res) => {
            if(err){
              response.status(400).send("Server error 2: " + err.message );
            }
            else
            {
              pool.query('SELECT * FROM public."users" WHERE "username" = ($1)', [newUserUsername], (error, results) => {
                if(results.rowCount >= 1){
                  response.status(200).json({"userID":results.rows[0].userId, "token": results.rows[0].token});
                }
              })
            }
          });
        }
      }
    });
  }
});


module.exports = router;
