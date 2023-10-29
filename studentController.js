const studentModel = require("../models/studentModel");

let createStudent = async (req,res)=>{
    try{
        let data = req.body;
        let register = await studentModel.create(data);
        return res.status(201).send({ status:true,msg:"Student registered sucessfully",data:register});

    } catch (error) {
        return res
        .status(500)
        .send({ status:false,msg :"internal server error"});

    }


};
module.exports = {createStudent}