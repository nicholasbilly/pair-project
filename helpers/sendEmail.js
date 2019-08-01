"use strict";

const nodemailer = require("nodemailer");
function sendEmail(receiver) {
// async..await is not allowed in global scope, must use a wrapper
async function main(){

  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "billyhactiv8@gmail.com", // generated ethereal user
      pass: "hacktiv8Super" // generated ethereal password
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'billyhactiv8@gmail.com', // sender address
    to: receiver, // list of receivers
    subject: "Thank you for purchasing with Drug Online", // Subject line
    text: "Please process payment within 24 hours", // plain text body
  });
}

main().catch(console.error);
}

module.exports = sendEmail