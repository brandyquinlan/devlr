const express = require('express')
const session = require('express-session')
const path = require('path')
const passport = require('passport')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 3001
const app = express()

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())
app.use(express.static(path.resolve(__dirname, '../client/build')))
// We need to use sessions to keep track of our user's login status
app.use(
  session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
  }),
)
app.use(passport.initialize())
app.use(passport.session())

require('../controllers/userController')(app)
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/devlr', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server online and listening on ${PORT}`)
})

try {
  app.listen(PORT)
} catch (error) {
  throw new Error(
    `Error initializing server --- /server/index.js --- ERROR: ${error}`,
  )
}
