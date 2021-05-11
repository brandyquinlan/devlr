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

module.exports = router
