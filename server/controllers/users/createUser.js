const User = require('../../models/User');

const createUser = (chat, user, userTimezone) =>
	new Promise((resolve, reject) => {
		const newUser = new User({
			firstName: user.first_name,
			chatId: chat.id,
			userTimezone,
		});
		newUser
			.save()
			.then(() => {
				resolve({ chat, user });
			})
			.catch(() => {
				reject();
			});
	});

module.exports = createUser;
