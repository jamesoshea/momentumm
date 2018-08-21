module.exports = {
	root: true,
	parserOptions: {
		sourceType: 'module',
		parser: 'babel-eslint',
	},
	env: {
		browser: true,
	},
	extends: [
		'airbnb-base',
		'prettier',
		'prettier/standard',
		'plugin:vue/recommended',
	],
	plugins: ['vue', 'prettier'],
	rules: {
		'prettier/prettier': 'error',
	},
};
