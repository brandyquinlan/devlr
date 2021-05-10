const router = require('express').Router()
const bcrypt = require('bcryptjs')
const axios = require('axios')
const dotenv = require('dotenv')
const { v4: uuid } = require('uuid')
const mailer = require('../config/nodemailer')
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
      res.status(500).json({ message: err.message })
    })
})

router.put('/setAccessToken', async (req, res) => {
  const { token, _id } = req.body

  try {
    let user = await db.User.findOneAndUpdate({ _id }, { accessToken: token })
    user = {
      email: user.email,
      _id: user._id,
    }
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
  res.sendStatus(200)
})

router.get('/getUserInfo', (request, response) => {})

// Route for checking if a user is logged in
router.get('/checkUser', (request, response) => {
  try {
    const user = {
      email: request.user.email,
      _id: request.user._id,
    }
    response.send(user)
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

// this is the endpoint that handles the back end of resetting the user password
router.get('/sendResetLink/:userEmail', (request, response) => {
  const { userEmail } = request.params
  const uniqueCode = uuid()
  const resetLink = `http://localhost:3000/home/settings/?reset=${uniqueCode}`

  const mail = {
    to: userEmail,
    from: process.env.DEVLR_EMAIL,
    subject: 'Reset your password',
    text: `Just follow this link to reset the password to your devlr account! ${resetLink}`,
  }

  mailer.verify((err, success) => {
    if (err) throw new Error(err)
  })

  try {
    db.User.findOneAndUpdate(
      { email: userEmail },
      { resetCode: uniqueCode, resetCodeExpires: Date.now() + 360000 },
    )
      .then((user) => {
        const userInfo = {
          email: user.email,
          _id: user._id,
          resetCode: user.resetCode,
        }
        mailer.sendMail(mail)
        response.sendStatus(200)
      })
      .catch((err) => {
        console.error(err)
        response.sendStatus(404)
      })
  } catch (error) {
    response.sendStatus(500)
  }
})

router.get('/verifyResetCode/:resetCode', (request, response) => {
  const { resetCode } = request.params
  try {
    db.User.findOne({ resetCode }).then((user) => {
      if (user.resetCodeExpires > Date.now()) {
        const userInfo = {
          email: user.email,
          _id: user._id,
        }
        response.send(userInfo).status(200)
      } else {
        response.send('No user found').status(404)
      }
    })
  } catch (error) {
    response.send(500)
  }
})

router.put('/resetPassword', (request, response) => {
  const { newPassword, _id } = request.body
  const hashedPassword = bcrypt.hashSync(newPassword, 10)
  try {
    db.User.findOneAndUpdate({ _id }, { password: hashedPassword })
      .then(() => {
        response.send('Password updated').status(200)
      })
      .catch((e) => {
        response.send(e).status(401)
      })
  } catch (error) {
    response.send(error).status(500)
  }
})

module.exports = router
