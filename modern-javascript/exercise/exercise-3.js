const student = {
    id: '101',
    name: 'John Doe',
    courses: ['Math', 'English', 'Science'],
    parents: {
        father: 'Mr. Doe',
        mother: 'Mrs. Doe'
    }
};

//Q1
const { id, name, courses } = student
const { parents: { father, mother} } = student

console.log(id)
console.log(name)
console.log(father)

//Q2
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2]
const arr4 = [...arr1]

console.log(arr3)
console.log(arr4)

//Q3
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [first, second, third, fourth, fifth, ...secondHalf] = numbers
const firstHalf = [first, second, third, fourth, fifth]

console.log(firstHalf)
console.log(secondHalf)

//Q4
const numbersForFunction = [1, 2, 3];

function sum(a, b, c) {
    return a + b + c;
}

console.log(sum(...numbersForFunction))