//make server with the help of express

const express=require("express");
const app=express();
//console.log(express);

app.listen(3000,()=>{
    console.log("Server started on Port 3000.");
});