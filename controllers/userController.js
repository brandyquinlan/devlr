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
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    code: req.body.code,
  }
  const opts = { headers: { accept: 'application/json' } }
  axios
    .post(`https://github.com/login/oauth/access_token`, body, opts)

    .then((response) => response.data.access_token)
    .then((token) => {
      res.json({ token })
    })
    .catch((err) => {
      console.error('get token error', err)
      res.status(500).json({ message: err.message })
    })
})

router.put('/setAccessToken', async (req, res) => {
  const { token, _id } = req.body
  console.log(token, _id)

  try {
    const user = await db.User.findOneAndUpdate({ _id }, { accessToken: token })
    // user.accessToken = token
    // await user.save()
    console.log('Added access token to user, userController line 37', user)
    res.status(200).json(user)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: err.message })
  }
})

// registering new user
// should modify this route to redirect the user to github and get the token back and save it in db
router.post('/signup', async (request, response) => {
  try {
    request.body.password = bcrypt.hashSync(request.body.password, 10)
    db.User.create({
      email: request.body.email,
      password: request.body.password,
    }).then((res) => {
      const user = {
        email: res.email,
        _id: res._id,
      }
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
    response.status(500).json({ error: err.message })
  }
})

module.exports = router
