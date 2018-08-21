var express = require("express");
const cors = require("cors");
var router = express.Router();

router.use(express.json());
router.use(cors());

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
