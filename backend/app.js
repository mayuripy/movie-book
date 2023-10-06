 import express from "express";
 import mongoose from "mangoose";
 import dotenv from "dotenv";
import userRouter from "./router/user-routs";

 dotenv.config();
 const app = express();
 
 //middelewars

 app.use("./user",userRouter)

 app.use("/",(req,res,next) =>{
    res.send("<h1>abe tu ja nare </h1>");
 })
 console.log("connecting to the database and server runnig")

 mongoose.connect("mongodb+srv://chaudharimayuri2004:${process.env.MANGOOSE+PASSWORD }@cluster0.lnub8zl.mongodb.net/?retryWrites=true&w=majority"
).then(() => 
app.listen(5000,()=>

)
)

.catch((e) => console.log(e));
 


 //SQKASxNXgS9HacDg

 //mongodb+srv://chaudharimayuri2004:<password>@cluster0.lnub8zl.mongodb.net/?retryWrites=true&w=majority