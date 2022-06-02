const express = require('express');
const Order = require('../model/order.js')
const router = express.Router();
  
router.post("/order/:userid/:itemid", async (req, res) => {
    // ...
});

module.exports = router;