const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.DEVLR_EMAIL,
    pass: process.env.DEVLR_PASS,
  },
})

module.exports = transport
