const express = require('express');
const cors = require('cors');

const Streak = require('../models/Streak');

const router = express.Router();

router.use(express.json());
router.use(cors());

router.get('/', (req, res) => {
	Streak.find((err, streaks) => {
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
	const { reminderTime, title, type } = req.body;
	Streak.create(
		{
			reminderTime,
			title,
			type,
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

module.exports = router;
