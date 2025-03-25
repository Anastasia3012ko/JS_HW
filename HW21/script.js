class CopyEntity {
    static copyObject(object){
       return object
    }
}
arr = [1,2,3,4,5]
arr[4] = 777
console.log(`CopyOfArr: ${CopyEntity.copyObject(arr)}`)

//


class Users {
    constructor(name,city,age){
        this.name = name
        this.city = city
        this.age = age
    }
}
const users = [
    new Users('Anna','Moscow',25),
    new Users('Ivan','Stuttgart',40),
    new Users('Simon','New York', 30)
]
users[1].name = 'Peter'
const copyUsers = CopyEntity.copyObject(users)
console.log(users)
console.log(copyUsers)

