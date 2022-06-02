const express = require('express');
const Product = require('../model/products.js')
const router = express.Router();


router.get("/products/:id", async (req, res) => {
    const prodId = req.params.id;
    const product = await Product.findByPk(prodId);
    return res.json({ data: product[0] });
  }); 

router.get("/products", async (req, res) => {
    const products = await Product.findAll();
    return res.json({ data: products });
});
  
router.post("/products", async (req, res) => {
    const product = await Product.create(req.body);
  
    return res.json({ data: product });
});

module.exports = router;