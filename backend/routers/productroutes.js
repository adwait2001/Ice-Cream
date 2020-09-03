const express=require('express')
const Product=require('../models/productmodel') 

const router=express.Router();

router.get("/",async(req,res)=>{
    const products=await Product.find({})
    res.send(products);
})

//post data to an API server
router.post("/",async (req, res) => {
    const product = new Product({
        ConewaferType:req.body.ConewaferType,
        BaseFlavour:req.body.BaseFlavour,
        Toppings:req.body.Toppings
    });
    const newProduct = await product.save();
    if (newProduct) {
      return res.status(201).send({ message: 'New Product Created', data: newProduct });
    }
    return res.status(500).send({ message: ' Error in Creating Product.' });
  })

//this route is used to display the latest icecream made by user to let him add to cart instantly


router.get("/latest",async(req,res)=>{
    const products=await Product.find({}).sort({_id:-1}).limit(1)
    res.send(products);
})

router.get("/:id",async(req,res)=>{
  const product=await Product.findById(req.params.id);
  res.send(product);
})

//fetch product by id

  
module.exports=router;