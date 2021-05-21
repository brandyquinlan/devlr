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

router.put('/addLike', (request, response) => {
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
      .catch((err) => {
        response.send(err).status(404)
      })
  } catch (err) {
    response.send(err).statusMessage(500)
  }
})

router.put('/addComment', (request, response) => {
  const { postId, comment } = request.body
  try {
    db.Post.findOneAndUpdate({ _id: postId }, { $push: { comments: comment } })
      .then((res) => {
        response.send(res).status(200)
      })
      .catch((err) => {
        console.error(err)
        response.sendStatus(404)
      })
  } catch (err) {
    response.send(err).status(500)
  }
})

// Get the posts of the users specefied in the ID
router.get('/getPosts/:_id', (request, response) => {
  const { _id } = request.params

  try {
    db.Post.find({ $or: [{ atId: _id }, {user: _id }]})
      .sort({ date: -1 })
      .then((posts) => {
        response.send(posts)
      })
  } catch (err) {
    response.senjson(err)
  }
})
//delete post
router.delete('/:_id', async (req, res) => {
  //was trying to catch not logged in user from req.user but it returns undefined
  //   const { _id } = req.user
  // const user = await db.User.find({_id})
  const { _id } = req.params

  try {
    const post = await db.Post.findById({ _id })

    if (!post) {
      return res.status(404).json({ msg: 'post not found!' })
    }
    // if(post.user.toString() !== user){
    //  return res.status(401).json({msg: 'not authorized'})
    // }
    await post.remove()
    res.status(200).send(post)
  } catch (error) {
    console.error(error)
  }
})
// Get the posts of all the people you are following
router.get('/getFollowingPosts/:_id', async (request, response) => {
  const { _id } = request.params
  console.log('db call _id', _id)
  const user = await db.Profile.findOne({ user: _id })

  try {
    db.Post.find({ $or: [{ atId: _id }, { user: _id }, { user: { $in: user.following } } ] })
      .sort({ date: -1 })
      .then((posts) => {
        response.send(posts) 
      })
      .catch((err) => response.send(err).status(400))
  } catch (err) {
    response.senjson(err)
  }
})

module.exports = router
