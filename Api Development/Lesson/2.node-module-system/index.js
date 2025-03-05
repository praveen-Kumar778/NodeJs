const firstModule = require("./first-module");

console.log("The sum of two number is",firstModule.add(10,20));

try {
    console.log("Trying to divide by zero");
    let result = firstModule.divide(0,0);
    console.log(result);
    

} catch (error) {
    console.log(error.message);
    
}