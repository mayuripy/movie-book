 import mongoose from 'mongoose'
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    Name:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minilength:6,
    },

});

export default  mongoose; 
