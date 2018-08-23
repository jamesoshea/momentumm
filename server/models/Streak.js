const mongoose = require('mongoose');

const StreakSchema = new mongoose.Schema({
	type: {
		type: Boolean,
	},
	reminderTime: {
		type: String,
	},
	title: {
		type: String,
	},
	userTimezone: {
		type: String,
	},
});

module.exports = mongoose.model('Streak', StreakSchema);
