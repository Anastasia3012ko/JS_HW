//1
const people = [
    { name: "Alice", age: 25},
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 15 },
    { name: "Ivan", age: 13 },
    { name: "Michail", age: 39 },
];
const ageStatus = people.map((item) => {
    if(item.age >=  18) {item.status = 'adult'
    }else item.status = 'child'
    return item
})
console.log(ageStatus)

//2
const movies = [
    { title: "Inception", rating: 4.9 },
    { title: "The Dark Knight", rating: 5.0 },
    { title: "Interstellar", rating: 4.8 },
    { title: "The Matrix", rating: 4 }
];
let good = [];
movies.forEach((item) => {
    if(item.rating > 4) good.push(item.title)
})
console.log(`Movie with good rating: ${good}`)

