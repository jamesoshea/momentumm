const mongoose = require('mongoose');

const StreakSchema = new mongoose.Schema({
	doDont: {
		type: Boolean,
	},
	title: {
		type: String,
	},
	reminderTime: {
		type: String,
	},
});

module.exports = mongoose.model('Streak', StreakSchema);
