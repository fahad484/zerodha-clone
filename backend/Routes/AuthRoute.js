const { Signup , Login , Logout} =require("../controllers/AuthController.js");

const router = require("express").Router();

const {userVerification} =require("../middlewares/AuthMiddleware.js");

router.post("/signup",Signup);
router.post("/login",Login);
router.post("/logout", Logout);
router.post('/',userVerification);

module.exports = router ;