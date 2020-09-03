const express=require('express')
const dotenv=require('dotenv')
const mongoose=require('mongoose')
const bodyParser=require('body-parser') //used to handle POST REQUESTS
const app=express();
const productroutes=require('./routers/productroutes')
const orderroutes=require('./routers/orderroutes')


dotenv.config();  //to create environment variables

mongodbURL="mongodb://localhost:27017/icecream"

//setting our database using mongoose
mongoose.connect(mongodbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(console.log('database server is running')).catch(error=>console.log(error.reason))

const port=process.env.PORT || 5000

app.use(bodyParser.json())
app.use('/api/products',productroutes) //API to handle product releated operations
app.use('/api/orders',orderroutes) //API to handle order releated queries


app.listen(port, () => {
    console.log('server at port')
})