import axios from 'axios';

const createSignupCode = (context, signupCode) =>
	axios.post('/api/users/signupCode', { signupCode });

export default {
	createSignupCode,
};
