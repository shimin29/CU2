//Difference between var and let

//var is function-scoped, let is block-scoped
var name = 'jack'

// because it is function-scoped, you can redeclare it inside another function
function printName(){
    var name = 'john'
    console.log(name)
}

printName() //john
console.log(name) //jack

// what if it's NOT a function block?

if(true){
    var name = 'jason'
}
console.log(name) //jason

//move on to let 重点用let 不要用var 

let age = 37

function printAge(){
    let age = 45
    console.log(age)
}

printAge() //45
console.log(age) // 37

if(true){
    let age = 10
    console.log(age) //10
}
console.log(age) //37