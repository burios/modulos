var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jvburinlodetti@gmail.com',
    pass: 'jwoa mwwe rfqh dfsw'
  }
});

var mailOptions = {
  from: 'jvburinlodetti@gmail.com',
  to: '2gustavo.bian2006@gmail.com',
  subject: 'lorem',
  text: 'aasdasdasdsadasdasdadasdasdasda'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});