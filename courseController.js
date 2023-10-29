const courseModel = require("../models/courseModel");
let createcourse = async (req,res)=>{
    try{
        let data = req.body;
        let register = await courseModel.create(data);
        return res.status(201).send({ status:true,msg:"course selected sucessfully",data:register});

    } catch (error) {
        return res
        .status(500)
        .send({ status:false,msg :"internal server error"});

    }


};
module.exports = {createcourse}