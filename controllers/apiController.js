const router = require('express').Router()
const path = require('path')
const db = require('../models')

// For Heroku
// If no API routes are hit, send the React app
router.get((request, response) => {
  response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})

//* GETS::

router.get('/api/profile/:userID', (request, response) => {
  const { userID } = request.params

  try {
    db.Profile.findOne({ user: userID }).then((res) => {
      response.send(res).status(200)
    })
  } catch (error) {
    response.send(error).status(500)
  }
})

//* POSTS::
router.post('/api/newPost', async (request, response) => {
  // assuming that the post will be send in its object from from the client
  const { post } = request.body

  // we simply attempt to store it to the database
  try {
    db.Post.create(post).then(() => {
      response.sendStatus(200)
    })
  } catch (error) {
    response.sendStatus(500)
  }
})

router.post('/api/newProfile/:id', (request, response) => {
  // NOT SURE WHAT THIS SHOULD ACTUALLY LOOK LIKE. JUST SETTING IT UP
  // TO MATCH THE OTHERS FOR NOW
  const { profile } = request.body

  try {
    db.Profile.create(profile).then((res) => {
      response.send(res)
    })
  } catch (error) {
    response.sendStatus(500)
  }
})

//* PUTS::
router.put('/api/updateProfile/:id', (request, response) => {
  // To update profile, create a new profile object, and send it as the request body,
  // and include the users Id in the request params
  const { newProfile } = request.body
  const { id } = request.params

  try {
    db.Profile.findOneAndUpdate({ user: id }, newProfile).then((res) => {
      response.send(res)
    })
  } catch (error) {
    response.sendStatus(500)
  }
})

router.put('/api/likePost', (request, response) => {
  // To like a post, pass an object into the reqeust body, with a property postID
  // ALONG with the user who liked it, property userID
  const { userID, postID } = request.body

  try {
    db.Post.findOneAndUpdate({ id: postID }, { $push: { likes: userID } }).then(
      (res) => {
        response.send(res)
      },
    )
  } catch (error) {
    response.sendStatus(500)
  }
})

module.exports = router
