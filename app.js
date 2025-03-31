const express = require("express");
const app = express();


app.set("view engine","ejs");
app.set("views", __dirname + "/views")


app.get("/",(req,res)=>{
    res.render("hello")
})

app.listen(3001,()=>{
    console.log("APP 3001 RUNING")
})