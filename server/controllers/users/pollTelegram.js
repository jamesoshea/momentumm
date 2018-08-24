const axios = require('axios');

const headers = {
	'Content-type': 'application/json',
};

const sendConfirmationMessage = (chatId, firstName) => {
	axios
		.post(
			`https://api.telegram.org/bot${
				process.env.MOMENTUMM_TELEGRAM_TOKEN
			}/sendMessage`,
			{
				chat_id: chatId,
				text: `Thanks, ${firstName}. You can now close Telegram.`,
			},
			headers,
		)
		.then((response) => response)
		.catch((error) => {
			throw error;
		});
};

const pollTelegram = (signupCode) =>
	new Promise((resolve, reject) => {
		const getTelegramUpdates = () =>
			axios
				.post(
					`https://api.telegram.org/bot${
						process.env.MOMENTUMM_TELEGRAM_TOKEN
					}/getUpdates`,
					{ limit: 100 },
					headers,
				)
				.then(({ data }) => {
					const verificationUpdate = data.result.find(
						(update) => update.message && update.message.text === signupCode,
					);
					if (verificationUpdate) {
						/* eslint-disable-next-line */
						clearInterval(polling);
						sendConfirmationMessage(
							verificationUpdate.message.chat.id,
							verificationUpdate.message.from.first_name,
						);
						resolve(verificationUpdate.message);
					}
				})
				.catch((error) => {
					reject(error);
				});
		const polling = setInterval(getTelegramUpdates, 3000);
	});

module.exports = pollTelegram;
