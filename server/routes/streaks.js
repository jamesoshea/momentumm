const express = require('express');
const cors = require('cors');

const router = express.Router();

router.use(express.json());
router.use(cors());

router.get('/', (req, res) => {
	res.status(200).json('hello');
});

module.exports = router;
