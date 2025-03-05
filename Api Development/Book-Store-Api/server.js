// import package files  from dotenv
require("dotenv").config()

// run our server 
const express = require("express");
const connectToDb = require("./database/db");
const bookRoutes = require("./routes/book-routes");

// invocate express application
const app = express();

// port is used to create environment variable if it is not available bydefault we are giving 3000 on the port 
const port = process.env.PORT || 3000;

// connect to database
connectToDb();

//middleware -> express.json which will parse our json
app.use(express.json());

// routes here
app.use('/api/books',bookRoutes);


app.listen(port, () => {
    console.log(`Server is now running on Port ${port}`);
});

