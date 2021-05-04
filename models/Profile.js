const mongoose = require('mongoose')
const { Schema } = mongoose

const profileSchema = new Schema({
  // adding the ref to user objectId to associate the profile with the user's id
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  name: {
    type: String,
    required: true,
  },
  highestGraduation: {
    type: String,
    required: true,
  },
  school: {
    type: String,
    required: true,
  },
  skills: {
    type: [String],
    required: true,
  },
  totalYearsofExperience: {
    type: Number,
    required: true,
  },
  currentPosition: {
    type: String,
    required: true,
  },
  from: {
    type: Date,
    required: true,
  },
  to: {
    type: Date,
    required: true,
  },
  languages: {
    type: [String],
  },
  themePref: {
    type: String,
  },
  profilePic: {
    type: String,
  },
})

const Profile = mongoose.model('Profile', profileSchema)

module.exports = Profile