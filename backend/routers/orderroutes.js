const express=require('express')
const Order=require('../models/ordermodel'); 
const { route } = require('./productroutes');

const router=express.Router();

router.post("/",async (req, res) => {
    const order = new Order(req.body);
    const newOrder = await order.save();
    if (newOrder) {
      return res.status(201).send({ message: 'New Order Created', data: newOrder });
    }
    return res.status(500).send({ message: ' Error in Creating Order.' });
  })

router.get("/latest",async(req,res)=>{
    const orders=await Order.find({}).sort({_id:-1}).limit(1)
    res.send(orders);
})

//gives an array of single element containing latest placed order

module.exports=router