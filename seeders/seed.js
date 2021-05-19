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
    _id: mongoose.Types.ObjectId(1),
    email: 'brandyquinlan@gmail.com',
    password: 'brandyquinlan',
    accessToken: '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',
    date: Date.now,
  },
  {
    _id: mongoose.Types.ObjectId(2),
    email: 'brenna.mcleod94@gmail.com',
    password: 'brenna',
    date: Date.now,
  },
  {
    _id: mongoose.Types.ObjectId(3),
    email: 'maggiemaywilder@gmail.com',
    password: 'maggie',
    date: Date.now,
  },
  {
    _id: mongoose.Types.ObjectId(4),
    email: 'kolton.c.decker@gmail.com',
    password: 'kolton',
    date: Date.now,
  },
  {
    _id: mongoose.Types.ObjectId(5),
    email: 'steve.babb@outlook.com',
    password: 'steve',
    date: Date.now,
  },
]

const profileSeed = [
  {
    _id: mongoose.Types.ObjectId(001),
    user: mongoose.Types.ObjectId(1),
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
    avatarUrl:
      'avatars.githubusercontent.com/u/73489664?s=400&u=d04ff688c61322f6f737ce805be049871747b0e9&v=4',
  },
  {
    _id: mongoose.Types.ObjectId(002),
    user: mongoose.Types.ObjectId(2),
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
    avatarUrl: 'https://avatars.githubusercontent.com/u/73400680?v=4',
  },
  {
    _id: mongoose.Types.ObjectId(003),
    user: mongoose.Types.ObjectId(3),
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
    avatarUrl: 'https://avatars.githubusercontent.com/u/72891601?v=4',
  },
  {
    _id: mongoose.Types.ObjectId(004),
    user: mongoose.Types.ObjectId(4),
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
    avatarUrl: 'https://avatars.githubusercontent.com/u/71789549?v=4',
  },
  {
    _id: mongoose.Types.ObjectId(005),
    user: mongoose.Types.ObjectId(5),
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
    avatarUrl: 'https://avatars.githubusercontent.com/u/72149563?v=4',
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
