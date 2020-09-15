const express = require('express');
const { response, request } = require('express');
const router = express.Router();
const resetEmail = require("./resetPasswordEmailTemplate");
const welcomeEmail = require('./welcomeEmail');

var nodemailer = require('nodemailer');

let emailUname = process.env.emailUname;
let emailPassword = process.env.emailPassword;

module.exports = {
  mail : function(subject, recipient){
    switch(subject) {
    case"welcome":
      {
        subject = "Welcome to Prometheus Puzzles";
        message = welcomeEmail.generateWelcomeEmail(recipient);
        sendmail(subject,message,recipient)
        break;
      }
    case "resetPassword":
      {
        subject = "Reset your email";
        message = resetEmail.generateResetEmail();

        sendmail(subject,message,recipient)
        break;
      }
    }
  }
};
function sendmail(subject,message,recipient) {
  //console.log(emailUname);
  //console.log(emailPassword);
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    secure:true,
    auth: {
      user: emailUname,
      pass: emailPassword
    }
  });
  let mailOptions = {
    from: emailUname,
    to: recipient,
    subject: subject,
    html: message,
    attachments : [
      {   // filename and content type is derived from path
        cid: "../Emails to user/reset password/images/logo_nav.png"
      },
      {   // filename and content type is derived from path
        cid: "../Emails to user/reset password/images/img2.jpg"
      }
    ]
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}



