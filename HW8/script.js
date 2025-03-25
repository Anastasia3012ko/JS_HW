//1
const sum = (a,b=5) => a + b;
console.log(sum(15))

//2
const numbers = [2,6,9,4,5,3,8]
let counter = 0
const calculateSum = numbers.reduce((counter,i) => counter + i)
console.log(calculateSum)

//3
const students = [
    {name: 'Andrey', age: 21, course: 5},
    {name: 'Sergei', age: 20, course: 4},
    {name: 'Igor', age: 18, course: 2},
    {name: 'Ivan', age: 17, course: 1},
    {name: 'Svetlana', age: 22, course: 5},
    {name: 'Irina', age:19, course: 3},
    {name: 'Olga', age: 18, course: 1},
]
function displayStudentInfo(student) {
    console.log(`Name: ${student.name}, Age: ${student.age}, Course: ${student.course}`);
}

displayStudentInfo(students[0])  //for one Student
for(let i = 0; i < students.length; i++) {
    console.log(displayStudentInfo(students[i]))  //for all students
}
