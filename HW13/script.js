const things = [
    {name: 'dress', price: 85},
    {name: 't-shirt', price: 45},
    {name: 'trousers', price: 30},
    {name: 'sweater', price: 55},
    {name: 'short', price: 25}
]
function hasExpensiveItem(arr) {
    return arr.some(item => item.price>50)
}
console.log(`Some things are more expensiva than 50: ${hasExpensiveItem(things)}`)
