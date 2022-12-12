const express = require("express");
const { validate } = require("../models/user");
const router = express.Router();
const User = require("../models/user");
require("dotenv").config();




router.post("/reset", async (req, res) => {
    const user = await User.findById(req.body.id)
    user.balance = 10000
    user.accounts = []
    user.transactions = []
    console.log(user)

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
    });
      
  


module.exports = router;