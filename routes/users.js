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
  //retrieve password, username and name from the request body
  const newUserUsername = request.query.username;
  console.log(request.query.username);
  const newUserPassword = request.query.password;
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
        response.status(500).send({"Server error: ":  error.message} );
      }
      else
      {
        if(results.rowCount >= 1){
          response.status(409).send("Email is already registered.");
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
                response.status(500).json({"Error":"Server error at token check: " + err.message});
              }
              if(res.rowCount === 0)
              {
                return;
              }
              else // Token allready exists, generates a new token and calls function again
              {
                response.status(409);//.send("Token already assigned to user in the db");
                randomToken = Str.random();
                checkToken()
              }
            });
          };
          //checkToken();

          //insert new user record into db
          pool.query('INSERT INTO public."users"("name", "username", "password", "token") VALUES ($1,$2,$3,$4) ', [newUserName, newUserUsername, hashedPassword, randomToken], (err, res) => {
            if(err){
              response.status(500).json({"Error":"Server error: " + err.message});
            }
            else
            {
              pool.query('SELECT * FROM public."users" WHERE "username" = ($1)', [newUserUsername], (error, results) => {
                if(results.rowCount >= 1){
                  response.status(201).json({ "token": results.rows[0].token});
                }
              })
            }
          });
        }
      }
    });
  }
});

router.post('/login', (request, response) => {
  //retrieve username from the request body
  const enteredUsername = request.query.username;
  const password = request.query.password;

  var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(!regex.test(enteredUsername))
  {//checking if email is valid
    response.status(403).json({"Error":"Invalid username, must be a valid email address"});
  }
  else
  {
    pool.query('SELECT * FROM public."users" WHERE "username" = ($1)', [enteredUsername], (error, results) => {
      if(error){//failure to connect to db server
        response.status(500).send("Server error: " + error.message );
      }
      else
      {
        if(results.rowCount === 0){
          response.status(404).send("Email is not found. Please sign up");
        }
        else
        {
          bcrypt.compare(password, results.rows[0].password, function(err, res) {
            if(res){
              response.status(201).json({"token": results.rows[0].token});
            }
            else {
              response.status(403).send("Passwords do not match");
            }
          })
        }
      }
    });
  }
});

//update user email endpoint
router.put('/updateUsername', (request, response) => {
  const userToken = request.query.token;
  const newEmail = request.query.username;

  var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(!regex.test(newEmail))
  {//checking if email is valid
    response.status(403).send("Invalid username, must be a valid email address");
  }
  else
  {
    pool.query('SELECT * FROM public."users" WHERE "token" = ($1)', [userToken], (error, results) => {
      if(error){
        response.status(500).send("Server error: " + error.message);
      }
      else{
        if(results.rowCount >= 1){
          pool.query('UPDATE public."users" SET "username" = ($1) WHERE "token" = ($2)', [newEmail, userToken], (error, results) => {
            if(error){
              response.status(500).send("Server error: " + error.message);
            }
            else{
              pool.query('SELECT * FROM public."users" WHERE "token" = ($1)', [userToken], (error, results) => {
                if(error){
                  response.status(500).send("Server error: " + error.message);
                }
                else{
                  if(results.rowCount === 1){
                    if(results.rows[0].username === newEmail)
                    {
                      response.status(200).send("Username updated successfully");
                    }
                  }
                }
              });
            }
          });
        }
        else{
          response.status(404).send("User not found");
        }
      }
    });
  }
});

//update user name endpoint
router.put('/updateName', (request, response) => {
  const userToken = request.query.token;
  const newName = request.query.name;

  pool.query('SELECT * FROM public."users" WHERE "token" = ($1)', [userToken], (error, results) => {
    if(error){
      response.status(400).send("Server error: " + error.message);
    }
    else{
      if(results.rowCount >= 1){
        pool.query('UPDATE public."users" SET "name" = ($1) WHERE "token" = ($2)', [newName, userToken], (error, results) => {
          if(error){
            response.status(500).send("Server error: " + error.message);
          }
          else{
            pool.query('SELECT * FROM public."users" WHERE "token" = ($1)', [userToken], (error, results) => {
              if(error){
                response.status(500).send("Server error: " + error.message);
              }
              else{
                if(results.rowCount === 1){
                  if(results.rows[0].name === newName)
                  {
                    response.status(200).send("Name updated successfully");
                  }
                }
              }
            });
          }
        });
      }
      else{
        response.status(404).send("User not found");
      }
    }
  });
});
//reset user password endpoint
router.put('/resetPassword', (request, response) => {
  const email = request.query.username;
  const newPassword = request.query.password;
  const hashedPassword = bcrypt.hashSync(newPassword, 10);

  var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(!regex.test(email))
  {//checking if email is valid
    response.status(403).send("Invalid username, must be a valid email address");
  }
  else
  {
    pool.query('SELECT * FROM public."users" WHERE "username" = ($1)', [email], (error, results) => {
      if(error){
        response.status(500).send("Server error: " + error.message);
      }
      else{
        if(results.rowCount >= 1){
          pool.query('UPDATE public."users" SET "password" = ($1) WHERE "username" = ($2)', [hashedPassword, email], (error, results) => {
            if(error){
              response.status(500).send("Server error: " + error.message);
            }
            else{
              pool.query('SELECT * FROM public."users" WHERE "username" = ($1)', [email], (error, results) => {
                if(error){
                  response.status(500).send("Server error: " + error.message);
                }
                else{
                  if(results.rowCount === 1){
                    if(results.rows[0].password === hashedPassword)
                    {
                      response.status(200).send("Password updated successfully. Please login");
                    }
                  }
                }
              });
            }
          });
        }
        else{
          response.status(404).send("User not found. Please make sure email is valid")
        }
      }
    });
  }
});


module.exports = router;
