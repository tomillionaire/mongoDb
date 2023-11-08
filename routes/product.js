const express = require('express')
const productRouter = express.Router()
const Product = require('../models/product')

productRouter.get('/product',(req,res)=>{
   Product.find()
   .then((p)=>{
    res.json(p)
   })
   .catch((error)=>{
    res.json({
        message: error.message
    })
   })
})

productRouter.get('/product/:id',(req,res)=>{
    Product.findById(req.params.id)
    .then((product)=>{
        if(product){
            res.json(product)
        } else{
            res.status(404).json({
                message: "product not found"
            })
        }
    })
    .catch((error)=>{
        res.json(
            {
                message: error.message
            }
        )
    })
})

productRouter.post('/product',(req,res)=>{
    const newProduct= new Product({
        name:req.body.name,
        desc:req.body.desc,
        price:req.body.price,
        rating:req.body.rating
    })

    newProduct.save()
    .then((np)=>{
        res.json(np)

    })
    .catch((error)=>{
        res.json({
            message: error.message
        })
    })
})

productRouter.delete('/product/:id',(req,res)=>{
    Product.findById(req.params.id)
      .then((product) => {
          if (!product) {
              return res.status(404).json({ message: 'product not found' });
          }

          product.remove()
              .then(() => {
                  res.json({ message: 'Deleted product' });
              })
              .catch((err) => {
                  res.status(500).json({ message: err.message });
              });
      })
      .catch((err) => {
          res.status(500).json({ message: err.message });
      });
});



productRouter.patch('/product/:id',(req,res)=>{
    res.send('update a particular product')
})

module.exports=productRouter