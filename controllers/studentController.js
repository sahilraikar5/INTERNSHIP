//STUDENT CONTROLLER
const studentmodel = require("../models/studentmodel");
const Validator = require("./validation.js");
//  register student
const jwt = require('jsonwebtoken')
const createStudent = async (req, res) => {
    try {
        let data = req.body;

        if (!Validator.isValidBody(data)) {
            return res.status(400).send({ msg: "No data provided" });
        }

        const { student_name, Email, Usn, Gender, Mobile, Password } = data;

        if (!Validator.isValid(student_name)) {
            return res.status(400).send({ msg: "Student name is required" });
        }
        if (!Validator.isValidName.test(student_name)) {
            return res.status(400).send({ msg: "Invalid name" });
        }

        if (!Validator.isValid(Email)) {
            return res.status(400).send({ msg: "Email is required" });
        }
        if (!Validator.isValidEmail.test(Email)) {
            return res.status(400).send({ msg: "Invalid Email" });
        }

        const sameEmail = await Student.findOne({ Email });
        if (sameEmail) {
            return res.status(400).send({ msg: "This email already exists" });
        }

        if (!Validator.isValid(Usn)) {
            return res.status(400).send({ msg: "Usn is required" });
        }

        const sameUsn = await Student.findOne({ Usn });
        if (sameUsn) {
            return res.status(400).send({ msg: "This Usn already exists" });
        }

        if (!Validator.isValid(Gender)) {
            return res.status(400).send({ msg: "Gender is required" });
        }

        if (!Validator.isValid(Mobile)) {
            return res.status(400).send({ msg: "Mobile is required" });
        }
        if (!Validator.isValidMobile.test(Mobile)) {
            return res.status(400).send({ msg: "Invalid Mobile" });
        }

        const sameMobile = await Student.findOne({ Mobile });
        if (sameMobile) {
            return res.status(400).send({ msg: "This Phone number already exists" });
        }

        if (!Validator.isValid(Password)) {
            return res.status(400).send({ msg: "Password is required" });

        }
        
        let reg = await studentmodel.create(data)
        res.send({data:reg})

        
    } catch (error) {
        return res.status(500).send({ status: false, msg: "Internal server error" });
    }
};


//login student

let loginstudent = async(req,res)=>{
    try{
        let data = req.body;
        if(!Validator.isValidBody(data)){
            return res.status(404).send({ status :false,msg:"no data provided"});
        }
        let{Email,Password} = data;
        if(!Validator.isValid(Email)){
            return res.status(400).send({msg : "please enter your Email"});
        }
        if(!Validator.isValid(Password)){
            return res.status(400).send({msg : "please enter your Password"});

        }
        let matchStudent = await Student.findOne({Email,Password});
        // if (matchStudent){
        //     return res.status(200).send({msg:"student registered"});
        // }
        if (!matchStudent){
            return res.status(200).send({msg:"student not  registered"});
        }
        else{
            const token = jwt.sign(
                {
                    studentId: matchStudent._id.toString(),
                },
                "Mern Stack",
                {
                    expiresIn:"200000sec",
                }
            );
            return res.status(200).send({msg:"student logged in successfully", token});
        }
        // else{res.send('registered')}
    }catch (error) {
        return res
        .status(500)
        .send({ststus : false,msg:"internal server error"});

    }
};

module.exports = { createStudent,loginstudent };
