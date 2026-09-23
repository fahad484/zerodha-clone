const router = require("express").Router();
const {newOrder,allOrders} =require("../controllers/Orders.js");


router.post("/newOrder",newOrder);
router.get("/Orders",allOrders);

module.exports = router;