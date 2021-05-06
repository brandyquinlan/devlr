/* eslint-disable no-shadow */
const bcrypt = require('bcryptjs')
const dotenv = require('dotenv')
const axios = require('axios')
const passport = require('../config/passport')
const db = require('../models')

dotenv.config()
module.exports = (app) => {
  // registering new user
  // should modify this route to redirect the user to github and get the token back and save it in db
  app.post('/api/signup', (request, response) => {
    try {
      request.body.password = bcrypt.hashSync(request.body.password, 10)
      db.User.create({
        email: request.body.email,
        password: request.body.password,
      }).then(
        response.redirect(
          `https://github.com/login/oauth/authorize?client_id=${process.env.clientId}`,
        ),
      )
    } catch (error) {
      // console.log(error)
      response.status(500).send(error)
    }
  })
  // github redirects the user back to url that we provided during setting up our oauth app
  let token = null

  app.get('/', (req, res) => {
    const body = {
      // eslint-disable-next-line camelcase
      client_id: process.env.clientId,
      // eslint-disable-next-line camelcase
      client_secret: process.env.clientSecret,
      code: req.query.code,
    }
    const opts = { headers: { accept: 'application/json' } }
    axios
      .post(`https://github.com/login/oauth/access_token`, body, opts)

      // eslint-disable-next-line dot-notation
      .then((res) => console.log(res.data['access_token']))
      .then((_token) => {
        console.log('My token:', token)
        token = _token
        res.json({ ok: 1 })
      })
      .catch((err) => res.status(500).json({ message: err.message }))
  })

  // login route
  app.post('/api/login', passport.authenticate('local'), (req, res) => {
    res.json({
      email: req.user.email,
      // eslint-disable-next-line no-underscore-dangle
      id: req.user._id,
    })
  })
}
