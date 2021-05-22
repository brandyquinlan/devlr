const router = require('express').Router()
const db = require('../models')

router.post('/newPost', async (request, response) => {
  // assuming that the post will be send in its object from from the client
  const { post } = request.body

  // we simply attempt to store it to the database
  try {
    db.Post.create(post)
      .then((res) => {
        response.send(res).status(200)
      })
      .catch((error) => {
        console.error('Error :: ENDPOINT /api/posts/newPost ::', error)
        response.sendStatus(400)
      })
  } catch (error) {
    console.error('Error :: ENDPOINT /api/posts/newPost ::', error)
    response.sendStatus(500)
  }
})

router.put('/addLike', (request, response) => {
  // To like a post, pass an object into the reqeust body, with a property postID
  // ALONG with the user who liked it, property userID
  const { like, postId } = request.body
  try {
    db.Post.findOneAndUpdate({ _id: postId }, { $push: { likes: like } })
      .then((res) => {
        response.send(res)
      })
      .catch((error) => {
        console.error('Error :: ENDPOINT /api/posts/addLike ::', error)
        response.sendStatus(400)
      })
  } catch (error) {
    console.error('Error :: ENDPOINT /api/posts/addLike ::', error)
    response.sendStatus(500)
  }
})

router.put('/removeLike', (request, response) => {
  const { userId, postId } = request.body

  try {
    db.Post.findOneAndUpdate(
      { _id: postId },
      { $pull: { likes: { user: userId } } },
    )
      .then((res) => {
        response.send(res)
      })
      .catch((error) => {
        console.error('Error :: ENDPOINT /api/posts/removeLike ::', error)
        response.sendStatus(400)
      })
  } catch (error) {
    console.error('Error :: ENDPOINT /api/posts/removeLike ::', error)
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
      .catch((error) => {
        console.error('Error :: ENDPOINT /api/posts/addComment ::', error)
        response.sendStatus(400)
      })
  } catch (error) {
    console.error('Error :: ENDPOINT /api/posts/addComment ::', error)
    response.sendStatus(500)
  }
})

// Get the posts of the users specefied in the ID
router.get('/getPosts/:_id', (request, response) => {
  const { _id } = request.params

  try {
    db.Post.find({ $or: [{ atId: _id }, { user: _id }] })
      .sort({ date: -1 })
      .then((posts) => {
        response.send(posts)
      })
      .catch((error) => {
        console.error(
          'Error :: ENDPOINT /api/posts/getPosts/:_id',
          `USER ID: ${_id} ::`,
          error,
        )
        response.sendStatus(400)
      })
  } catch (error) {
    console.error(
      'Error :: ENDPOINT /api/posts/getPosts/:_id',
      `USER ID: ${_id} ::`,
      error,
    )
    response.sendStatus(500)
  }
})
//delete post
router.delete('/:_id', async (request, response) => {
  const { _id } = request.params

  try {
    const post = await db.Post.findById({ _id })

    if (!post) {
      return response.status(404).json({ msg: 'post not found!' })
    }
    await post.remove()
    response.status(200).send(post)
  } catch (error) {
    console.error('Error :: ENDPOINT /api/posts/delete_id', error)
  }
})
// Get the posts of all the people you are following
router.get('/getFollowingPosts/:_id', async (request, response) => {
  const { _id } = request.params
  const user = await db.Profile.findOne({ user: _id })

  try {
    db.Post.find({
      $or: [{ atId: _id }, { user: _id }, { user: { $in: user.following } }],
    })
      .sort({ date: -1 })
      .then((posts) => {
        response.send(posts)
      })
      .catch((error) => {
        console.error(
          'Error :: ENDPOINT /api/posts/getPosts/:_id',
          `USER ID: ${_id} ::`,
          error,
        )
        response.sendStatus(500)
      })
  } catch (error) {
    console.error(
      'Error :: ENDPOINT /api/posts/getPosts/:_id',
      `USER ID: ${_id} ::`,
      error,
    )
    response.sendStatus(500)
  }
})

module.exports = router
