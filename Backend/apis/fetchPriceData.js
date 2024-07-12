const stockData = require("../models/stockData")

const fetchPriceApi = async (req, res) => {
    const {
        params:{
            key='AAPL'
        }={}
    }=req||{}
    const priceData = await stockData.find({companyKey:key}).sort({ _id: -1 }).limit(10);
    return res.status(200).json(priceData);
};
module.exports = {fetchPriceApi}