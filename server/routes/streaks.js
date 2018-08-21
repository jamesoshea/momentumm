const express = require('express');
const cors = require('cors');

const Streak = require('../models/Streak');

const router = express.Router();

router.use(express.json());
router.use(cors());

router.get('/', (req, res) => {
	res.status(200).json('hello');
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
