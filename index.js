const express=require('express');
const cors = require('cors');
const bodyParser=require('body-parser');
const Connect = require("./database/mongoose");
const bollywood = require('./Routes/Bollywood')
const fitness=require('./Routes/Fitness')
const hollywood=require('./Routes/Hollywood')
const food=require('./Routes/Food')
const technology=require('./Routes/Technology')

const app=express();
app.get("/",(req,res)=>{
    res.send("Home page")
})
app.use(bodyParser.json());
app.use(cors());
app.use("/", bollywood);
app.use("/",fitness);
app.use("/",hollywood)
app.use("/",food)
app.use("/",technology)
app.listen(4000,async()=>{
    console.log("server started on port 4000");
    await Connect();
})