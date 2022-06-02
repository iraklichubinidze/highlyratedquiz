const express = require('express');
const User = require('../model/user.js')
const router = express.Router();


router.get("/user", async (req, res) => {
    const users = await User.findAll();
    return res.json({ data: users });
});

router.post("/user", async (req, res) => {
    const user = await User.create(req.body);
    return res.json({ data: user });
  });

module.exports = router;