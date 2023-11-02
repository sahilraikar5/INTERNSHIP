//ROUTE 
// const express = require("express");
// const router = express.Router()


// module.exports = router;

const express = require("express");
const router = express.Router()
const studentController = require("../controllers/studentController");

router.post("/std-reg", studentController.createStudent);
router.post("/login",studentController.loginstudent);

module.exports = router;