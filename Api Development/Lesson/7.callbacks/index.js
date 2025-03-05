const { error } = require('console');
const fs = require('fs');

function person(name,callbackfnc){
    console.log(`Hello from ${name}`);
    callbackfnc();
    
}


function address(){
    console.log("All India");
}

person("Harsh",address);

fs.readFile("input.txt",'utf8',(err,data) => {
    if(err){
        console.log("Error reading file : ",error);
        return;
    }
    console.log(data);
    
})