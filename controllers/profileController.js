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

router.post('/newProfile/:_id', (request, response) => {
  // NOT SURE WHAT THIS SHOULD ACTUALLY LOOK LIKE. JUST SETTING IT UP
  // TO MATCH THE OTHERS FOR NOW
  const { profile } = request.body
  const { _id } = request.params

  try {
    db.Profile.create(profile).then((res) => {
      response.send(res)
    })
  } catch (error) {
    response.sendStatus(500)
  }
})

router.put('/updateProfile/:_id', (request, response) => {
  // To update profile, create a new profile object, and send it as the request body,
  // and include the users Id in the request params
  const { newProfile } = request.body
  const { _id } = request.params
  console.log(newProfile)

  try {
    db.Profile.findOneAndUpdate({ user: _id }, newProfile)
      .then((res) => {
        response.send('Profile updated')
      })
      .catch((error) => {
        response.json({ errMessage: error.message }).status(401)
      })
  } catch (error) {
    response.sendStatus(404)
  }
})

module.exports = router
