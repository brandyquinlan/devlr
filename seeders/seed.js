const mongoose = require('mongoose')
const db = require('../models')

mongoose.connect('mongodb://localhost:27017/devlr', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})

const userSeed = [
  {
    _id: 1,
    email: 'brandyquinlan@gmail.com',
    password: 'brandyquinlan',
    date: Date.now,
  },
  {
    _id: 2,
    email: 'brenna.mcleod94@gmail.com',
    password: 'brenna',
    date: Date.now,
  },
  {
    _id: 3,
    email: 'maggiemaywilder@gmail.com',
    password: 'maggie',
    date: Date.now,
  },
  {
    _id: 4,
    email: 'kolton.c.decker@gmail.com',
    password: 'kolton',
    date: Date.now,
  },
  {
    _id: 5,
    email: 'steve.babb@outlook.com',
    password: 'steve',
    date: Date.now,
  },
]

const profileSeed = [
  {
    _id: 1,
    // user: 1,
    name: 'Brandy Quinlan',
    highestGraduation: 'Masters',
    school: 'KU',
    skills: ['Web Dev', 'Full Stack Development'],
    totalYearsofExperience: 1,
    Company: 'none',
    currentPosition: 'Student',
    from: '2021-03-09',
    to: '2021-03-26',
    githubUsername: 'brandyquinlan',
    languages: ['JavaScript', 'Python'],
  },
  {
    _id: 2,
    // user: 2,
    name: 'Brenna McLeod',
    highestGraduation: 'Masters',
    school: 'KU',
    skills: ['Web Dev', 'Full Stack Development'],
    totalYearsofExperience: 1,
    Company: 'none',
    currentPosition: 'Student',
    from: '2021-03-09',
    to: '2021-03-26',
    githubUsername: 'bmcleod12',
    languages: ['JavaScript', 'Python'],
  },
  {
    _id: 3,
    // user: 3,
    name: 'Maggie May Wilder',
    highestGraduation: 'Masters',
    school: 'KU',
    skills: ['Web Dev', 'Full Stack Development'],
    totalYearsofExperience: 1,
    Company: 'none',
    currentPosition: 'Student',
    from: '2021-03-09',
    to: '2021-03-26',
    githubUsername: 'maggiemaywilder',
    languages: ['JavaScript', 'Python'],
  },
  {
    _id: 4,
    // user: 4,
    name: 'Kolton Decker',
    highestGraduation: 'Masters',
    school: 'KU',
    skills: ['Web Dev', 'Full Stack Development'],
    totalYearsofExperience: 1,
    Company: 'none',
    currentPosition: 'Student',
    from: '2021-03-09',
    to: '2021-03-26',
    githubUsername: 'koltondecker',
    languages: ['JavaScript', 'Python'],
  },
  {
    _id: 5,
    // user: 5,
    name: 'Steve Babb',
    highestGraduation: 'Masters',
    school: 'KU',
    skills: ['Web Dev', 'Full Stack Development'],
    totalYearsofExperience: 1,
    Company: 'none',
    currentPosition: 'Student',
    from: '2021-03-09',
    to: '2021-03-26',
    githubUsername: 'verusbabb',
    languages: ['JavaScript', 'Python'],
  },
]
db.User.deleteMany({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data)
    console.log(`${data.result.n}  'user records inserted!'`)
    // process.exit(0)
  })
  .catch((err) => {
    console.error(err)
    // process.exit(1)
  })

db.Profile.deleteMany({})
  .then(() => db.Profile.collection.insertMany(profileSeed))
  .then((data) => {
    console.log(data)
    console.log(`${data.result.n}  'profile records inserted!'`)
    process.exit(0)
  })
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
