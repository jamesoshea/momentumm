const express = require('express');
const cors = require('cors');

const Streak = require('../models/Streak');

const router = express.Router();

router.use(express.json());
router.use(cors());

router.get('/all/:chatId', (req, res) => {
	Streak.find({ chatId: req.params.chatId }, (err, streaks) => {
		if (err) {
			console.log(err);
			res.sendStatus(500);
			return 1;
		}
		res.status(200).json(streaks);
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
			res.status(200).json(newStreak);
		},
	);
});

router.delete('/:streakId', (req, res) => {
	Streak.deleteOne({ _id: req.params.streakId }, (err) => {
		if (err) {
			console.log(err);
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
			console.log(err);
			res.sendStatus(400);
			return;
		}
		const dateExists = streak.results.find(
			(existingResult) => existingResult.date === date,
		);
		console.log(dateExists);
		if (dateExists) {
			res.status(400).json('You have already submitted a result on this date');
			return;
		}
		streak.results.push({ date, result });
		streak.save();
		res.status(200).json(streak);
	});
});

module.exports = router;
