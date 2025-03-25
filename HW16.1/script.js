//1
async function serviceFetch() {
    try{
        const resolve = await fetch('https://jsonplaceholder.typicode.com/psts?userId=1')
        if(!resolve.ok) {
            throw new Error('Info is not available')
        }
        const result = await resolve.json()
        console.log(result)
    }catch(error){
        console.log(error.message)
    }
}
serviceFetch()

//2
function division(a,b) {
    try{
        if(b === 0) {
            throw new Error('You can not divide by 0')
        }
        return a/b
    }catch(error) {
        console.log(error.message)
    }
}
console.log(division(100,5))
console.log(division(100,0))


    