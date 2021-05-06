const passport = require('passport')
const bcrypt = require('bcryptjs')
const LocalStrategy = require('passport-local').Strategy

const db = require('../models')
passport.use(
  'local',
  new LocalStrategy(
    {
      usernameField: 'email',
    }, // When a user tries to sign in this code runs
    (email, password, done) => {
      db.User.findOne({
        email,
      }).then((user) => {
        // If there's no user with the given email
        if (!user) {
          return done(null, false, {
            message: 'Incorrect email!',
          })
        }
        // checking the users password in db with the entered password

        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err
          if (isMatch) {
            return done(null, user)
          }
          return done(null, false, { message: 'Incorrect Password!' })
        })

        // If none of the above, return the user
        return done(null, user)
      })
    },
  ),
)

passport.serializeUser((user, cb) => {
  cb(null, user)
})

passport.deserializeUser((obj, cb) => {
  cb(null, obj)
})

// Exporting our configured passport
module.exports = passport
