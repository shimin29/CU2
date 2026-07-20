//The 'callback' argument CAN act as a function
function greet(callback){
    console.log("Hello!")
    //Over here, it's calling the argument as a function
    callback()
}

//Notice there's a function INSIDE the 'greet' function call
greet(function (){
    console.log("John Doe")
})

//NOT CALLBACK
//The argument is 'name'
function noCallbackGreeting(name){
    //Over here, you are using 'name' as a variable string
    //To pass it into console.log
    console.log(`My name is ${name}`)
}

noCallbackGreeting("SHIMIN")

// I want a function that does addition first, then squares the result and then console logs the squared result.

const calculateSum = (num1, num2, squareFunction) => {
    const sum = num1 + num2
    squareFunction(sum)
}

const squareAndLog = (number) => {
    console.log(number ** 2)
}

calculateSum(5, 4, squareAndLog)

//Example Recursive Function

const addItselfUntilMoreThan100 = (number) => {
    const result = number + number
    if(result < 100){
        addItselfUntilMoreThan100(result)
    }else{
        console.log(result)
    }
}

addItselfUntilMoreThan100(1)
// 1 + 1 = 2
// 2 + 2 = 4
// 4 + 4 = 8
// 8 + 8 = 16
// 16 + 16 = 32
// 32 + 32 = 64
// 64 + 64 = 128

//Asynchronous Callbacks

//To understand Asynchronous, you have to first understand Synchronous

function dummyDownload(url, callback){
    //As if you are downloading actual data
    console.log("Downloading data ....")
    // To simulate the download
    setTimeout(() => {
        console.log(`Download Data from ${url}`)
        //Once the 'download' is complete, use callback function to process the
        callback()
    }, 2000)
}

dummyDownload('https://google.com', function process(){
    console.log("Now I am processing the data")
})
