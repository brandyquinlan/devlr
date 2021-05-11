const mongoose = require('mongoose')
const db = require('../models')

mongoose.connect('mongodb://localhost:27017/devlr', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)

const userSeed = [
  {
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
]

db.User.deleteMany({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(`${data.result.n}  'records inserted!'`)
    process.exit(0)
  })
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
