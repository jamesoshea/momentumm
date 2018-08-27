import axios from 'axios';

const addNewStreak = (context, streak) => axios.post('/api/streaks/', streak);

const deleteStreak = (context, streakId) => {
	axios.delete(`/api/streaks/${streakId}`).catch(() => {});
};

const getAllStreaks = (context, chatId) => {
	axios
		.get(`/api/streaks/all/${chatId}`)
		.then((response) => {
			context.commit('UPDATE_STREAKS', response.data);
		})
		.catch(() => {});
};

const updateStreak = (context, { date, result, streakId }) => {
	axios
		.put(`/api/streaks/${streakId}`, {
			date,
			result,
		})
		.then((response) => {
			context.commit('UPDATE_STREAKS', response.data);
		})
		.catch(() => {});
};

export default {
	addNewStreak,
	deleteStreak,
	getAllStreaks,
	updateStreak,
};
