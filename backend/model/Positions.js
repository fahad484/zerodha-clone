const { model } = require("mongoose");

const {PositionsSchema} =require("../schemas/PositionsSchema.js");

const Position = new model("Position",PositionsSchema);

module.exports = { Position };