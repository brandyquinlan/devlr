const router = require('express').Router()
const axios = require('axios')

const posts = require('./postController')
const users = require('./userController')
const profile = require('./profileController')

router.use('/api/posts', posts)
router.use('/api/users', users)
router.use('/api/profiles', profile)

// github redirects the user back to url that we provided during setting up our oauth app
let token = null
router.get('/home', (req, res) => {
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
    .then((response) => console.log(response.data['access_token']))
    .then((_token) => {
      console.log('My token:', token)
      token = _token
      res.json({ ok: 1 })
    })
    .catch((err) => res.status(500).json({ message: err.message }))
})

module.exports = router
