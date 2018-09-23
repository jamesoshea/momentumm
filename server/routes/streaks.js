const express = require('express');
const cors = require('cors');

const Streak = require('../models/Streak');
const { createReminder } = require('../controllers/streaks/createReminders');
const {
	calculateStats,
	resultExists,
} = require('../controllers/streaks/dateUtil');

const router = express.Router();

router.use(express.json());
router.use(cors());

router.get('/all/:chatId', (req, res) => {
	Streak.find({ chatId: req.params.chatId }, (err, streaks) => {
		if (err) {
			res.sendStatus(500);
			return 1;
		}
		const streaksWithStats = streaks.map((streak) => ({
			stats: calculateStats(streak.results),
			/* eslint-disable-next-line */
			...streak._doc,
		}));
		res.status(200).json(streaksWithStats);
		return 0;
	});
});

router.post('/', (req, res) => {
	const { reminderTime, title, type, userTimezone, chatId } = req.body;
	Streak.create(
		{
			chatId,
			reminderTime,
			title,
			type,
			userTimezone,
		},
		(err, newStreak) => {
			if (err) {
				res.sendStatus(500);
				return;
			}
			createReminder(newStreak);
			res.status(200).json(newStreak);
		},
	);
});

router.delete('/:streakId', (req, res) => {
	Streak.deleteOne({ _id: req.params.streakId }, (err) => {
		if (err) {
			res.sendStatus(400);
			return;
		}
		res.sendStatus(200);
	});
});

router.put('/:streakId', (req, res) => {
	const { date, result } = req.body;
	Streak.findById(req.params.streakId, (err, streak) => {
		if (err) {
			res.sendStatus(400);
			return;
		}
		if (resultExists(streak.results, date)) {
			res.status(400).json('You have already submitted a result on this date');
			return;
		}
		streak.results.push({ date, result });
		streak.save();
		res.status(200).json(streak);
	});
});

module.exports = router;
