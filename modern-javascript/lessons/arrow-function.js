//You learned how to declare a normal function

function sayHello(){
    console.log('Hello')
}

//You can also do something similar, with arrow functions

//Syntax
// const functionName = (arguments) => doSomething

const sayAnotherHello = () => console.log("Another hello!")

//With he above example, can you write an arrow function for multiplication?
//Hint: There's answer in your portal lol.

const multiply = (num1, num2) => num1 * num2

console.log(multiply(5,4)) //20

//Arrow Functions in Callbacks

//Don't be alarmed by the word 'Callbacks'
//Just think of it as special function for special procedure
//Example is like your filter array function

const list = [2, 4, 6, 8]
// The filter function servers as a callback
const list2 = list.filter(num => num > 5) //This is a callback
console.log(list2) // [6, 8]

// Just to show you, normally you have to write function like this
const list3 = list.filter(function(num){return num < 5 })
console.log(list3)

//Above example is the counterpart to using arrow function
