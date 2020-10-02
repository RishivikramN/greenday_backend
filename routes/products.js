const express = require("express");
const { Product } = require("../models/products");

const router = express.Router();

router.get('/',async (req,res)=>{
    try {
        const filter = req.query.filter==="" ||req.query.filter===undefined ? ".*": req.query.filter;
        const page = req.query.page===""||req.query.page===undefined ? 1 : parseInt(req.query.page);
        const pagination = req.query.pagination===""||req.query.pagination===undefined ? 6 : parseInt(req.query.pagination);

        const product = await Product.find({title:{$regex:`${filter}`,$options:"i"}})
                                     .sort({price:req.query.sort})
                                     .skip((page-1) * pagination)
                                     .limit(pagination);
        res.send(product);    
    } catch (error) {
        console.log(error);
    }
    
});

router.get('/count',async (req,res)=>{
    try {
        const count = await Product.estimatedDocumentCount();
        result = {
            count
        };
        res.send(result);  
    } catch (error) {
        console.log(error);
    }
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