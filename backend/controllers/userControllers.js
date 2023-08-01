const jwt = require("jsonwebtoken");
const bycrpt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, mobile, password } = req.body;
  if (!name || !email || !mobile || !password) {
    res.status(400).json({
      message: "Please add all fields.",
    });
  }

  //Hash password
  const salt = await bycrpt.genSalt(10);
  const hashedPassword = await bycrpt.hash(password, salt);

  // user creation
  const user = await User.create({
    name,
    email,
    mobile,
    password: hashedPassword,
    subscribed: false,
  });

  if (user) {
    res.status(200).json({
      message: "Registered Successfully.",
    });
  }
});

const checkExistance = asyncHandler(async (req, res) => {
  const email = req.body.email;
  const emailExists = await User.findOne({ email });
  const mobile = req.body.mobile;
  const mobileExists = await User.findOne({ mobile });
  console.log(email, mobile);

  if (email) {
    if (emailExists) {
      res.status(411).json({ message: "Email already exists." });
    } else res.status(200).json({ message: "" });
  }

  if (mobile) {
    if (mobileExists)
      res.status(411).json({ message: "Mobile number already exists." });
    else res.status(200).json({ message: "" });
  }
});

// const checkMobile = asyncHandler(async (req, res) => {
//   const { mobile } = req.body;
//   // check if given number already exists
//   const mobileExists = await User.findOne({ mobile });
//   if (mobileExists)
//     res.status(411).json({ message: "Mobile number already exists." });
//   else res.status(200).json({ message: "" });
// });

module.exports = { registerUser, checkExistance };
