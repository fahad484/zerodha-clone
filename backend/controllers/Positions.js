const Position = require("../model/Positions.js");

module.exports.allPositions = async(req,res)=>{
    const allPositions = await Position.find({});
    res.json(allPositions);
};