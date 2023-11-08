const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
    },
    desc: {
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    timeStamp:{
        type: Date,
        required:true,
        default:Date.now
    },

})



module.exports=mongoose.model('Product',productSchema)