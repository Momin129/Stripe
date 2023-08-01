const express = require("express");
const router = express.Router();
const {
  registerUser,
  checkExistance,
} = require("../controllers/userControllers");

router.post("/register", registerUser);
router.post("/checkExistance", checkExistance);

module.exports = router;
