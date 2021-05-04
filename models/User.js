const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
	},
	password: {
		type: String,
		required: true
	},
	githubUsername: {
		type: String,
		required: true
	},
	access_token: {
		type: String
	},
	date: {
		type: Date,
		default: Date.now
	}
});

const User = mongoose.model('User', userSchema);

 /* Creating a custom method for our User model. This will check if an un-hashed password
  entered by the user can be compared to the hashed password stored in our database */
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the Users Model lifecycle
  // In this case, before a Users is created, we will automatically hash their password
  User.addHook('beforeCreate', function (user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });

module.exports = User;
