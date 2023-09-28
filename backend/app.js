 import express from "express"
 import mongoose from "mangoose"
 const app = express();

 app.use("/",(req,res,next) =>{
    res.send("<h1>ohh oh!</h1>");
 })


 mongoose.connect("mongodb+srv://chaudharimayuri2004:<password>@cluster0.lnub8zl.mongodb.net/?retryWrites=true&w=majority")
 app.listen(5000, () =>{

   
    console.log("connected to localhost port ${5000}");
 })


 //SQKASxNXgS9HacDg

 //mongodb+srv://chaudharimayuri2004:<password>@cluster0.lnub8zl.mongodb.net/?retryWrites=true&w=majority