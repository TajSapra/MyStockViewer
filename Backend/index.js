const express=require("express");
const fetchPriceController = require('./apis/fetchPriceData');
const app=express();
const db=require('./db')
const port= 4000;
const cron = require('node-cron');
const cors = require('cors')
app.use(cors())
const { fetchDataAndUpdateInDb } = require("./cron/updatePriceInDb");
var started = false;
if(!started){
    cron.schedule('*/45 * * * * *', () => {
        fetchDataAndUpdateInDb()
    });
      started=true
}
app.get('/fetchPriceData/:key', fetchPriceController.fetchPriceApi)
app.listen(port, function(err){
    if(err){
        console.error("error on loading server" ,err)
    }
    else{
        console.log(`working on port: ${port}`);
    }
})