const path = require('path')
const db = require('../models')

module.exports = (app) => {
  //* GETS::
  // This is for heroku so that React Router works
  app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
  })

  //* POSTS::
  app.post('/api/newPost', async (request, response) => {
    // assuming that the post will be send in its object from from the client
    const { post } = request.body

    // we simply attempt to store it to the database
    try {
      db.Post.create(post).then(() => {
        response.sendStatus(200)
      })
    } catch (error) {
      // Deatiled error loging will be important for everyones sake in the dev process
      response.sendStatus(400)
      throw new Error(
        `Error adding Post to database --- server/api.js --- ERROR: ${error}`,
      )
    }
  })

  app.post('/api/newUser', (request, response) => {
    // Again assuming that information is being sent in its object form from the client
    const { user } = request.body

    try {
      db.User.create(user).then((res) => {
        response.send(res)
      })
    } catch (error) {
      response.sendStatus(400)
      throw new Error(
        `Error adding new User in database --- server/api.js --- ERROR: ${error}`,
      )
    }
  })

  app.post('/api/newProfile/:id', (request, response) => {
    // NOT SURE WHAT THIS SHOULD ACTUALLY LOOK LIKE. JUST SETTING IT UP
    // TO MATCH THE OTHERS FOR NOW
    const { profile } = request.body

    try {
      db.Profile.create(profile).then((res) => {
        response.send(res)
      })
    } catch (error) {
      response.sendStatus(400)
      throw new Error(
        `Error adding Profile to database --- server/api.js --- ERROR: ${error}`,
      )
    }
  })

  //* PUTS::
  app.put('/api/updateProfile/:id', (request, response) => {
    // To update profile, create a new profile object, and send it as the request body,
    // and include the users Id in the request params
    const { newProfile } = request.body
    const { id } = request.params

    try {
      db.Profile.findOneAndUpdate({ user: id }, newProfile).then((res) => {
        response.send(res)
      })
    } catch (error) {
      response.sendStatus(400)
      throw new Error(
        `Error updating Profile in database  --- server/api.js --- ERROR: ${error}`,
      )
    }
  })

  app.put('/api/likePost', (request, response) => {
    // To like a post, pass an object into the reqeust body, with a property postID
    // ALONG with the user who liked it, property userID
    const { userID, postID } = request.body

    try {
      db.Post.findOneAndUpdate(
        { id: postID },
        { $push: { likes: userID } },
      ).then((res) => {
        response.send(res)
      })
    } catch (error) {
      response.sendStatus(400)
      throw new Error(
        `Error updating Post in database  --- server/api.js --- ERROR: ${error}`,
      )
    }
  })
}
