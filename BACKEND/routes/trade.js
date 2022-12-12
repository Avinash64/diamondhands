const express = require("express");
const { validate } = require("../models/user");
const router = express.Router();
const User = require("../models/user");
require("dotenv").config();



router.get("/", validate, (req, res) => {
  res.send(res.locals.user.transactions);
});


router.post("/", async (req, res) => {
  const user = await User.findById(req.body.id)
  console.log("bruh",user)
  const coin = {
    id: req.body.id2,
    amount: parseFloat(req.body.amount),
    value: parseFloat(req.body.value)
  }
  if(coin.value){
  user.transactions.push(coin)
  }
  var found = false
  // user.accounts.forEach(element => {
  //   if(element.id === req.body.id2){
  //     element.amount += parseInt(req.body.amount);
  //     console.log(element.amount += parseInt(req.body.amount))
  //     found = true;
  //   }
  // });
  for (let index = 0; index < user.accounts.length; index++) {
    const element = user.accounts[index];
    if(element.id === req.body.id2){
      user.accounts[index].amount += req.body.amount;
      console.log(element)
      found = true;
    }
  }
  if (!found){
    user.accounts.push({
      id: req.body.id2,
      amount: req.body.amount
    })
  }
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
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