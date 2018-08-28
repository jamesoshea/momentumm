const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	firstName: {
		type: String,
	},
	userTimezone: {
		type: String,
	},
	chatId: {
		type: String,
	},
});

module.exports = mongoose.model('User', UserSchema);
