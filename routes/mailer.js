const express = require('express');
const { response, request } = require('express');
const router = express.Router();
const resetEmail = require("./resetPasswordEmailTemplate");
const welcomeEmail = require('./welcomeEmail');

var nodemailer = require('nodemailer');

let emailUname = process.env.emailUname;
let emailPassword = process.env.emailPassword;
let requestedPassChanges = [];

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
  },
  addResetList:function (user){
    var currTime = Date.now();
    requestedPassChanges.push({"email":user,"time":currTime});
    return true;
  },
  getResetList: function(user){
    var isThere = false;
    var usr = 0;
    for( var x=0; x<requestedPassChanges.length;x++){
      if(requestedPassChanges[x].email === user){
        usr = requestedPassChanges[x];
        requestedPassChanges[x].email = null;
        isThere = true;
        break;
      }
    }
    if(isThere){
      time = new Date();
      time.setHours(3);
      time.getMilliseconds();
      if(Date.now() < usr.time){
        isThere = false;
      }
    }
    return isThere;

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



