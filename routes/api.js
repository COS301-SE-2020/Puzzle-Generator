const express = require('express');
const { response, request } = require('express');
const router = express.Router();
const db = require('../config/dbConfig');
const User = require('../models/User');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Str = require('@supercharge/strings');
const bcrypt = require('bcrypt');
const PuzzleRating = require('../models/PuzzleRating');
const Puzzle = require('../models/Puzzle');
const SolveAttempt = require('../models/SolveAttempt');
const mailer = require('./mailer');



router.get('/verify/:usr', (request, response) => {
  const user = request.params.usr;

  User.findAll( { raw: true, where: { username: {[Op.like]:  user } } } )
    .then( user => {
      if(user.length == 0){
        response.status(404).send("User not found");
      }
      else {
        user.verified = true;
        response.status(201).send("User successfully verified");
        return response.redirect('https://prometheuspuzzles.herokuapp.com/login/');
      }
    })
    .catch( error => {
      response.status(500).send("Server Error");
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
    User.findAll( { raw: true, where: { username: {[Op.like]:  user } } } )
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
