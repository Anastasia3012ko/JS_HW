const counter = {
    count: 0,
    increment(){
       return this.count +=10
    },
    decrement(){
       return this.count -=5
    }
}
counter.increment()
console.log(counter.count)
counter.decrement()
console.log(counter.count)