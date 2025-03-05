require('dotenv').config();
const express = require('express');
const connectToDb = require("./database/db");
const router = require('./routes/routes');
const homeRouter = require('./routes/home-routes');
const adminRouter = require('./routes/admin-routes');
const uploadImageRouter = require('./routes/image-routes');
connectToDb();

const app = express();

// using middleware
app.use(express.json());

const PORT = process.env.PORT || 8080 ;


app.use('/api/auth',router);
app.use('/api/home',homeRouter);
app.use('/api/admin',adminRouter);
app.use('/api/image',uploadImageRouter);

app.listen(PORT,() =>{
    console.log(`Server is now running on Port ${PORT}`);
});