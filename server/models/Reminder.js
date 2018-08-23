const mongoose = require('mongoose');

const ReminderSchema = new mongoose.Schema({
	doDont: {
		type: Boolean,
	},
});

module.exports = mongoose.model('Reminder', ReminderSchema);
