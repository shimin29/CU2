//Combining DESTRUCTURE + SPREAD together

// Destructuring and Spread with Arrays

//Let's say you have an array of numbers, you want to destructure the first as a variable, and the rest as the original array.

const numbers = [1, 2, 3, 4, 5, 6]
const [first, ...rest] = numbers
console.log(first) // 1 
console.log(rest) // [2, 3, 4, 5, 6]

//Destructuring and Spread with Objects

const user = {
    name: 'Wen Yao',
    age: 18,
    profession: 'student'
}

const updatedUser = {
    ...user,
    name: 'Arthur',
    surname: "Yeap"
}

console.log(updatedUser)

//Combining Destructuring and Spread in Function Arguments

const newUser = {
    id: 1,
    name: 'Nicholas',
    age:18,
    profession: 'student'
}
//It's basically the same concept as the first
const printUserInfo = ({name, ...rest}) => {
    console.log(name)
    console.log(rest)
}
//It's just that it's used in the form of a function
printUserInfo(newUser)
// Nicholes
// { id: 1, age: 18, profession: 'student'}