const express = require("express");
const router = express.Router();
const donateController = require("../controller/donatecontroller");
const requestController = require("../controller/requestcontroller");
const signupController = require("../controller/signupcontroller");

router.post("/dj", donateController.createDonate);
// router.post("/login", donateController.loginDonate);
//router.get("/abcde", donateController.getDonate);
router.put("/ram/:id",donateController.updateDonate);
router.delete("/registrations",donateController.deleteApi);


router.post("/blood", requestController.createRequest); // Corrected function name to createRequest
router.post("/login", requestController.loginRequest); // Corrected function name to loginRequest
router.get("/kiran", requestController.getRequest);

router.post("/signup", signupController.createSignup); // Changed the route to '/signup' and the function name to createSignup
router.post("/RAM", signupController.loginApi); // Changed the route to '/login' and the function name to loginSignup
router.delete("/reg",signupController.deleteApi);


module.exports = router;
