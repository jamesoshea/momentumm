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
		'no-param-reassign': 0,
	},
	globals: {
		jest: true,
		expect: true,
		mockFn: true,
		config: true,
		afterEach: true,
		beforeEach: true,
		describe: true,
		it: true,
		runs: true,
		waitsFor: true,
		pit: true,
		require: true,
		xdescribe: true,
		xit: true,
	},
};
