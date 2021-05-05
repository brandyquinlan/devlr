const mongoose = require('mongoose')
const { Schema } = mongoose
const bcrypt = require('bcryptjs')

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid e-mail address'],
  },
  password: {
    type: String,
    required: true,
  },
  githubUsername: {
    type: String,
    required: true,
  },
  accessToken: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

const User = mongoose.model('User', userSchema)

/* Creating a custom method for our User model. This will check if an un-hashed password
  entered by the user can be compared to the hashed password stored in our database */
User.prototype.validPassword = (password) =>
  bcrypt.compareSync(password, this.password)

module.exports = User
