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
  balance: {
    type: Number,
    default: 0
  },
  transactions : []

});

module.exports = mongoose.model("User", userTemplate);
