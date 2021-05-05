const path = require('path')
const db = require('../models')

module.exports = (app) => {
  // This is for heroku so that React Router works
  app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
  })

  app.post('/api/newPost', async (request, response) => {
    // assuming that the post will be send in its object from from the client
    const post = request.body

    // we simply attempt to store it to the database
    try {
      db.Post.create(post).then(() => {
        response.sendStatus(200)
      })
    } catch (error) {
      response.sendStatus(400)
      // Deatiled error loging will be important for everyones sake in the dev process
      throw new Error(
        `Error saving Post in databse --- server/api.js --- ERROR: ${error}`,
      )
    }
  })
}
