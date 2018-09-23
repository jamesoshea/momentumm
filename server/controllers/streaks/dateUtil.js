const moment = require('moment');

const formatResults = (results) =>
	results
		.sort((a, b) => moment(a.date).format() > moment(b.date).format())
		.map((day) => ({
			result: day.result,
			date: moment(day.date).startOf('day'),
		}));

const findLongestStreak = (results) => {
	const formattedResults = formatResults(results);
	const earliestDay = formattedResults[0];
	const latestDay = formattedResults[formattedResults.length - 1];
	let longestStreak = 0;
	let currentStreak = 0;
	const dateToTest = moment(earliestDay.date).startOf('day');
	const lastDateToTest = moment(latestDay.date)
		.add(1, 'days')
		.startOf('day');
	while (!dateToTest.isSame(lastDateToTest)) {
		const resultToFind = formattedResults.find((result) =>
			moment(result.date)
				.startOf('day')
				.isSame(dateToTest),
		);
		if (!resultToFind) {
			currentStreak = 0;
		} else {
			currentStreak += 1;
		}
		if (currentStreak > longestStreak) {
			longestStreak = currentStreak;
		}
		dateToTest.add(1, 'days');
	}
	return longestStreak;
};

const calculateStats = (results) => ({
	longestStreak: findLongestStreak(results),
});

const resultExists = (results, date) =>
	results.find(
		(result) =>
			moment(result.date)
				.startOf('day')
				.format() ===
			moment(date)
				.startOf('day')
				.format(),
	);

module.exports = {
	calculateStats,
	resultExists,
};
