const express = require("express");
const router = express.Router();
const requestController = require("../controller/requestcontroller");

router.post("/blood", requestController.createRequest); // Corrected function name to createRequest
router.post("/login", requestController.loginRequest); // Corrected function name to loginRequest
router.get("/kiran", requestController.getRequest);
module.exports = router;
