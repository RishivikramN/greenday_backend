const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        maxlength:30,
        required:true,
        trim:true,
        unique:true,
        index:true
    },
    price:{
        type:Number,
        required:true,
        trim:true
    },
    review:{
        type:Number,
        trim:true,
        maxlength:5
    },
    offer:{
        type:String,
        trim:true,
        maxlength:4
    }
});

const Product = mongoose.model("Product",productSchema);

module.exports.Product = Product;