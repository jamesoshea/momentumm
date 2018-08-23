const express = require('express');
const cors = require('cors');
const userControllers = require('../controllers/users');

const router = express.Router();

router.use(express.json());
router.use(cors());

router.get('/', (req, res) => {
	res.send('respond with a resource');
});

router.post('/signupCode', (req, res) => {
	userControllers.pollTelegram(req.body.signupCode).then((message) => {
		res.status(200).json(message);
	});
});

module.exports = router;
