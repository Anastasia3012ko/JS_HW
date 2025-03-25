const colors = ["red", "green", "blue"];
colors.shift()
console.log(colors)


const words = ["Hello", " ", "world", "!"];

const strings = words.reduce((acc,str) => acc+str)
console.log(strings)

let numericArray = [1, 2, 3, 4, 5];
// let even = numericArray.filter(item => item%2 ===0)
// let sum = even.reduce((acc, item) => {
//     return acc +item
// })
// console.log(sum)
let even = numericArray.filter(item => item%2 ===0).reduce((acc, item) => {

    return acc +item
 })
 console.log(even)

 let str = "hello";
 const uniq = Array.from(str,function())