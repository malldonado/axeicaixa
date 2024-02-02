const mongoose = require('mongoose');
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      text: true
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      text: true
    },
    codProduct: {
      type: String,
      required: [true, "Code is required"],
      trim: true,
      text: true
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      trim: true,
      text: true
    }
  },
  {
    timestamp: true, //timestamp every time something is saved
  }
);


module.exports = mongoose.model("User", userSchema);
