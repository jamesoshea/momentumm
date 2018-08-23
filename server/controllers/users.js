const axios = require('axios');
const secrets = require('../../config/secrets');

const headers = {
	'Content-type': 'application/json',
};

const pollTelegram = async (signupCode) =>
	new Promise((resolve, reject) => {
		const getTelegramUpdates = () =>
			axios
				.post(
					`https://api.telegram.org/bot${secrets.telegramBotToken}/getUpdates`,
					{ limit: 100 },
					headers,
				)
				.then(({ data }) => {
					const verificationMessage = data.result.find(
						(update) => update.message && update.message.text === signupCode,
					);
					if (verificationMessage) {
						/* eslint-disable-next-line */
						clearInterval(polling);
						resolve(verificationMessage);
					}
				})
				.catch((error) => {
					reject(error);
				});
		const polling = setInterval(getTelegramUpdates, 3000);
	});

module.exports = {
	pollTelegram,
};
