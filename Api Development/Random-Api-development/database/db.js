const mongoose = require("mongoose");

const connectToDb = async() => {
    try{
        await mongoose.connect('mongodb+srv://pv9868:pv9868random-api@cluster-random.w9isb.mongodb.net/');
        console.log("Database Connected Successfully");
        
    }catch(error){
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectToDb ;