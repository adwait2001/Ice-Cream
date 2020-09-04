const mongoose=require('mongoose')
const{Schema, Mongoose}=mongoose

const orderSchema=new mongoose.Schema({
    Name:{type:String,required:true},
    Address:{type:String,required:true},
    Phone_no:{type:String,required:true},
    cartItems:[{
        _id: String,
        ConewaferType:String,
        BaseFlavour:String,
        Toppings:String,
        qty:Number
    }]
    //array which contains our products inside our cart
})

const orderModel=mongoose.model("Order",orderSchema);

module.exports= orderModel;