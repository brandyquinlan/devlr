const router = require('express').Router()
const db = require('../models')

router.post('/newPost', async (request, response) => {
  // assuming that the post will be send in its object from from the client
  const { post } = request.body

  // we simply attempt to store it to the database
  try {
    db.Post.create(post).then((res) => {
      response.send(res).status(200)
    })
  } catch (error) {
    response.sendStatus(500)
  }
})

router.put('/likePost', (request, response) => {
  // To like a post, pass an object into the reqeust body, with a property postID
  // ALONG with the user who liked it, property userID
  const { like, postId } = request.body
  try {
    db.Post.findOneAndUpdate({ _id: postId }, { $push: { likes: like } })
      .then((res) => {
        response.send(res)
      })
      .catch((err) => {
        response.send(err)
      })
  } catch (error) {
    response.sendStatus(500)
  }
})

router.put('/addComment', (request, response) => {
  const { postId, comment } = request.body
  try {
    db.Post.findOneAndUpdate({ _id: postId }, { $push: { comments: comment } })
      .then((res) => {
        response.send(res).status(200)
      })
      .catch(() => {
        response.sendStatus(404)
      })
  } catch (err) {
    response.send(err).status(500)
  }
})

// Get the posts of the users specefied in the ID
router.get('/getPosts/:_id', async (request, response) => {
  const { _id } = request.params

  try {
    db.Post.find({ user: _id })
      .sort({ date: -1 })
      .then((posts) => {
        response.send(posts)
      })
  } catch (err) {
    response.senjson(err)
  }
})

// Get the posts of all the people you are following
router.get('/getPosts/following', async (request, response) => {
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
