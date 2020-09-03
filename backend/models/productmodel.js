const mongoose=require('mongoose')
const{Schema, Mongoose}=mongoose

const productSchema=new mongoose.Schema({
    ConewaferType:{type:String,required:true},
    BaseFlavour:{type:String,required:true},
    Toppings:{type:String,required:true}
    
})

const productModel=mongoose.model("Product",productSchema);

module.exports= productModel;