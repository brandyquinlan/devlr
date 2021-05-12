const mongoose = require('mongoose')
const { Schema } = mongoose

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
  accessToken: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  following: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  followers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  resetCode: String,
  resetCodeExpires: Number,
})

const User = mongoose.model('User', userSchema)

module.exports = User
