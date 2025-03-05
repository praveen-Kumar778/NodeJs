function delayFn(time){
    return new Promise((resolve) => setTimeout(resolve,time));
}

console.log("Promise Starts");
delayFn(5000).then(() => console.log("Promise resolved successfully"));
console.log("Promise ends");


function divide(num1,num2){
    return new Promise((resolve,reject) => {
        if(num2 === 0){
            reject("Can't divide any number by 0");
        }else{
            resolve(num1/num2);
        }
    })
}

divide(10,0).then((result) => console.log(result)).catch((error) => console.log(error,"err"));