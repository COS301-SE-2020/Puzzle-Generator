
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
    const username = request.query.username;
	const password = bcrypt.hashSync(request.query.password, 10);
    const name = request.query.name;
    var token = Str.random();

    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(!regex.test(username))
	{//checking if email is valid
		response.status(403).send("Invalid username, must be a valid email address");
    }
    else{
        User.findAll( { where: { username: {[Op.like]:  request.query.username } } } )
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
    const password = request.query.password;
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(!regex.test(request.query.username))
	{
		response.status(403).send("Invalid username, must be a valid email address");
    }
    else{
        User.findAll( { raw: true, where: { username: {[Op.like]:  request.query.username } } } )
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
    User.findAll( { raw: true, where: { token: {[Op.like]:  request.query.token } } } )
    .then( user => {
        response.status(200).json({"name": user[0].name, "username": user[0].username});
    })
    .catch();
})

router.put('/updateUsername', (request, response) => {
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(!regex.test(request.query.username))
	{
		response.status(403).send("Invalid username, must be a valid email address");
    }
    else{
        User.update(
            { username: request.query.username },
            { returning: true, raw: true, plain: true, where: { token: request.query.token } }
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
                { name: request.query.name },
                { returning: true, raw: true, plain: true, where: { token: request.query.token } }
            )
            .then( data => {
                response.status(201).json({"name": data[1].name});
            } )
            .catch( error => {
                response.status(500).send("Server error");
            } )
});

router.put('/resetPassword', (request, response) => {
    User.findAll( { raw: true, where: { username: {[Op.like]:  request.query.username } } } )
    .then( user => {
        if(user.length == 0){
            response.status(404).send("Failed to retrieve user with given username");
        }
        else{
            User.update(
                { password: bcrypt.hashSync(request.query.password, 10) },
                { returning: true, raw: true, plain: true, where: { username: request.query.username }}
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
    User.findAll( { raw: true, where: { token: {[Op.like]:  request.query.token } } } )
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
    User.findAll( { raw: true, where: { token: {[Op.like]:  request.query.token } } } )
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

