const mongoose = require("mongoose");

let courseSchema = new mongoose.Schema({
    course_name:{
        type:String,
        required:true,
    },
    course_programme:{
        type:String,
        required:true,
        
    },
    course_year:{
        type:Number,
        required:true,
    
    }
},{timestamps:true});
module.exports = new mongoose.model("Course ", courseSchema )