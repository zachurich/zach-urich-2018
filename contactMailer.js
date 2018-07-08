const nodemailer = require("nodemailer");
const user = "zac.urich@gmail.com";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    type: "OAuth2",
    user,
    refreshToken: "1/93dwT4M3j-MYKL6KZLHOinN2PqbKhwDmhBnDpapz_9U",
    accessToken:
      "ya29.GlvyBRE-4rmRH86QDDPXiiHdlAmlJrckZzjXrJ0qYpti0egvaT_6weDJQcF1l_VpKh4ijc7RDkv-J8fNHmI9Kohhzmy5MSOz7hkZO6kTm-9TI_zY44RaAM4nV1pi",
    clientId:
      "450472664282-u1ep8mvfn8n01n5kvkgvak84uvj5iqc5.apps.googleusercontent.com",
    clientSecret: "4ws8ZMVsFWLsJMO0YAdz3CjW"
  }
});

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
