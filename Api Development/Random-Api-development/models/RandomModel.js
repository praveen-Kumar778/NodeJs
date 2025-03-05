const mongoose = require("mongoose");

const randomModel = new mongoose.Schema({
    title : {
        type : String,
        required : [true , "Random Tile is required"] ,
        trim : true ,
        maxLength : [100 , "Random title length cannot be more than 100 words"],
    },
    text : {
        type : String ,
        required : [true , "Random text is required"],
        trim : true ,
        minLength : [10 , "Random text minimum 10 is required"],
    },
    createdAt:{
        type : Date , 
        default : Date.now ,
    },
});

module.exports = mongoose.model('randomModel' , randomModel);