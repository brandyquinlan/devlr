const router = require('express').Router()
const bcrypt = require('bcryptjs')
const axios = require('axios')
const dotenv = require('dotenv')
const passport = require('../config/passport')
const db = require('../models')
dotenv.config()

// github redirects the user back to url that we provided during setting up our oauth app
router.post('/getAccessToken', (req, res) => {
  const body = {
    // eslint-disable-next-line camelcase
    client_id: process.env.clientId,
    // eslint-disable-next-line camelcase
    client_secret: process.env.clientSecret,
    code: req.body.code,
  }
  const opts = { headers: { accept: 'application/json' } }
  axios
    .post(`https://github.com/login/oauth/access_token`, body, opts)

    // eslint-disable-next-line dot-notation
    .then((response) => response.data.access_token)
    .then((token) => {
      res.json({ token })
    })
    .catch((err) => res.status(500).json({ message: err.message }))
})

router.put('/setAccessToken', (req, res) => {
  const { _id } = req.user
  const { token } = req.body

  // console.log(_id)
  try {
    // eslint-disable-next-line
    db.User.findOneAndUpdate({ _id }, { accessToken: token }).then(
      (updatedUser) => {
        res.status(200).json(updatedUser)
      },
    )
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// registering new user
// should modify this route to redirect the user to github and get the token back and save it in db
router.post('/signup', (request, response) => {
  try {
    request.body.password = bcrypt.hashSync(request.body.password, 10)
    db.User.create({
      email: request.body.email,
      password: request.body.password,
    }).then((user) => {
      response.json(user)
    })
  } catch (error) {
    // console.log(error)
    response.status(500).send(error)
  }
})

// login route
router.post('/login', passport.authenticate('local'), (req, res) => {
  res.send(req.user)
})

// Route for checking if a user is logged in
router.get('/getUser', (request, response) => {
  try {
    response.send(request.user)
  } catch (err) {
    response.send(err)
  }
})

// logout route
router.get('/logout', (request, response) => {
  try {
    request.logout()
    response.sendStatus(200)
  } catch (err) {
    response.send(err).status(500)
  }
})

module.exports = router
