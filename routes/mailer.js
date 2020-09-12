const express = require('express');
const { response, request } = require('express');
const router = express.Router();

var nodemailer = require('nodemailer');

let emailUname = process.env.emailUname;
let emailPassword = process.env.emailPassword;

var transporter = nodemailer.createTransport({
    service: 'gmail',
    secure:true,
    auth: {
        user: emailUname,
        pass: emailPassword
    }
});

var message = "Dear user\n" +
    "\n" +
    "Please click the following link to reset your password https://prometheuspuzzles.herokuapp.com/reset-password\n" +
    "\n" +
    "If you did not request a change in password, please ignore this message.\n" +
    "\n" +
    "Regards\n" +
    "Team Prometheus";


router.post('/mailer', (request, response) => {
  var subject = request.body.subject;
  var recipient = request.body.user;
  var username = request.body.username;

  let mailOptions = {
    from: emailUname,
    to: recipient,
    subject: subject,
    text: message
  };

  switch (subject) {
    case "welcome": {
      subject = "Welcome to Prometheus Puzzles";
      message = "<h1>Welcome " + username +" to Prometheus puzzles</h1> <i>Share, Create, Rate</i>\n  " +
        "You are now part of a whole community of puzzle makers, creating new and facinating puzzles.\n\n" +
        "To start creating and sharing your new designs, please verify your account" +
        "Please click here to verify <button href='https://prometheuspuzzles.herokuapp.com/api/verify:'"+emailUname+
        " style='background-color: limegreen; height:20px; width: 50px;font-size: 120%;border-radius: 3px'>Verify</button>"

    }
    case "reset password":{

    }

  }

});

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
module.exports = router;
