import mongoose from "mongoose"

const Schema = new mongoose.Schema;
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

export default mongoose.model("user",userschema)