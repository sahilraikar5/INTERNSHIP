//STUDENT MODEL
const mongoose = require("mongoose");

let donateSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
        unique:true,
    },
    Blood_type:{
        type:String,
        required:true,
    },
    Mobile:{
        type:Number,
        required: true,
        unique:true,

    },
    Location:{
        type:String,
        required:true,
        
    }
},{timestamps:true});

module.exports = new mongoose.model("donate", donateSchema);