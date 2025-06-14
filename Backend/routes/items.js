const express = require("express");
const router = express.Router();
const User = require("../model/model.js");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Error fetching users" });
  }
});

module.exports = router;
