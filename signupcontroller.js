const signupmodel = require("../models/signupmodel");
const Validator = require("./validation.js");
const jwt = require('jsonwebtoken');

let createSignup = async (req, res) => {
    try {
        let data = req.body;

        if (!Validator.isValidBody(data)) {
            return res.status(400).send({ status: false, msg: "No data provided" });
        }

        const {  Email, Password} = data;

        if (!Validator.isValid(Email) || !Validator.isValidEmail.test(Email)) {
            return res.status(400).send({ status: false, msg: "Invalid or missing Email" });
        }

        const sameEmail = await signupmodel.findOne({ Email });

        if (sameEmail) {
            return res.status(400).send({ status: false, msg: "This email already exists" });
        }
        if (!Validator.isValid(Password)) {
            return res.status(400).send({ status: false, msg: "Password is required" });
        }
        let register = await signupmodel.create(data);
        return res.status(201).send({ status: true, msg: "Signed up sucessfully", data: register });
    } catch (error) {
        return res.status(500).send({ status: false, msg: "Internal server error" });
    }
};
const loginApi = async (req, res) => {
    try {
        let data = req.body;
        if (!Validator.isValidBody(data)) {
            return res.status(400).send({ status: false, msg: "No data provided" });
        }

        let { Email, Password } = data;

        if (!Validator.isValid(Email)) {
            return res.status(400).send({ status: false, msg: "Please enter your Email" });
        }

        if (!Validator.isValid(Password)) {
            return res.status(400).send({ status: false, msg: "Please enter your Password" });
        }

        let matchSignup = await signupmodel.findOne({ Email, Password });

        if (!matchSignup) {
            return res.status(404).send({ status: false, msg: "No matching registration found" });
        } else {
            const token = jwt.sign(
                {
                    signupId: matchSignup._id.toString(),
                },
                "Mern Stack", // Consider moving this secret into an environment variable
                {
                    expiresIn: "200000sec",
                }
            );
            return res.status(200).send({ status: true, msg: "Logged in successfully", token });
        }
    } catch (error) {
        return res.status(500).send({ status: false, msg: "Internal server error" });
    }
};
    
// let getstudent = async function(req,res){
//     let data = req.param;
//     let input = await signupModel.find()

//     if(input) return res.send(data)


// }
// const deleteSignup = async (req, res) => {
//     const donateId = req.params.id;
  
//     try {
//         const deletedSignup = await signupmodel.findByIdAndDelete(signupId).exec();

//       if (!deletedSignup) {
//         res.status(404).send("Donation record not found.");
//       } else {
//         res.json(deletedSignup);
//       }
//     } catch (err) {
//       res.status(500).send("Error deleting the donation record.");
//     }
//   };
const deleteApi = async (req, res) => {
    const { Email,Password } = req.body;
  
    try {
      const deletedSignup = await signupmodel.findOneAndDelete({ 
    
        Email,
    
    
        Password,
      }).exec();
  
      if (!deletedSignup) {
        res.status(404).send("Account deleted.");
      } else {
        res.json(deletedSignup);
      }
    } catch (err) {
      res.status(500).send("Error deleting the  record.");
    }
  };
  

module.exports = {createSignup, loginApi,deleteApi}


