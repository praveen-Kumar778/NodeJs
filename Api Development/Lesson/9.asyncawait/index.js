

function delayFn(time){
    return new Promise((resolve) => setTimeout(resolve,time));
}

async function delayed(name) {

    await delayFn(2000);
    console.log(`Delayed function here ${name}`);
}


delayed("Karan")

async function division(num1,num2) {

    try {
        if(num2 === 0) throw new Error('Cant divide by zero');
        return num1/num2;
    } catch (error) {
        console.log("Error",error);
        return null ;
        
    }
}


async function mainfnc() {
    
    console.log(await division(10,2));
    console.log(await division(10,0));
}

mainfnc();