const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const db = require('../models')
passport.use(
  new LocalStrategy({
    usernameField: 'email',
  }), // When a user tries to sign in this code runs
  (email, password, done) => {
    db.User.findOne({
      email,
    }).then((dbUser) => {
      // If there's no user with the given email
      if (!dbUser) {
        return done(null, false, {
          message: 'Incorrect email!',
        })
      }
      // If there is a user with the given email, but the password the user gives us is incorrect
      if (!dbUser.validPassword(password)) {
        return done(null, false, {
          message: 'Incorrect password!',
        })
      }
      // If none of the above, return the user
      return done(null, dbUser)
    })
  },
)

passport.serializeUser((user, cb) => {
  cb(null, user)
})

passport.deserializeUser((obj, cb) => {
  cb(null, obj)
})

// Exporting our configured passport
module.exports = passport
