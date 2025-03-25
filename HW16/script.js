//1
const dataServer = async(url) => {
    const data = await (await (fetch(url))).json()
    //console.log(data)
    return data
}
dataServer('https://jsonplaceholder.typicode.com/todos/1')
.then(response => console.log(response))


//2

dataServer('https://jsonplaceholder.typicode.com/posts?_limit=10')
.then(response => console.log(response))
  
