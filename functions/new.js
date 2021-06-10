function myNew(Fn, ...args) {
    let obj = {}
    // obj.__proto__ = Fn.prototype // 更规范的写法：obj = Object.create(Fn.prototype)
    obj = Object.create(Fn.prototype)
    let result = Fn.call(obj, ...args) // obj当做this
    return typeof result == "object" ? result : obj // 如果没有return或者return不是引用类型，则返回this
}

function Person (name, age) {
    this.name = name
    this.age = age
}
Person.prototype.sayName = function () {
    console.log(`我叫${this.name}，我今年${this.age}`)
}

const jack = myNew(Person, "Jack", "28")
console.log(jack)
