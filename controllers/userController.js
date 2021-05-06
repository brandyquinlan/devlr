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
        githubUsername: request.body.githubUsername,
      }).then((result) => response.status(200).send(result))
    } catch (error) {
      // console.log(error)
      response.status(500).send(error)
    }
  })

  app.post(
    '/api/login',
    passport.authenticate('local'),
    // eslint-disable-next-line consistent-return
    async (request, response) => {
      try {
        const user = await db.User.findOne({ email: request.body.email })
          .select('-password')
          .exec()
        if (!user) {
          return response.status(400).send({ msg: 'user does not exist' })
        }
        if (!bcrypt.compareSync(request.body.password, user.password)) {
          return response.status(400).send({ msg: 'invalid password' })
        }
        response.json(user)
      } catch (error) {
        console.log(error)
        response.json(error)
      }
    },
  )
}
