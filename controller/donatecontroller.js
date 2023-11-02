const donatemodel = require("../models/donatemodel");
const Validator = require("./validation.js");
const createDonate = async (req, res) => {
    try {
        let data = req.body;

        if (!Validator.isValidBody(data)) {
            return res.status(400).send({ status: false, msg: "Invalid or no data provided" });
        }
        const { Name, Email, Blood_type, Mobile, Location } = data;

        if (!Validator.isValid(Name) || !Validator.isValidName.test(Name)) {
            return res.status(400).send({ status: false, msg: "Invalid or missing Name" });
        }

        if (!Validator.isValid(Email) || !Validator.isValidEmail.test(Email)) {
            return res.status(400).send({ status: false, msg: "Invalid or missing Email" });
        }

        const sameEmail = await donatemodel.findOne({ Email });

        if (sameEmail) {
            return res.status(400).send({ status: false, msg: "This email already exists" });
        }
        if (!Validator.isValid(Blood_type)) {
            return res.status(400).send({ status: false, msg: "Blood type is required" });
        }
        if (!Validator.isValid(Mobile) || !Validator.isValidMobile.test(Mobile)) {
            return res.status(400).send({ status: false, msg: "Invalid or missing Mobile" });
        }
        const sameMobile = await donatemodel.findOne({ Mobile });

        if (sameMobile) {
            return res.status(400).send({ status: false, msg: "This Phone number already exists" });
        }
        if (!Validator.isValid(Location)) {
            return res.status(400).send({ status: false, msg: "Location is required" });
        }

        let register = await donatemodel.create(data);

        if (register) {
            return res.status(201).send({ status: true, msg: "Blood requested successfully", data: register });
        } else {
            return res.status(500).send({ status: false, msg: "Failed to create donation record" });
        }
    } catch (error) {
        
        console.error("Error in createDonate:", error);
        return res.status(500).send({ status: false, msg: "Internal server error", error: error.message });
    }
};
//get operation
// let getDonate = async (req, res) => {
//     try {
//       const donate = await donatemodel.find({});
//       if (!donate) {
//         return res.status(404).send({ status: false, msg: "Not found" });
//       }
//       return res.status(200).send({
//         status: true,
//         msg: "All blood retrieved successfully",
//         data: donate,
//       });
//     } catch (error) {
//       return res.status(500).send({ status: false, msg: "Internal Server Error" });
//     }
//   };
const updateDonate = async function (req, res) {
    try {
        const stuid = req.params.id;
        const {  Email, Mobile, Location } = req.body;
        const updateFields = {};

        const donate = await donatemodel.findOneAndUpdate(
            { _id: stuid},
            { $set: {  Email, Mobile, Location } },
            { new: true },
        )
            console.log(stuid)
        // if (!donate) {
        //     return res.send({ status: false, message: "not found" });
        // }
        return res.send({ status: true, message: "donate data updated Successfully", data: donate });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: "Internal server error" });
    }
};
const deleteApi = async (req, res) => {
    const { Name, Email, Blood_type, Mobile, Location } = req.body;
  
    try {
      const deletedDonate = await donatemodel.findOneAndDelete({ 
        Name,
        Email,
        Blood_type,
        Mobile,
        Location
      }).exec();
  
      if (!deletedDonate) {
        res.status(404).send("Donation record not found.");
      } else {
        res.json(deletedDonate);
      }
    } catch (err) {
      res.status(500).send("Error deleting the donation record.");
    }
  };
  
module.exports = { createDonate,updateDonate,deleteApi};


