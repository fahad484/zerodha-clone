const router = require("express").Router();
const {allPositions} =require("../controllers/Positions.js");

router.get("/allPositions",allPositions);

module.exports = router;