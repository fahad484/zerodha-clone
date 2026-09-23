if(process.env.NODE_ENV != "production"){
    require("dotenv").config();
    const dns = require("dns");  
    // Set custom DNS servers to bypass local DNS issues                              │
    dns.setServers(["8.8.8.8", "8.8.4.4", "1.1.1.1", "1.0.0.1"]);                     
    console.log("DNS servers set to Google and Cloudflare");  
}

const express= require("express");
const app = express();
const mongoose =require("mongoose");



const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const AuthRoute = require("./Routes/AuthRoute.js");


const {Order} =require("./model/Orders.js");
const {Holding} = require("./model/Holdings.js");
const {Position} =require("./model/Positions.js");

// app.use(cors());
app.use(cors({
    origin: ["http://localhost:3000",
     "http://localhost:3001"],
    credentials: true
}));
//old implementation is body-parser() and modern is express.json()
// app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

app.use("/",AuthRoute);

const PORT = process.env.PORT || 3002;
// const URI=process.env.MONGO_URL;
const URI = "mongodb://localhost:27017/zerodha";



main().then(()=>console.log("connection successful"))
.catch((err)=>console.log(err));

async function main(){
    console.log("start");
    await mongoose.connect(URI);
    console.log("connected to db");
}



app.get("/allHoldings",async(req,res)=>{
    const allHoldings = await Holding.find({});
    res.json(allHoldings);
});

app.get("/allPositions",async(req,res)=>{
    const allPositions = await Position.find({});
    res.json(allPositions);
});

app.post("/newOrder",async(req,res)=>{
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
    
  
});



app.get("/Orders",async(req,res)=>{
    const allOrders = await Order.find({});
    res.json(allOrders);
});

app.listen(PORT,()=>{
    console.log("app is listening at port 3002.");
   
})