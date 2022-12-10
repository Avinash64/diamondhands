const mongoose = require("mongoose");

const userTemplate = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  accounts: [],
  balence: {
    type: Number,
    default: 0
  }

});

module.exports = mongoose.model("User", userTemplate);
