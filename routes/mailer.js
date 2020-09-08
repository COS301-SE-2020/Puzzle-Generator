var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    secure:true,
    auth: {
        user: 'team.prometheus@willowmoore.co.za',
        pass: 'password1'
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

var mailOptions = {
    from: 'team.prometheus@willowmoore.co.za',
    to: 'u15175295@tuks.co.za',
    subject: 'Reset password',
    text: message
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
