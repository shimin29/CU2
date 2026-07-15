// Destructuring Objects 这个考试会出
//It will be out on you KA exam :)
// You can destructure objects into smaller parts (individual variables) by using the Destructuring Assignment Operator


//Example WITHOUT Destructuring
const user = {
    name: 'John Doe',
    age: 25
}

const name = user.name
const age = user.age

console.log(name)
console.log(age)


//Example WITH Destructuring
const anotherUser = {
    name: 'Han Chuan',
    anotherAge: 25
}

const { anotherName, anotherAge } = anotherUser //This is the destructuring

console.log(anotherName) // Han Chuan
console.log(anotherAge) // 25

// Basically, it's a fancy way to extracting values into individual variables.

const student = {
    studentName: "Alicia",
    studentAge: 18,
    studentGrade: "Diploma"
}

//Destructure the above student for me, and output their values.

const{studentName, studentAge, studentGrade } = student
console.log(studentName)
console.log(studentAge)
console.log(studentGrade)

//Destructuring a Nested Object

const player = {
    PlayerName: "Lee Sang-Hyeok",
    PlayerAge:30,
    PlayerGame: "League of Legends",
    team: {
        teamName: "T1",
        position: "Mid Laner"
    }
}

//                                                      Here is how you do it
const { playerName, PlayerAge, PlayerGame, team:{teamName, position}} = player

console.log(teamName)
console.log(position)

// Destructuring Arrays

const colors = ['red', 'green', 'yellow']

const [firstColor, secondColor, thirdColor] = colors

console.log(firstColor) //red
console.log(secondColor) //green
console.log(thirdColor) //yellow

// But sir, can you use any other words to represent the colors?

const [lalala, lululu, lelele] = colors

console.log(lalala)
console.log(lululu)
console.log(lelele)

// YES! YOU CAN!!!

// Cann you skip a position in an array?

const [iWantFirstOne, , butSkipSecondOne] = colors

console.log(iWantFirstOne) // red
console.log(butSkipSecondOne) // yellow

// No green :(

// Destructuring Funciton Parameters

//WITHOUT Destructuring Function Parameters
function greetPerson(person){
    console.log(`Hello, ${person.personName}, You are ${person.personAge} years old`)
}
const person = {
    name: "Ming Zhi",
    age: 18
}
greetPerson(person)

//WTIH Destructuring Function Parameters
//                    You are directly destructuring the argument
function destructureGreetPerson({ personName, personAge}) {
    //Notice you do not have to spectify person object anymore
    console.log(`Hello, ${personName}. You are ${personAge} years old`)
}
destructureGreetPerson(person)

//Default values with Destructuring

//Using the 'person' object as an example, we can destructure and if there is a field with no actual value from the orginal object
// It's possible to give it a default value.

const { personName, personAge, profession = 'student'} = person
console.log(personName) ; // Ming Zhi 
console.log(personAge) ; //18
console.log(profession); // student

//Default values for array Destructuring

const fruits = ['apple', 'orange']

const [firstFruit, secondFruit, thirdFruit = 'strawberry'] = fruits

console.log(firstFruit) //apple
console.log(secondFruit) //orange
console.log(thirdFruit) //strawberry as the default values