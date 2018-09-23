const axios = require('axios');
const { CronJob } = require('cron');
const Streak = require('../../models/Streak');
const getUser = require('../../controllers/users/getUser');

const headers = {
	'Content-type': 'application/json',
};

const sendReminder = (streak) => {
	getUser(streak.chatId).then((user) => {
		const text = streak.type
			? `Hello ${user.firstName}, don't forget this today: ${streak.title}.`
			: `Hello ${user.firstName}, try not to do this today: ${streak.title}.`;
		axios
			.post(
				`https://api.telegram.org/bot${
					process.env.MOMENTUMM_TELEGRAM_TOKEN
				}/sendMessage`,
				{
					chat_id: streak.chatId,
					text,
				},
				headers,
			)
			.then((response) => response)
			.catch((error) => {
				throw error;
			});
	});
};

const createReminder = (streak) => {
	const reminderHour = streak.reminderTime.split(':')[0];
	const reminderMinute = streak.reminderTime.split(':')[1];
	/* eslint-disable-next-line */
	const reminder = new CronJob(
		`00 ${reminderMinute} ${reminderHour} * * *`,
		() => {
			sendReminder(streak);
		},
		null,
		true,
		streak.userTimezone,
	);
	reminder.start();
};

const createReminders = () => {
	Streak.find({}, (err, streaks) => {
		if (err) {
			console.log(err);
			throw err;
		}
		streaks.forEach((streak) => {
			createReminder(streak);
		});
	});
};

module.exports = {
	createReminder,
	createReminders,
};
