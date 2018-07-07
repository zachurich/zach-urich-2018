const nodemailer = require('nodemailer')
const user = 'zac.urich@gmail.com'

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      type: 'OAuth2',
      user,
      refreshToken: '1/BHdNDJaGPP-yM_tulpx5tBlbGKwa5G9CUWbF-Ah2Sbg',
      accessToken: 'ya29.GlvxBeuvj2A_J9ZDXW_ODr9d1Jcft7CoG98e6JgJ2YqHHhrdPQVZxOaTZWWf3AO2WL_WwxrraWt8vMXpEjh6J6yzQsgfQ4b4jDzHvd114qI0hV9Rjnuby1fUh4o-',
      clientId: '450472664282-u1ep8mvfn8n01n5kvkgvak84uvj5iqc5.apps.googleusercontent.com',
      clientSecret: 'CJFLWqcFxJKHFbWvEBVqixlW'
    }
  })
  
  const send = ({ email, name, text }) => {
    const from = name && email ? `${name} <${email}>` : `${name || email}`
    const message = {
      from: email,
      to: user,
      subject: `New Form Submission From ${from}`,
      text,
      replyTo: email
    }
  
    return new Promise((resolve, reject) => {
      transporter.sendMail(message, (error, info) =>
        error ? reject(error) : resolve(info)
      )
    })
  }
  
module.exports = send