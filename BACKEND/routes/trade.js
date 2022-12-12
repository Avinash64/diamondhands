const express = require("express");
const { validate } = require("../models/user");
const router = express.Router();
const User = require("../models/user");
require("dotenv").config();



router.get("/", validate, (req, res) => {
  res.send(res.locals.user.trades);
});

router.post("/", async (req, res) => {
  const user = await User.findById(req.body.id)
  console.log("bruh",user)
  user.balance += parseInt(req.body.add);
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.patch("/:id", getUser, async (req, res) => {
  try {
    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", getUser, async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: "User deleted" });
  } catch (err) {
    res.send(500).json({ message: err.message });
  }
});

async function getUser(req, res, next) {
  let user;
  try {
    user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.user = user;
  next();
}

module.exports = router;