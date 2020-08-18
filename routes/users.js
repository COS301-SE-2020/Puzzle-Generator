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
            } );
        }
    })
    .catch( error => {
        response.status(500).send("Server Error");
    })
});

//get puzzles by user
router.post('/getPuzzlesByUser', (request, response) => {
    let userID = null
    User.findOne({ raw: true, where: { token: {[Op.like]:  request.body.token } } })
    .then( user => {
        userID = user.id;

        Puzzle.findAll( { raw: true, where: { creatorID: userID  } } )
        .then( puzzles => {
            if(puzzles) {
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
        response.status(500).send("Failed due to server error: ", error);
    })
});

//get ratings by user
router.post('/getPuzzleRatingsByUser', (request, response) => {
    let raterID = null;
    let ratingJsonObject = [];
    let ratingPlaceholder = {};
    let index = 0;
    User.findOne({ raw: true, where: { token: {[Op.like]:  request.body.token } } })
    .then( user => {
        raterID = user.id;

        PuzzleRating.findAll({  raw: true, where: { userID: parseInt(raterID)}, include: [Puzzle , User] })
        .then( data => {
            let array = data;
            var totalNumRatings = Object.keys(data).length;
            // if(totalNumRatings == 0 )
            // {
            //     response.status(201).send(ratingJsonObject);
            // }
            array.forEach(element => {
                ratingPlaceholder = {
                    "puzzleName": element['testPuzzle.name'],
                    "rating":element.rating,
                    "puzzleID":element.puzzleID,
                    "image": element['testPuzzle.image']
                }
                ++index;
                ratingJsonObject.push(ratingPlaceholder);
                if(index == totalNumRatings){
                    //console.log("Sending back: ", ratingJsonObject);
                    response.status(201).send(ratingJsonObject);
                }
            });
            response.status(201).send(ratingJsonObject);
            //console.log("Here after for loop ", ratingJsonObject);
        })
        .catch( error => {
            response.status(500);//.send("Server error: ", error);
        });
    })
    .catch( error => { response.status(500).send("Server error: ", error); });
});

module.exports = router;
