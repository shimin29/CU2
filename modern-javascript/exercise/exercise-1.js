//Q1
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = (nums) => nums ** 2

console.log(squaredNumbers)

//Q2
const greaterThan2 = numbers.filter(num => num > 2)

console.log(greaterThan2)

//Q3
numbers.forEach(num => { 
    console.log(num)
})

//Q4
numbers.push(6)

const firstDivisibleBy3 = numbers.find(num => num % 3 === 0)

console.log(firstDivisibleBy3)

//Q5
numbers.pop
const chainFilterAndMap = numbers.filter(num => num > 2) .map(num => num ** 2)

console.log(numbers)
console.log(chainFilterAndMap)