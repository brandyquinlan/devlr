const router = require('express').Router()
const bcrypt = require('bcryptjs')
const dotenv = require('dotenv')
const passport = require('../config/passport')
const db = require('../models')
dotenv.config()

// registering new user
// should modify this route to redirect the user to github and get the token back and save it in db
router.post('/signup', (request, response) => {
  try {
    request.body.password = bcrypt.hashSync(request.body.password, 10)
    db.User.create({
      email: request.body.email,
      password: request.body.password,
    }).then(() => {
      response.sendStatus(200)
    })
  } catch (error) {
    // console.log(error)
    response.status(500).send(error)
  }
})

// login route
router.post('/login', passport.authenticate('local'), (req, res) => {
  res.json({
    user: req.user,
  })
})

module.exports = router
