import axios from 'axios';

const createSignupCode = (context, payload) =>
	axios.post('/api/users/signupCode', payload);

export default {
	createSignupCode,
};
