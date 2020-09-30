const express = require("express");
const { Product } = require("../models/products");

const router = express.Router();

router.get('/',async (req,res)=>{
    const product = await Product.find();
    res.send(product);
});

router.post('/',async(req,res)=>{
    try {
        const product = new Product({
            title:req.body.title,
            price:req.body.price,
            review:req.body.review,
            offer:req.body.offer
        });
    
        const result = await product.save();   
        res.send(result);

    } catch (e) {
        console.log(e);
    }
});

module.exports = router;