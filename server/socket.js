const db = require('../models')
const mailer = require('../config/nodemailer')
let clients = []

module.exports = (io) => {
  // These functions are the event handlers for each client ("socket") that connects
  io.on('connection', (socket) => {
    console.log('client connected')
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

    socket.on('post email notif', (data) => {
      const [userData, targetId, postData] = data

      try {
        db.User.findOne({ _id: targetId }).then((user) => {
          const mail = {
            to: user.email,
            from: process.env.DEVLR_EMAIL,
            subject: 'New post on your page!',
            text: `You have a new post on your page! User: ${userData.name}, Title: ${postData.title}, Body: ${postData.body}`,
          }
          console.log(mail)

          mailer.verify((err) => {
            if (err) throw new Error(err)
          })

          mailer.sendMail(mail)
        })
      } catch (error) {
        console.error(error)
      }
    })

    // When the client disconnects, we want to remove them from our clients array, so that no weird client id duplications happen
    socket.on('disconnect', () => {
      clients = clients.filter((client) => client.socketId !== socket.id)
    })
  })
}
