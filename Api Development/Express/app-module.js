const express = require('express');

const app = express();

// application level settings 
app.set('view engine','ejs');

// routting
// get request
app.get('/',(req,res)=>{
    res.send("Home Page");
});


app.post('/api/data',(req,res) =>{
    res.json({
        message : "Data recieved",
        data : res.body 
    })
})

app.use((err,req,res,next)=> {
    console.log(err.stack)
    res.status(500).send("Something went wrong")
}) 

