//Spread Operator

// What is spread operator used for?

//Think of it as to help you expand your entire array / object

//Example

const nums1 = [1, 2, 3]
const nums2 = [4, 5, 6]

const numsCombined = [...nums1, ...nums2]

//Notice the ... before nums1 and nums2?
//The ... is your spread operator

console.log(numsCombined) // [1, 2, 3, 4, 5, 6]

// What is the difference if you do not use the spread oeprator?

const numsCombinedWithoutSpread = [nums1, nums2]

console.log(numsCombinedWithoutSpread) // [ [1, 2, 3,] ,  [4, 5, 6] ]

//You can also make a copy with the spread operator

const original = ['this', 'is', 'the', 'original']
const copy = [... original]

console.log(copy)

//Spread Operator with Objects

const person = {
    name: "Jacky",
    age: 20
}
const student = {
    ...person,
    grade: "Diploma"
}
console.log(student) //{name: "Jacky", age: 20, grade: "Diploma"}

// Just like with arrays, you can also make a copy with objects by using the spread operator

const copyOfStudent = {...student}
console.log(copyOfStudent) // {name:"Jacky", age:20, grade: "Diploma" } 

//Spread Operator in Function Arguments

function sum(a, b, c){
    return a + b + c
}

const nums = [1, 2, 3, 4, 5, 6]
console.log(sum(...nums)) // 6 