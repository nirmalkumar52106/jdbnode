const express = require("express")

const app = express()

app.get("/" , (req,res)=>{
    res.send("Hello jdbinfotechk")
})


app.listen(2000 , (req,res)=>{
   console.log("Server started")
})