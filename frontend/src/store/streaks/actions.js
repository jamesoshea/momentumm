import axios from 'axios';

const addNewStreak = (context, streak) => axios.post('/api/streaks', streak);

const getAllStreaks = (context) => {
	axios
		.get('/api/streaks')
		.then((response) => {
			context.commit('UPDATE_STREAKS', response.data);
		})
		.catch(() => {});
};

export default {
	addNewStreak,
	getAllStreaks,
};
