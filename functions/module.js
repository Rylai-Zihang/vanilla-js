var a = 2
var module1 = (function() {
    var a = 1
    console.log('这是IIFE形成的一个模块')
})()

console.log(a)
