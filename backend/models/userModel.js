const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
  },
  email: {
    type: String,
    required: [true, "Please add an email"],
    unique: true,
  },
  mobile: {
    type: Number,
    required: [true, "Please add a mobile number"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  subscribed: {
    type: Boolean,
    required: [true, "Please provide a value"],
  },
});

module.exports = mongoose.model("Users", userSchema);
