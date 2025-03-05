const express = require('express');

const app = express();

const requestTimestampLogger = (req,res,next) =>{
    const timeStamp = new Date().toISOString();
    console.log(`${timeStamp} from ${req.method} to ${req.url}`);
    next();
}

app.use(requestTimestampLogger);

app.get('/',(req,res)=>{
    res.send("This is my Home page");
});

app.get('/about',(req,res)=>{
    res.send("About page");
});

app.listen(3000,()=>{
    console.log("Server is now running on 3000");
    
});