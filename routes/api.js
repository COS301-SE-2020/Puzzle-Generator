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
const SolveAttempt = require('../models/SolveAttempt');
const mailer = require('./mailer');
const verificationMessage = require("./verificationPage");


router.get('/verify/:usr', (request, response) => {
  const user = request.params.usr;

  User.findAll( { raw: true, where: { username: {[Op.like]:  user } } } )
    .then( user => {

      if(user.length == 0){
        response.status(404).send("User not found");
      }
      else {
        if(user.verified==false) {
          user.verified = true;

          response.status(201).send(verificationMessage.success());
         // window.location.href = "https://prometheuspuzzles.herokuapp.com/login/";
        }
        else{
          response.status(201).send(verificationMessage.alreadyVerified());
        }

      }
    })
    .catch( error => {
      response.status(500).send("Server Error verifying user");
    })

});

router.put('/requestPasswordChange', (request, response)=>{
  let email = request.body.username;
  var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(!regex.test(request.body.username))
  {
    response.status(403).send("Invalid username, must be a valid email address");
  }
  else{
    console.log(email);
    User.findAll( { raw: true, where: { username: {[Op.like]:  email } } } )
      .then( user => {
        if(user.length == 0){
          response.status(404).send("User not found");
        }
        else {
          mailer.addResetList(email);
          mailer.mail("resetPassword",email);
        }
      })
      .catch( error => {
        response.status(500).send("Server Error");
      })

    response.status(200).send("You have successfully requested to change your password. Please check your email for the reset password link.")
  }


});



module.exports = router;
