const express = require('express');
const cors = require('cors');
const userControllers = require('../controllers/users');

const router = express.Router();

router.use(express.json());
router.use(cors());

router.post('/signupCode', (req, res) => {
	userControllers
		.pollTelegram(req.body.signupCode)
		.then(({ chat, from, text }) => {
			res.status(200).json({ chat, text, user: from });
		});
});

module.exports = router;
