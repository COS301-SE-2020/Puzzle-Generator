const express = require('express');
const { response, request } = require('express');
const router = express.Router();
const resetEmail = require("./resetPasswordEmailTemplate")

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
      message = resetEmail.generateResetEmail(username,emailUname);
    }
    case "reset password":{
      subject = "Reset your email";
      message = resetEmail.generateResetEmail(username,emailUname);

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
