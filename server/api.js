const path = require('path')
const db = require('../models')

module.exports = (app) => {
  // This is for heroku so that React Router works
  app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
  })

  app.post('/api/newPost', async ({ body }, response) => {
    // assuming that the post will be send in its object from from the client
    const post = body

    // we simply attempt to store it to the database
    try {
      db.Post.create(post).then(() => {
        response.sendStatus(200)
      })
    } catch (error) {
      response.sendStatus(400)
      // Deatiled error loging will be important for everyones sake in the dev process
      throw new Error(
        `Error adding Post to databse --- server/api.js --- ERROR: ${error}`,
      )
    }
  })

  app.post('/api/newUser', ({ body }, response) => {
    // Again assuming that information is being sent in its object form from the client
    const user = body

    try {
      db.User.create(user).then((res) => {
        response.send(res)
      })
    } catch (error) {
      response.sendStatus(400)
      throw new Error(
        `Error adding new User in databse --- server/api.js --- ERROR: ${error}`,
      )
    }
  })
}
