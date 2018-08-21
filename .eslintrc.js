module.exports = {
	// https://github.com/prettier/eslint-config-prettier
	extends: ['airbnb-base', 'prettier', 'prettier/standard'],
	// https://github.com/prettier/eslint-plugin-prettier
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': 'error',
	},
};
