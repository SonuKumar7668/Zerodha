const express = require("express");
const app= express();
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");

// const frontend = process.env.FRONTEND;
const url=process.env.MONGO_URL;
const port = process.env.PORT ||8080;

const {holdingModel} = require("./Models/holdingSchema");
const {positionsModel} = require("./Models/positionsSchema")

app.use(bodyParser.json());
app.use(cors());

app.get("/",(req,res)=>{
    
    console.log(url);
    res.send("hello");
})

app.get("/allholding",async(req,res)=>{
    let allholding = await holdingModel.find();
    res.json(allholding);
})

app.get("/allpositions",async (req,res)=>{
    let allpositions = await positionsModel.find();
    res.json(allpositions);
})
app.listen(port,()=>{
    console.log(`app is listening at port ${port}`);
    console.log("Connecting Database...")
    mongoose.connect(url).then(()=>{
        console.log("Database connected");
    })
})