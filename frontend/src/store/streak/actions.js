import axios from 'axios';

const addNewStreak = (context, streak) =>
	axios.post('/api/streaks/', streak).catch((error) => {
		throw error;
	});

const deleteStreak = (context, streakId) =>
	axios.delete(`/api/streaks/${streakId}`).catch((error) => {
		throw error;
	});

const getAllStreaks = (context, chatId) =>
	axios
		.get(`/api/streaks/all/${chatId}`)
		.then((response) => {
			context.commit('UPDATE_STREAKS', response.data);
		})
		.catch((error) => {
			throw error;
		});

const updateStreak = (context, { date, result, streakId }) =>
	axios
		.put(`/api/streaks/${streakId}`, {
			date,
			result,
		})
		.then((response) => getAllStreaks(context, response.data.chatId))
		.catch((error) => {
			throw error;
		});

export default {
	addNewStreak,
	deleteStreak,
	getAllStreaks,
	updateStreak,
};
