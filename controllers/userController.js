const bcrypt = require('bcryptjs')
const passport = require('../config/passport')
const db = require('../models')

module.exports = (app) => {
  // registering new user
  // should modify this route to redirect the user to github and get the token back and save it in db
  app.post('/api/signup', (request, response) => {
    try {
      request.body.password = bcrypt.hashSync(request.body.password, 10)
      db.User.create({
        email: request.body.email,
        password: request.body.password,
      }).then((result) => response.status(200).send(result))
    } catch (error) {
      // console.log(error)
      response.status(500).send(error)
    }
  })

  app.post('/api/login', passport.authenticate('local'), (req, res) => {
    res.json({
      email: req.user.email,
      // eslint-disable-next-line no-underscore-dangle
      id: req.user._id,
    })
  })
}
