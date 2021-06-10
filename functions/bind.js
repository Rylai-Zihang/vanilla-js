const obj = {
    name: "Rylai"
}

function sayName(age, gender) {
    console.log(this.name)
    console.log(age)
    console.log(gender)
}

// ==== call ====
function myCall(context, ...args) {
    context = context || window // obj
    const key = Symbol()
    context[key] = this // this: function
    const result = context[key](...args) // context[key]() 等价于 context[key].call(context)
    delete context[key]
    return result
}

Function.prototype.myCall = myCall

sayName.myCall(obj, 27, "female")

// ===== apply ====
function myApply(context, args) { // args是数组
    context = context || window // obj
    const key = Symbol()
    context[key] = this // this: function
    const result = context[key](...args) // 数组解构
    delete context[key]
    return result
}

Function.prototype.myApply = myApply

sayName.myApply(obj, [27, "female"])

// ===== bind =====
function myBind(context, ...args) {
    // 闭包
    return () => {
        this.myCall(context, ...args)
    }
}

Function.prototype.myBind = myBind

sayName.myBind(obj, 27, "female")()
