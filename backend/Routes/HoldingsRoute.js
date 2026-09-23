const router = require("express").Router();
const {allHoldings} =require("../controllers/Holdings.js");

router.get("/allHoldings",allHoldings);

module.exports =router;