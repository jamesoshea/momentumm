import { streakValidator } from '../../util/validators';

describe('validators.js', () => {
	it('should mount for testing', () => {
		const MockStreak = {
			reminderTime: '',
			title: 'Dont eat burgers',
		};

		expect(streakValidator(MockStreak)).toEqual(false);
	});
});
