const router = require('express').Router()

const posts = require('./postController')
const users = require('./userController')
const profile = require('./profileController')

router.use('/api/posts', posts)
router.use('/api/users', users)
router.use('/api/profiles', profile)

module.exports = router
