// Exporting an object containing all of our models

// Making sure to call require before module.export for performance reasons
const User = require('./User')
const Profile = require('./Profile')
const Post = require('./Post')

module.exports = {
  User,
  Profile,
  Post,
}
