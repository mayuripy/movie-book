 import express from "express";

 const app = express();

 app.use("/",(req,res,next) =>{
    res.send("<h1>hellow</h1>");
 })

 app.listen(5000, () =>{
    console.log("connected to localhost port ${5000}");
 })
