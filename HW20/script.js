class Shape {
    draw(){
       return 0
    }
} 
class Rectangle extends Shape {
    constructor(width,height){
        super()
        this.width = width
        this.height = height
    }
    draw(){
        return 2 * (this.width + this.height)
    } 
}
class Circle extends Shape {
    constructor(radius){
        super()
        this.radius = radius
    }
    draw(){
        return 2 * this.radius
    }
}
const rectangleOne = new Rectangle(2,3)
const rectangleTwo = new Rectangle(3,4)
const rectangleThree = new Rectangle(5,6)
const circleOne = new Circle(10)
const circleTwo = new Circle(20)
const circleThree = new Circle(30)


console.log(`Perimeter of a rectangle: ${rectangleOne.draw()}`)
console.log(`Diameter of circle: ${circleOne.draw()}`)

const arr = [rectangleOne,rectangleTwo,rectangleThree,circleOne,circleTwo,circleThree]
arr.forEach(item => console.log(item.draw()))