const nodemailer = require("nodemailer");
const sgTransport = require("nodemailer-sendgrid-transport");
const user = "zac.urich@gmail.com";

const transporter = nodemailer.createTransport(
  sgTransport({
    auth: {
      api_key: process.env.EMAIL_API_KEY
    }
  })
);

const send = ({ email, name, text }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`;
  const message = {
    from: email,
    to: user,
    subject: `New Form Submission From ${from}`,
    text,
    replyTo: email
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(
      message,
      (error, info) => (error ? reject(error) : resolve(info))
    );
  });
};

module.exports = send;
