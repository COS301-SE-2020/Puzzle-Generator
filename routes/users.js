const express = require('express');
const { response, request } = require('express');
const router = express.Router();
const db = require('../config/database');
const User = require('../models/User');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Str = require('@supercharge/strings');
const bcrypt = require('bcrypt');


// router.get('/getAllUsers', (request, response) => { 
//     User.findAll()
//         .then( users => {
//             response.send(users);
//         })
//         .catch( error => {
//             console.log("Failed: ", error)
//         })
// });

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
                    response.status(201).json({ "token": data.token});
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
                        response.status(201).json({"token": user[0].token});
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
})

router.put('/resetPassword', (request, response) => {
    User.findAll( { raw: true, where: { username: {[Op.like]:  request.body.username } } } )
    .then( user => {
        if(user.length == 0){
            response.status(404).send("Failed to retrieve user with given username");
        }
        else{
            //update record
            User.update(
                { password: bcrypt.hashSync(request.body.password, 10) },
                { returning: true, raw: true, plain: true, where: { username: request.body.username }}
            )
            .then( response.status(200).send("Password reset. Please login") )
            .catch( error => {
                response.status(500).send("Server error");
            } )
        }
    })
    .catch( error => {
        response.status(500).send("Server Error");
    })
})


module.exports = router;