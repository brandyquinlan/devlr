const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

module.exports = User;
