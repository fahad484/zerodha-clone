const {model} =require("mongoose");

const UserSchema =require("../schemas/UserSchema.js");

const User = new model("User", UserSchema);

module.exports = User;