const mongoose = require('mongoose')
const { Schema } = mongoose

// Removed the required=true for now so that the profile can be created and exist as soon as a user signs up

const profileSchema = new Schema({
  // adding the ref to user objectId to associate the profile with the user's id
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  name: {
    type: String,
    // required: true,
  },
  following: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  followers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  highestGraduation: {
    type: String,
    // required: true,
  },
  school: {
    type: String,
    // required: true,
  },
  skills: {
    type: [String],
    // required: true,
  },
  totalYearsofExperience: {
    type: Number,
    // required: true,
  },
  currentPosition: {
    type: String,
    // required: true,
  },
  company: {
    type: String,
    // required: true,
  },
  from: {
    type: Date,
    // required: true,
  },
  to: {
    type: Date,
    // required: true,
  },
  githubUsername: {
    type: String,
    // required: true,
  },
  languages: {
    type: [String],
  },
  themePref: {
    type: String,
    default: '222222',
  },
  avatarUrl: {
    type: String,
  },
  following: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  followers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
})

const Profile = mongoose.model('Profile', profileSchema)

module.exports = Profile
