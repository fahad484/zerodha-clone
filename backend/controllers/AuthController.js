const User = require("../model/Users.js");
const {createSecretToken} =require("../utils/SecretToken.js");

const bcrypt = require("bcrypt");

module.exports.Signup = async(req,res,next)=>{
    try {
        const {email,password,username ,createdAt}=req.body;
        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.json({message:"user already exists!"});
        }
        const user = await new User({ email, password, username, createdAt});
        // await user.save();  while using create() it is not needed to use save() as create() already saves it.
        //token creation below
        await user.save();
        const token = createSecretToken(user._id);

        res.cookie("token",token,{
            // withCredentials:true,
            httpOnly:false,
        });
       return res.status(201).json({message:"user signed in successfully",success : true ,user});
        // next();
    } catch (error) {
        console.error("Signup error:", error);

        return res.status(500).json({
            success: false,
            message: "Signup failed"
        });
    }
};

module.exports.Login =async(req,res,next)=>{
    try {
        const {email, password} =req.body;
        if(!email || !password){
            return res.json({message:"All fields are required"});
        }
        const user = await User.findOne({email});
        if(!user){
            return res.json({message:"incorrect password or email"});
        }
        const auth = await bcrypt.compare(password,user.password);
        if(!auth){
            return res.json({message:"incorrect password or email"});
        }
        const token = createSecretToken(user._id);

        res.cookie("token",token,{
            // withCredentials:true,
            httpOnly:false,
        });

       return res.status(201).json({message:"user logged in successfully",success: true});
        // next();
    } catch (error) {
        console.log(error);
    }
};

module.exports.Logout = async (req, res) => {
    try {
        res.clearCookie("token");

        return res.status(200).json({
            success: true,
            message: "Logged out successfully"
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Logout failed"
        });
    }
};