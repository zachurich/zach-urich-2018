const nodemailer = require("nodemailer");
const sgTransport = require("nodemailer-sendgrid-transport");

const { EMAIL_API_KEY, EMAIL_TO, EMAIL_FROM } = process.env;

const transporter = nodemailer.createTransport(
  sgTransport({
    auth: {
      api_key: EMAIL_API_KEY
    }
  })
);

const send = ({ email, name, text }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`;
  const message = {
    from: EMAIL_FROM,
    to: EMAIL_TO,
    subject: `New Form Submission From ${from}`,
    text,
    replyTo: email
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
};

exports.handler = function(event, context, callback) {
  // your server-side functionality
  const { name, email, inquiry } = JSON.parse(event.body);
  send({
    email,
    name,
    text: inquiry
  })
    .then(() =>
      callback(null, {
        statusCode: 200,
        body: "OK!",
        msg: "Submitted!",
        error: false
      })
    )
    .catch(err =>
      callback(null, {
        statusCode: 500,
        body: "Something went wrong...",
        msg: "Something went wrong...",
        error: true
      })
    );
};
