 import express from "express";
 import mongoose from "mangoose";
 import dotenv from "dotenv";

 dotenv.config();
 const app = express();
 

 app.use("/",(req,res,next) =>{
    res.send("<h1>abe tu ja nare </h1>");
 })


 mongoose.connect("mongodb+srv://chaudharimayuri2004:${process.env.MANGOOSE+PASSWORD }@cluster0.lnub8zl.mongodb.net/?retryWrites=true&w=majority"
).then(() => 
  app.listen(5000,()=>
    console.log("connecting to the database and server runnig")
  )
)

.catch((e) => console.log(e));
 


 //SQKASxNXgS9HacDg

 //mongodb+srv://chaudharimayuri2004:<password>@cluster0.lnub8zl.mongodb.net/?retryWrites=true&w=majority