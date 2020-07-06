<<<<<<< HEAD
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
=======
const express = require('express');
const { response, request } = require('express');
const router = express.Router();
const db = require('../config/database');
const User = require('../models/User');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Str = require('@supercharge/strings');
const bcrypt = require('bcrypt');
const PuzzleRating = require('../models/PuzzleRating');
const Puzzle = require('../models/Puzzle');

router.post('/createUser', (request, response) => {
    const username = request.body.username;
	const password = bcrypt.hashSync(request.body.password, 10);
    const name = request.body.name;
    var token = Str.random();

    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(!regex.test(username))
	{//checking if email is valid
		response.status(403).send("Invalid username, must be a valid email address");
    }
    else{
        User.findAll( { where: { username: {[Op.like]:  request.body.username } } } )
        .then( user => {
            if(user.length == 0){
                //create user
                User.create({
                    name, username, password, token
                })
                .then( data => {
                    response.status(201).json({ "token": data.token, "name": data.name});
                })
                .catch( error => { 
                    response.status(500);
                })
            }
            else {
                response.status(409).send("User already exists. Create new user");
            }
        })
        .catch( error => { 
            response.status(500).send("Server Error");
        })
    }
});

router.post('/login', (request, response) => {
    const password = request.body.password;
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(!regex.test(request.body.username))
	{
		response.status(403).send("Invalid username, must be a valid email address");
    }
    else{
        User.findAll( { raw: true, where: { username: {[Op.like]:  request.body.username } } } )
        .then( user => {
            if(user.length == 0){
                response.status(404).send("User not found");
            }
            else {
                bcrypt.compare(password, user[0].password, (err, res) => {
                    if(res){
                        response.status(201).json({"token": user[0].token, "name": user[0].name});
                    }
                    else {
                        response.status(403).send("Passwords do not match");
                    }
                })
            }
        })
        .catch( error => { 
            response.status(500).send("Server Error");
        })
    }
});

router.post('/getUser', (request, response) => {
    User.findAll( { raw: true, where: { token: {[Op.like]:  request.body.token } } } )
    .then( user => {
        response.status(200).json({"name": user[0].name, "username": user[0].username});
    })
    .catch();
})

router.put('/updateUsername', (request, response) => {
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(!regex.test(request.body.username))
	{
		response.status(403).send("Invalid username, must be a valid email address");
    }
    else{
        User.update(
            { username: request.body.username },
            { returning: true, raw: true, plain: true, where: { token: request.body.token } }
        )
        .then( data => { 
            response.status(201).json({"username": data[1].username});
        } )
        .catch( error => {
            response.send("Server error: " + error);
        })
    }
});

router.put('/updateName', (request, response) => {
            User.update(
                { name: request.body.name },
                { returning: true, raw: true, plain: true, where: { token: request.body.token } }
            )
            .then( data => {
                response.status(201).json({"name": data[1].name});
            } )
            .catch( error => {
                response.status(500).send("Server error");
            } )
});

router.put('/resetPassword', (request, response) => {
    User.findAll( { raw: true, where: { username: {[Op.like]:  request.body.username } } } )
    .then( user => {
        if(user.length == 0){
            response.status(404).send("Failed to retrieve user with given username");
        }
        else{
            User.update(
                { password: bcrypt.hashSync(request.body.password, 10) },
                { returning: true, raw: true, plain: true, where: { username: request.body.username }}
            )
            .then( () => {
                response.status(200).send("Password reset. Please login");
             })
            .catch( error => {
                response.status(500).send("Server error");
            } )
        }
    })
    .catch( error => {
        response.status(500).send("Server Error");
    })
});

//get puzzles by user
router.post('/getPuzzlesByUser', (request, response) => { 
    let userID = null
    User.findAll( { raw: true, where: { token: {[Op.like]:  request.body.token } } } )
        .then( user => {
            userID = user[0].id;
            
            Puzzle.findAll( { raw: true, where: { creatorID: userID  } } )
            .then( puzzles => {
                if(puzzles) {
                    console.log(puzzles);
                    response.status(201).send(puzzles);
                }
                else{
                    response.status(200).send("No puzzles yet");
                }
            })
            .catch( error => {
                response.status(404).send("User does not exist");
            });
        })
        .catch( error => {
            console.log("Failed to get user due to: ", error)
        })
        
});

//get ratings by user
router.post('/getPuzzleRatingsByUser', (request, response) => { 
    let raterID = null
    User.findAll( { raw: true, where: { token: {[Op.like]:  request.body.token } } } )
        .then( user => {
            raterID = user[0].id;

            PuzzleRating.findAll( { raw: true, where: { userID: parseInt(raterID)  } } )
            .then( puzzles => {
                if(puzzles) {
                    console.log(puzzles);
                    response.status(201).send(puzzles);
                }
                else{
                    response.status(200).send("No Ratings yet");
                }
            })
            .catch( error => {
                response.status(403).send("Failed to get user due to: ", error)
            });
        })
        .catch( error => {
            response.status(403).send("Failed to get user due to: ", error)
        });
});

module.exports = router;
>>>>>>> node/sequelize
