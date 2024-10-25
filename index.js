import express from "express";
const app= express();



app.get('/',(req,res)=>{
    res.send('Hello World!')
})
app.listen(port,()=>{
    console.log("serevr is running on ")
})