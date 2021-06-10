// 遍历属性，for in; 递归
// 类型检查： 是数组或者对象？(数组 or 对象) : 是其他的类型
// 不复制原型属性 hasOwnProperty
// 循环引用 HashMap WeakMap


function isObject(obj) {
    return Object.prototype.toString.call(obj) === "[object Object]" // 不包括 null function
}

function isArray(obj) {
    return Array.isArray(obj)// return Object.prototype.toString.call(obj) === "[object Array]"
}

function isRightType(obj) {
    return isObject(obj) || isArray(obj)
}

function deepClone(obj, hash = new WeakMap()) {
    if(!isRightType(obj)) {
        return obj
    }
    if (hash.has(obj)) {
        return hash.get(obj)
    }

    let target = isArray(obj) ? [] : {}
    hash.set(obj, target)

    for(let k in obj) {
        if(!obj.hasOwnProperty(k)) {
            return
        }
        if(isRightType(obj[k])) {
            target[k] = deepClone(obj[k], hash)
        } else {
            target[k] = obj[k]
        }
    }
    return target
}

const a = {
    name: "Jack",
    book: {
        title: "You Don't Know JS",
        price: "45"
    },
    a1: [1, 2, 3],
    a2: null,
    a3: 123,
    a4: function() {
        console.log('a4')
    }
}
a.circleRef = a

const b = deepClone(a)
b.a1 = [1]
b.book.price = "40"
console.log(b)
console.log("===")
console.log(a)
