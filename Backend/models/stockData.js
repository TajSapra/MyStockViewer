const mongoose = require('mongoose');
const Stock_pricesSchema = new mongoose.Schema({
    Date:{
        type: Number,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    companyKey:{
        type: String,
        required: true
    }
},{
    timestamps:true
})

const stockData=mongoose.model('Stock_prices',Stock_pricesSchema)
module.exports=stockData;