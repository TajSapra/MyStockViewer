const mongoose=require("mongoose")
const { mongoURI } = require("./tokens");
mongoose.connect(mongoURI,{ useNewUrlParser: true });
const db=mongoose.connection;
db.on('error', console.error.bind(console, "Error connecting to mongodb"));
db.once('open', function(){
    console.log("connected to mongodb");
})
module.exports=db;