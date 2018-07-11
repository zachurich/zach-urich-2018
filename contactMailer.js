const nodemailer = require("nodemailer");
const sgTransport = require("nodemailer-sendgrid-transport");
const user = "zac.urich@gmail.com";

const transporter = nodemailer.createTransport(
  sgTransport({
    auth: {
      api_key:
        "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"
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
