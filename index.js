const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port= 5500


// Conecting to database
mongoose.connect('mongodb+srv://aderonmutomilola:dtopperz@cluster0.vazvmv0.mongodb.net/')
const db=mongoose.connection
db.on('error',(error)=>console.log(error))
db.once('open',()=>console.log("connected to databse succesfully"))

// configuring server to accept json
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('welcome to homepage') 
})


const productRouter = require('./routes/product')
app.use(productRouter)

app.listen(port,()=>{
    console.log("server started successfully")
})