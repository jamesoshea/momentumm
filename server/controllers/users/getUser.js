const User = require('../../models/User');

const getUser = (chatId) =>
	new Promise((resolve, reject) => {
		User.findOne({ chatId }, (err, user) => {
			if (err) {
				reject(err);
				return;
			}
			resolve(user);
		});
	});

module.exports = getUser;
