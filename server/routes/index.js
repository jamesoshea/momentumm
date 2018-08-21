const express = require('express');
const cors = require('cors');

const router = express.Router();

router.use(express.json());
router.use(cors());

/* GET home page. */
router.get('/', (req, res) => {
	res.render('index', { title: 'Express' });
});

module.exports = router;
