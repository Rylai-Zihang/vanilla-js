// 同步代码->执行全部微任务->单个宏任务->全部微任务

console.log(0)

setTimeout(function f1(){
    console.log(1)

    Promise.resolve().then(function f2(){
        setTimeout(function f3(){
            console.log(3)
        })
        console.log(2)
    })
})

setTimeout(function f4(){
    console.log(4)

    Promise.resolve().then(function f5() {
        setTimeout(function f6() {
            console.log(5)
        })
        console.log(6)
    })
})

new Promise(() => {
    console.log(8)
}).then(function f7() {
    console.log(9)
})

console.log(7)


