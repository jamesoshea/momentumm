const express = require('express');
const cors = require('cors');
const pollTelegram = require('../controllers/users/pollTelegram');

const router = express.Router();

router.use(express.json());
router.use(cors());

router.post('/signupCode', (req, res) => {
	pollTelegram(req.body.signupCode).then(({ chat, from, text }) => {
		res.status(200).json({ chat, text, user: from });
	});
});

module.exports = router;
