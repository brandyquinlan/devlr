const express = require('express')
const session = require('express-session')
const path = require('path')
const passport = require('passport')
const mongoose = require('mongoose')
require('dotenv').config()

const router = require('../controllers')
const PORT = process.env.PORT || 3001
const app = express()

app.use(
  express.urlencoded({
    extended: true,
  }),
)
app.use(express.json())
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
app.use(router)
// If no API routes are hit, send the React app
const root = path.join(__dirname, '../client', 'build')
app.use(express.static(root))
// This likes to throw "no such file or directory found" error in the console, but it is needed for heroku to work...
app.get('*', (req, res) => {
  res.sendFile(path.join(root, 'index.html'))
})
// Going for the router methods with express, makes for slightly easier to read code

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/devlr', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})

try {
  app.listen(PORT)
} catch (error) {
  throw new Error(
    `Error initializing server --- /server/index.js --- ERROR: ${error}`,
  )
}
