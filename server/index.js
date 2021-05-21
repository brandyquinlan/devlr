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
let clients = []

// These functions are the event handlers for each client ("socket") that connects
io.on('connection', (socket) => {
  // When the user initially logs into the app, they are going to register their socket
  // With their unique user._id so that we can keep track of "rooms", as you'll see
  socket.on('storeClientInfo', ({ userId }) => {
    var clientInfo = new Object()
    clientInfo.userId = userId
    clientInfo.socketId = socket.id
    clients.push(clientInfo)
  })

  // Rooms are joined on each persons "Post" page, as well as each comment section, when you open it
  socket.on('join room', ({ room }) => {
    socket.join(room)
  })

  // When posts unmount, or you close the comment modal, we want the socket to leave that "room"
  // So that you don't waste memory by recieveing updates to things that aren't on your screen
  socket.on('leave room', ({ room }) => {
    socket.leave(room)
  })

  // Post update is the only event we are running currently.
  // When users like, or comment on a post, it updates the feeds of any user who is also viewing that post
  socket.on('post update', ({ targetId }) => {
    const index = clients.findIndex((client) => client.userId === targetId)
    if (index < 0) return
    socket.to(`${clients[index].userId}`).emit('update to feed')
  })

  // When the client disconnects, we want to remove them from our clients array, so that no weird client id duplications happen
  socket.on('disconnect', () => {
    clients = clients.filter((client) => client.socketId !== socket.id)
  })
})

try {
  server.listen(PORT, () => {
    console.log('Server online')
  })
} catch (error) {
  throw new Error(
    `Error initializing server --- /server/index.js --- ERROR: ${error}`,
  )
}
