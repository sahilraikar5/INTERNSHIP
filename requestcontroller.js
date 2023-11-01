const requestmodel = require("../models/requestmodel");
const Validator = require("./validation.js");
const jwt = require('jsonwebtoken');

let createRequest = async (req, res) => {
    try {
        let data = req.body;

        if (!Validator.isValidBody(data)) {
            return res.status(400).send({ status: false, msg: "No data provided" });
        }

        const { Name, Email, Blood_type, Gender, Mobile, Location } = data;

        if (!Validator.isValid(Name) || !Validator.isValidName.test(Name)) {
            return res.status(400).send({ status: false, msg: "Invalid or missing Name" });
        }

        if (!Validator.isValid(Email) || !Validator.isValidEmail.test(Email)) {
            return res.status(400).send({ status: false, msg: "Invalid or missing Email" });
        }

        const sameEmail = await requestmodel.findOne({ Email });

        if (sameEmail) {
            return res.status(400).send({ status: false, msg: "This email already exists" });
        }

        if (!Validator.isValid(Blood_type)) {
            return res.status(400).send({ status: false, msg: "Blood type is required" });
        }

        if (!Validator.isValid(Gender)) {
            return res.status(400).send({ status: false, msg: "Gender is required" });
        }

        if (!Validator.isValid(Mobile) || !Validator.isValidMobile.test(Mobile)) {
            return res.status(400).send({ status: false, msg: "Invalid or missing Mobile" });
        }

        const sameMobile = await requestmodel.findOne({ Mobile });

        if (sameMobile) {
            return res.status(400).send({ status: false, msg: "This Phone number already exists" });
        }

        if (!Validator.isValid(Location)) {
            return res.status(400).send({ status: false, msg: "Location is required" });
        }

        let register = await requestmodel.create(data);
        return res.status(201).send({ status: true, msg: "Blood requested successfully", data: register });
    } catch (error) {
        return res.status(500).send({ status: false, msg: "Internal server error" });
    }
};

let loginRequest = async (req, res) => {
    try {
        let data = req.body;
        if (!Validator.isValidBody(data)) {
            return res.status(400).send({ status: false, msg: "No data provided" });
        }

        let { Email, Blood_type } = data;

        if (!Validator.isValid(Email)) {
            return res.status(400).send({ status: false, msg: "Please enter your Email" });
        }

        if (!Validator.isValid(Blood_type)) {
            return res.status(400).send({ status: false, msg: "Please enter your Blood type" });
        }

        let matchRequest = await requestmodel.findOne({ Email, Blood_type });

        if (!matchRequest) {
            return res.status(404).send({ status: false, msg: "No matching registration found" });
        } else {
            const token = jwt.sign(
                {
                    requestId: matchRequest._id.toString(),
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
let getRequest = async (req, res) => {
    try {
      const request = await requestmodel.find({});
      if (!request) {
        return res.status(404).send({ status: false, msg: "Not found" });
      }
      return res.status(200).send({
        status: true,
        msg: "All blood retrieved successfully",
        data: request,
      });
    } catch (error) {
      return res.status(500).send({ status: false, msg: "Internal Server Error" });
    }
  };


module.exports = { createRequest, loginRequest,getRequest };
