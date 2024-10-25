import express from "express";
const app= express();
const { config } = require("dotenv");
const port = process.env.PORT;


app.get('/',(req,res)=>{
    res.send('Hello World!')
})
app.listen(port,()=>{
    console.log("serevr is running on ")
})