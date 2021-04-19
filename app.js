const express = require("express");
const app = express();
app.get("/",function(req,res){
  res.send("Home Page");
  console.log("Home Page");
});
app.listen(3000,function(){
  console.log("The server is running");
});
