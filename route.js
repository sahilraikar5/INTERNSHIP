const express = require("express");
const router = express.Router()


const courseController = require("../controllers/courseController")
router.post("/reg",courseController.createcourse);
module.exports = router;


