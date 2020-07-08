var express = require('express');
var router = express.Router();

//const express = require('express');
const Pool = require("pg").Pool;
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv').config();
const Str = require('@supercharge/strings');
var cors = require('cors');
var fs = require('fs');

const app = express();
app.use(express.json());
app.use(cors());

//const PORT = process.env.port || 3200;
/**
** user endpoints below
*/

/**
 * create user endpoint
 */
var usersRouter = require('./users');
var puzzleRouter = require('./puzzles');
router.use('users',usersRouter);
router.use('puzzle',puzzleRouter)
/**
 * login user endpoint
 */

/*router.post('/api/users/login', (request, response) => {
    //set headers
    response.header('Access-Control-Allow-Origin','*');
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    response.header('Content-Type','application/json');
    //retrieve username from the request body
    const enteredUsername = request.body.username;

    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!regex.test(enteredUsername))
    {//checking if email is valid
        response.status(403).send("Invalid username, must be a valid email address");
    }
    else
    {
        pool.query('SELECT * FROM public."users" WHERE "username" = ($1)', [enteredUsername], (error, results) => {
            if(error){//failure to connect to db server
                response.status(400).send("Server error 1: " + error.message );
            }
            else
            {
                if(results.rowCount == 0){
                    response.status(404).send("User does not exists in the db");
                }
                else
                {
                    response.status(200).json({"id":results.rows[0].userId, "token": results.rows[0].token});
                }
            }
        });
    }
});


/**
** PUZZLE ENDPOINTS BELOW
*/

/**
 * puzzle creation endpoint
 */
/*
router.post('/api/puzzle/createPuzzle', (request, response) => {
    //set headers
    response.header('Access-Control-Allow-Origin','*');
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    response.header('Content-Type','application/json');
    const userToken = request.body.token;
    const puzzleName = request.body.name;
    var currentUserId = null;

    pool.query('SELECT * FROM public."users" WHERE "token" = ($1)', [userToken], (error, results) => {
        if(error){
            response.status(400).send("Server error: " + error.message );
        }
        else
        {
            if(results.rowCount >= 1)
            {
                currentUserId = results.rows[0].userId;
                pool.query('INSERT INTO public."puzzle"("name", "creatorID") VALUES ($1,$2) ', [puzzleName, currentUserId], (error, res) => {
                    if(error)
                    {
                        response.status(400).send("Server error: " + error.message );
                    }
                    else
                    {
                        response.status(200).send("Puzzle created");
                    }
                });
            }
        }
    })
});
*/
/**
 * rating creation endpoint
 */
/*
router.post('/api/puzzle/createPuzzleRating', (request, response) => {
    //set headers
    response.header('Access-Control-Allow-Origin','*');
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    response.header('Content-Type','application/json');
    const userToken = request.body.token;
    const selectedPuzzlePuzzleId = request.body.puzzleId;
    const newRating = request.body.rating;
    var currentUserId = null;

    pool.query('SELECT * FROM public."users" WHERE "token" = ($1)', [userToken], (error, results) => {
        if(error){
            response.status(400).send("Server error: " + error.message );
        }
        else
        {
            if(results.rowCount >= 1)
            {
                currentUserId = results.rows[0].userId;
                pool.query('INSERT INTO public."puzzleRating"("rating", "puzzleId", "userId") VALUES ($1,$2,$3) ', [newRating,selectedPuzzlePuzzleId, currentUserId], (error, res) => {
                    if(error)
                    {
                        response.status(400).send("Server error: " + error.message );
                    }
                    else
                    {
                        response.status(200).send("Rating created");
                    }
                });
            }
        }
    })
});
*/
/**
 * endpoint for getting puzzle ratings
 */
/*
router.get('/api/getRatings', (request,response) => {
    response.header('Access-Control-Allow-Origin','*');
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    response.header('Content-Type','application/json');
    var ratingsJSONArrayObject = {};
    var ratingJSONObjectReturned = {};
    var currRating = null;
    var currName = null;
    var currPID;
    var index = 0;
    var array = [];
    pool.query('SELECT * FROM public."puzzleRating"', (error, results) => {
        if(error){
            response.status(400).send("Server error: " + error.message );
        }
        else
        {
            ratingsJSONArrayObject = results.rows;
            var ratingsJSONArrayObjectSize = Object.keys(ratingsJSONArrayObject).length;
            ratingsJSONArrayObject.forEach(obj => {
                Object.entries(obj).forEach(([key, value]) => {
                    if(key == "puzzleId"){
                        currPID = `${value}`;
                        pool.query('SELECT * FROM public."puzzle" WHERE "puzzleId" = ($1)', [currPID], (error, results) => {
                            if(error){
                                response.status(400).send("Server error: " + error.message );
                            }
                            else
                            {
                                if(results.rowCount  > 0 )
                                {
                                    ratingJSONObjectReturned = {"title":results.rows[0].name, "rating": ratingsJSONArrayObject[index].rating, "userId": ratingsJSONArrayObject[index].userId, "puzzleId": ratingsJSONArrayObject[index].puzzleId};
                                    ++index;
                                    array.push(ratingJSONObjectReturned);
                                    if(index == ratingsJSONArrayObjectSize)
                                    {
                                        response.status(201).send(array);
                                    }
                                }
                            }
                        });
                    }
                });
            });
        }
    });
});
*/
module.exports = router;