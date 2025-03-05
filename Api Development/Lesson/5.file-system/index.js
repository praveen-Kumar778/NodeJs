const { log } = require('console');
const fs = require('fs');
const path = require('path');

const dataFolder = path.join(__dirname, "data");

if (!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder);
    console.log("Data Folder Created Successfully");
}

const filePath = path.join(dataFolder,"example.txt");

fs.writeFileSync(filePath,"Hello Text Node js");
console.log("Fle created successfully");

const readFile = fs.readFileSync(filePath,'utf-8');

console.log("File content" , readFile);

fs.appendFileSync(filePath,"\nThis is a new line in text");

console.log("File added successfully");

// async way of writing code 

const asynFilePath = path.join(dataFolder,"asyncexample.txt");
fs.writeFile(asynFilePath,"Hello async node js",(error) => {
    if(error) throw error;
    console.log("File Created successfully");
    fs.readFile(asynFilePath,'utf-8',(err,data) =>{
        if(err) throw err ;
        console.log("File Reading :" ,data);
        fs.appendFile(asynFilePath,"\nAdding another line in this code",(err)=>{
            if(err) throw err ; 
            console.log("Now appended line added successfully");
            fs.readFile(asynFilePath,'utf-8',(err,updatedData) =>{
                if(err) throw err ;
                console.log("The updated data is", updatedData);
                
            })
        });

    })
})


