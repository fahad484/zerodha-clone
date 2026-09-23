const Holding = require("../model/Holdings.js");

module.exports.allHoldings = async(req,res)=>{
    const allHoldings = await Holding.find({});
    res.json(allHoldings);
};