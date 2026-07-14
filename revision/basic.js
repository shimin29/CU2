//Variables
//unknown value?
//what if you know the value

//Something to store data values

//Variables are basically values that are stored to a name

//example

//cat = 5
//So you know cat is 5 

//Let's say cat's age is 7, you would declare that as
//catAge = 7

//Declare 5 variables, and console log them all.
var teamA = "Chicago Bulls"
var teamB = "Golden State Warriors"
var teamAPoints = 123
var teamBPoints = 141
var teamBWin = true

console.log("Team A: " + teamA)
console.log(`Team B: ${teamB}`)
console.log("Team A Points: " + teamAPoints)
console.log(`Team B Points:${teamBPoints}`)
console.log(teamBWin)

//Can you change the above console logs to include proper statements?
//Example:
//Team A: Chicago Bulls
//Team A Points: 123

//=================================== VARIABLES ===============================================


//=================================== CONDITIONALS ============================================

//What are conditionals?
//A.K.A your .... if and else statements.

// if statement
var age = 21
if(age >= 21){
    console.log("You are allowed to enter")
}else{
    console.log("You are NOT allowed to enter")
}

//Write me a if, else if and else statement
//For a traffic light system
//If green, output "You may go"
//If yellow, output "You may go if you've crossed the line"
//If red, output "Stop!"

const trafficLight = "green"
if(trafficLight == "green"){
    console.log("You may go")
}else if(trafficLight == "yellow"){
    console.log("You may go if you've crossed the line")
}else{
    console.log("Stop!")
}

//Ternary Operator
var points = 18
var message = points >= 21 ? "The game hsa ended" : "The game shall continue"
console.log(message)

//=================================== CONDITIONALS ============================================

// ============================= LOOPS ================================
let lapsNeeded = 10
let ian = 0
for(let shakthy = 1; shakthy <= lapsNeeded; shakthy++){
    console.log(`Shakthy has run ${shakthy} laps`)
    ian++
    console.log(`Ian has run ${ian} laps`)
    ian++
    console.log(`Ian has run ${ian} laps`)
}

// Rewrite the above loop with WHILE loop
let shakthy = 0
while(shakthy < lapsNeeded){
    console.log(`Shakthy has run ${shakthy + 1} laps`)
    shakthy++
    ian++
    console.log(`Ian has run ${ian} laps`)
    ian++
    console.log(`Ian has run ${ian} laps`)
}

// ============================= LOOPS ================================

//===================================== FUNCTIONS =============================================
// function addTwoNumbers(num1,num2){
//     console.log(`Total: ${num1 + num2}`)
// }
// addTwoNumbers(5, 6)

//Rewrite the above function, but change it to use a 'return' statement
// function addTwoNumbers(num1, num2){
//     return num1 + num2
// }
// console.log(addTwoNumbers(6,7))

// The purpose of the return statement is to assign the value back to the function call.
//Function call is whenever you call the function.

//Write aa function for me that calculates the area of a rectangle
//Use a return statement to return the result, output with a console log
// function rectangleArea(l, h){
//        return l * h 
// }
// console.log()

//Write a function for me that calculates the perimeter of a rectangl
//Use a return statement to return the result, output with a console log
// function rectanglePerimeter(l, h){
//     return l * 2 + h * 2
// }
// console.log(rectanglePerimeter(4,7))

//SOMETHING NEW -> Arrow Function
//I will give the Area example, you write for me the perimeter example
const rectangleArea = (l, h) => {
    return l * 2 
}
console.log(rectangleArea(5, 11))

//Given the example above, convert the rectanglePerimeter function to an arrow funciton
const rectanglePerimeter = (l, h) => {
    return l * 2 + h * 2 
}
console.log(rectanglePerimeter(4, 7))

//===================================== FUNCTIONS =============================================

//===================================== Arrays & Objects ======================================

//This is an array
//Using square brackets []
let phones = ['iphone', 'Nokia', 'Samsung', 'Vivo', 'Oppo', 'Pineapple 13 Pro Max by Nicholas', 'Xiaomi']
console.log(phones)

//Use a foreach loop for the above array
phones.forEach((phone) => {
    console.log(phone)
})

//This is an object
//Using curly brackets
let myProfile = {
    name: "Paul",
    age: 43,
    occupation: "Full-Stack Web Instructor",
    hobbies: ["Gaming", "Rock Climbing", "Coding"]
}
console.log(myProfile)

for(let key in myProfile){
    if(key == "hobbies"){
        console.log(`${key}: ${myProfile[key][1]}`)
    }else{
        console.log(`${key}: ${myProfile[key]}`)
    }
}

// Modify the above, I only want to show the 2nd item when it comes to hobbies.
//HINT: You need an if statement for this.

//Array of Objects
myProfile = {
    name: "Paul",
    age: 43,
    occupation: "Full-Stack Web Instrustor",
    hobbies: ["Gaming", "Rock Climbing", "Coding"]

}
let myFriendProfile = {
    name: "Will",
    age: 45,
    occupation: "Web Developer",
    hobbies: ["Sewing", "Crochet", "Coding"]
}

const meAndMyFriendProfile = [myProfile, myFriendProfile]
console.log(meAndMyFriendProfile)

const arrayOfAnimalObjects = [
    {
        name: "Boar",
        type: "Mammal",
        no_of_legs: 0
    },
    {
        name: "Hammerhead Shark",
        type: "Fish",
        no_of_legs:0
    }
]

//Using 'push' array function, add a new animal to arrayOfAnimalObjects
//It has to be an object data type.

arrayOfAnimalObjects.push({
    name: "Eagle",
    type: "Bird",
    no_of_legs: 2
})
console.log(arrayOfAnimalObjects)

//Using a foreach loop, output the animals with the format below
// "My number 1 animal is {animal}, it is a {type} and it has {} number of legs"
arrayOfAnimalObjects.forEach((animal, index) =>{
    console.log(`My number ${index + 1} animal is ${animal.name}, it is a ${animal.type} and it has ${animal.no_of_legs} number of legs`)
})