var name = 'external'

obj = {
    name: 'internal',
    tellName: function() {
        console.log(this.name) // 指向obj
    },
    tellName1: function() {
        setTimeout(() => {
            console.log(this.name) // 指向setTimeout外层作用域obj
        }, 0)
    },
    tellName2: () => {
        console.log(this.name) // 指向tellName外层作用域window
    }
}

console.log('obj.tellName:\n')
console.log(obj.tellName()) // internal

console.log('obj.tellName1:\n')
console.log(obj.tellName1()) // internal 最后一个打印出来

console.log('obj.tellName2:\n')
console.log(obj.tellName2()) // external
