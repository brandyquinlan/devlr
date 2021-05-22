const express = require('express')
const http = require('http')
const socket = require('socket.io')
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
// Going for the router methods with express, makes for slightly easier to read code
app.get('/api/hello', (req, res) => {
  res.sendStatus(200)
})
app.use(router)
if (process.env.NODE_ENV === 'production') {
  // If no API routes are hit, send the React app
  const root = path.join(__dirname, '../client', 'build')
  app.use(express.static(root))
  app.get('*', (req, res) => {
    res.sendFile(path.join(root, 'index.html'))
  })
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/devlr', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})

// Set up for initializing socket as a part of our server
const server = http.createServer(app)
const io = socket(server)
require('./socket')(io)

try {
  server.listen(PORT, () => {
    console.log('Server online')
  })
} catch (error) {
  throw new Error(
    `Error initializing server --- /server/index.js --- ERROR: ${error}`,
  )
}
