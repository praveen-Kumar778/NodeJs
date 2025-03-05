const mongoose = require('mongoose');

const connectToDb = async () => {
    try {
        await mongoose.connect('mongodb+srv://pv9868:pv9868Book-Store@bookcluster.cneyl.mongodb.net/');
        console.log("Mongoose Connected Successfully");

    } catch (e) {
        console.error('Mongodb Connection Failed ', e);
        process.exit(1);
    }
};

module.exports = connectToDb;