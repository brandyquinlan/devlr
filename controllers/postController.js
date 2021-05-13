const router = require('express').Router()
const db = require('../models')

router.post('/newPost', async (request, response) => {
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

router.put('/likePost', (request, response) => {
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

router.get('/getPosts', async (request, response) => {
  // the id of the user currently signed in, used for filtering post results
  const { _id } = request.user

  try {
    db.Post.find({ user: _id }).then((posts) => {
      response.send(posts)
    })
  } catch (err) {
    response.senjson(err)
  }
})

router.get('/getPosts/following', async (request, response) => {
  // the id of the user currently signed in, used for filtering post results
  const { _id } = request.user
  const user = await db.User.find({ _id })

  try {
    db.Post.find({ user: { $in: user.following } }).then((posts) => {
      response.send(posts)
    })
  } catch (err) {
    response.senjson(err)
  }
})

module.exports = router
