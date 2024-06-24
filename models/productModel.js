const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    title:{
        type: String,
        required: [true, 'productName is required'],
        trim: true
    },
    price:{
        type: Number,
        required: [true, 'price is required']
    },
    image:{
        type: String,
        required: true
    },
    desc:{
        type: String
    }, 
},
{
    timestamps: true
})

module.exports = mongoose.model('Products', productSchema)