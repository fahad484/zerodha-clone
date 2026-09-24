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
const Holdings = require("./Routes/HoldingsRoute.js");
const Positions =require("./Routes/PositionsRoute.js");
const Orders =require("./Routes/OrdersRoute.js");


const {Order} =require("./model/Orders.js");
const {Holding} = require("./model/Holdings.js");
const {Position} =require("./model/Positions.js");

// app.use(cors());
app.use(cors({
    origin: ["http://localhost:3000",
     "http://localhost:3001",`${process.env.DASHBOARD_API_URL}`,`${process.env.FRONTEND_API_URL}`],
    credentials: true
}));
//old implementation is body-parser() and modern is express.json()
// app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

app.use("/",AuthRoute);
app.use("/",Holdings);
app.use("/",Positions);
app.use("/",Orders);

const PORT = process.env.PORT || 3002;

//mongodb url
const URI=process.env.MONGO_URL;

//local url
// const URI = "mongodb://localhost:27017/zerodha";



main().then(()=>console.log("connection successful"))
.catch((err)=>console.log(err));

async function main(){
    console.log("start");
    await mongoose.connect(URI);
    console.log("connected to db");
}


app.listen(PORT,()=>{
    console.log("app is listening at port 3002.");
   
})