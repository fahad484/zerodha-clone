const Holding =require("../model/Holdings.js");
const Order =require("../model/Orders.js");


module.exports.newOrder = async(req,res)=>{
    let {name ,qty , price ,mode} =req.body;

    if(mode === "SELL"){
        const holding = await Holding.findOne({name:name});
        console.log(holding);
        if(holding.qty>=qty){
            let sellHolding= await Holding.findOneAndUpdate({name:name},{$inc:{qty:-qty}});
            console.log(sellHolding);

            const newOrder = new Order({
              name: name,
              qty: qty,
              price: price,
              mode: mode,
            });
            await newOrder.save();

        }
        if (!holding) {
          return res.status(400).send("You don't own this stock");
        }

        if (holding.qty < qty) {
          return res.status(400).send("Not enough shares");
        }
    }

    const newOrder = new Order({
        name:name,
        qty:qty,
        price:price,
        mode:mode,
    });
    await newOrder.save();
 
    //adding order qty to holdings i.e mode->buy 
    if(mode === "BUY"){  
        let res= await Holding.findOneAndUpdate({name:name},{$inc:{qty:qty}});
        console.log("buyed stock:",res);
    }
    
  
};

module.exports.allOrders = async(req,res)=>{
    const allOrders = await Order.find({});
    res.json(allOrders);
};