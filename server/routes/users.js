const express = require('express');
const cors = require('cors');
const pollTelegram = require('../controllers/users/pollTelegram');
const createUser = require('../controllers/users/createUser');

const router = express.Router();

router.use(express.json());
router.use(cors());

router.post('/signupCode', (req, res) => {
	pollTelegram(req.body.signupCode)
		.then(({ chat, from }) => createUser(chat, from, req.body.userTimezone))
		.then(({ chat, user }) => {
			res.status(200).json({ chat, user });
		});
});

module.exports = router;
