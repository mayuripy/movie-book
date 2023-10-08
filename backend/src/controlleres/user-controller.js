
 import User from "../models/user";
// const User = require("../models/user")
import User from "../models/user.js";
export const getAIIUser = async (req,res,next) => {
    let users;
    try {
       users = User.find()
    }catch(err){
        return next(err);
    }

    if (!users) {
      return res.status(500).json({message:"unexpected Error Occured"})
    }
    return res.status(200),json({users})
};

export const  adduser = async(req,res,next) => {
  const { name,email,password}= req.body
  if(!name && name.trim() === "" && !email && email.trim() === "" && !password && password.trim()) {}
}