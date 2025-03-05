const mongoose = require('mongoose');

const connectToDb = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            serverSelectionTimeoutMS: 30000,  
            socketTimeoutMS: 45000,  
        });
        console.log("Database Connected Successfully");
        
    }catch(error){
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectToDb ;