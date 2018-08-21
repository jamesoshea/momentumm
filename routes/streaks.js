var express = require('express');
const cors = require('cors');
var router = express.Router();

router.use(express.json());
router.use(cors());

router.get('/', function(req, res, next) {
	res.send('index', { title: 'Express' });
});

module.exports = router;
