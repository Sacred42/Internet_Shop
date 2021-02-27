const express = require('express');
const route = express();
const mongoose = require('mongoose');
const productSchema = require('../models/products');

route.get('/products' , async (req, res)=>{
    const products = await productSchema.find();
    res.send(products);
})

route.get('/products/:_id' , async(req, res)=>{
    const productId = req.params;
    const product = await productSchema.findById(productId, function (err, adventure) {});
    res.send(product);
})

module.exports = route;