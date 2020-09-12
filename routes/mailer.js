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

  let mailOptions = {
    from: emailUname,
    to: recipient,
    subject: subject,
    text: message
  };

  

});

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
module.exports = router;
