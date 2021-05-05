const bcrypt = require('bcryptjs')
const db = require('../models')
module.exports = (app) => {
  // registering new user
  // should modify this route to redirect the user to github and get the token back and save it in db
  app.post('/signup', (request, response) => {
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
}
