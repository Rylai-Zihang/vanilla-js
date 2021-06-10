// ES5
function Animal(color) {
    this.color = color
}

function Dog(color, name) {
    Animal.apply(this, arguments)
    this.name = name
    console.log(Dog.prototype.__proto__ === Animal.prototype) // false
    // Dog.prototype.__proto__ => Animal.prototype
    let temp = function () {}
    temp.prototype = Animal.prototype
    Dog.prototype = new temp()
    console.log(Dog.prototype.__proto__ === Animal.prototype) // false
}

const dog = new Dog('黄色','阿黄')
console.log(dog)


// ES6
class Animal1 {
    constructor(color) {
        this.color = color
    }
}

class Dog1 extends Animal1{
    constructor(color, name) {
        super(color)
        this.name = name
    }
}

const dog1 = new Dog1('黑色','阿黑')
console.log(dog1)
