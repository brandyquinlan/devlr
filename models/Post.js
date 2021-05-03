const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const postSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'user'
	},
	title: {
		type: String,
		required: true
	},
	body: {
		type: String,
		required: true
	},
	likes: [
		{
			user: {
				type: Schema.Types.ObjectId
			}
		}
	],
	comments: [
		{
			user: {
				type: Schema.Types.ObjectId
			},
			text: {
				type: String
			},
			date: {
				type: Date,
				default: Date.now
			}
		}
	],
	date: {
		type: Date,
		default: Date.now
	}
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
