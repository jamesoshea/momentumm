import axios from 'axios';

const addNewStreak = (context, streak) => axios.post('/api/streaks', streak);

export default {
	addNewStreak,
};
