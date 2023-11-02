const mongoose = require("mongoose");

let signupSchema = new mongoose.Schema({
    Email:{
        type:String,
        required:true,
        unique:true,
    },
    Password:{
        type:String,
        required:true,
        
    }
},{timestamps:true});

module.exports = new mongoose.model("signup", signupSchema);