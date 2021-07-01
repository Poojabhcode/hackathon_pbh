var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'oliviasmithcsschool@gmail.com',
    pass: '#olivia2099'
  }
});

var mailOptions = {
  from: 'oliviasmithcsschool@gmail.com',
  to: 'poojabhardwaj2099@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});


/*
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'poojabhardwaj2099@gmail.com',
    pass: '#Dr.Pooja'
  }
});

var mailOptions = {
  from: 'poojabhardwaj2099@gmail.com',
  to: 'prajapatipooja154@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
  xlsx: '<h1>You can send html formatted content using Nodemailer with attachments</h1>',
  attachments: [
      {
          filename: 'java.xlsx',
          path: __dirname + '\java.xlsx'
      }
  ]
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});*/