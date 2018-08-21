const express = require('express');
const cors = require('cors');

const router = express.Router();

router.use(express.json());
router.use(cors());

router.get('/', (req, res) => {
	res.send('respond with a resource');
});

module.exports = router;
