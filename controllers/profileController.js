const router = require('express').Router()
const db = require('../models')

router.get('/:userID', (request, response) => {
  const { userID } = request.params

  try {
    db.Profile.findOne({ user: userID }).then((res) => {
      response.send(res).status(200)
    })
  } catch (error) {
    response.send(error).status(500)
  }
})

router.put('/updateProfile/:_id', (request, response) => {
  // To update profile, create a new profile object, and send it as the request body,
  // and include the users Id in the request params
  const { newProfile } = request.body
  const { _id } = request.params

  try {
    db.Profile.findOneAndUpdate({ user: _id }, newProfile)
      .then(() => {
        response.send('Profile updated')
      })
      .catch((error) => {
        response.json({ errMessage: error }).status(401)
      })
  } catch (error) {
    response.json({ errMessage: error }).status(500)
  }
})

router.put('/followUser', (request, response) => {
  const { targetId, userId } = request.body

  try {
    db.Profile.findOneAndUpdate(
      { user: targetId },
      { $push: { followers: userId } },
    )
      .then(() => {
        db.Profile.findOneAndUpdate(
          { user: userId },
          { $push: { following: targetId } },
        )
          .then(() => {
            response.sendStatus(200)
          })
          .catch(() => response.sendStatus(400))
      })
      .catch(() => response.sendStatus(400))
  } catch (err) {
    response.send(err).status(500)
  }
})

router.put('/unfollowUser', (request, response) => {
  const { targetId, userId } = request.body

  try {
    db.Profile.findOneAndUpdate(
      { user: targetId },
      { $pull: { followers: userId } },
    )
      .then(() => {
        db.Profile.findOneAndUpdate(
          { user: userId },
          { $pull: { following: targetId } },
        )
          .then(() => {
            response.sendStatus(200)
          })
          .catch(() => response.sendStatus(400))
      })
      .catch(() => response.sendStatus(400))
  } catch (err) {
    response.send(err).status(500)
  }
})

module.exports = router
