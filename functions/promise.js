class Promise1 {
    // 成功队列
    successQueue = [];
    // 失败队列
    failQueue = [];
    constructor(fn) {
        const resolve = () => {
            // setTimeout: 因为在实际编码中，resolve()/reject()在then的前面，会导致队列还没更新就调用
            // 故使用setTimeout使得resolve()/reject()在后面执行
            setTimeout(() => {
                for(let i = 0; i < this.successQueue.length; i++) {
                    console.log(this.successQueue)
                    this.successQueue[i]()
                }
            })
        }
        const reject = () => {
            setTimeout(() => {
                for(let i = 0; i < this.failQueue.length; i++) {
                    console.log(this.failQueue)
                    this.failQueue[i]()
                }
            })
        }
        fn(resolve, reject)
    }
    then(s, e) {
        console.log(s, e)
        s && this.successQueue.push(s)
        e && this.failQueue.push(e)
        // 链式调用
        return this
    }
}

let p1 = new Promise1((resolve, reject) => {
    // fn：执行什么操作会成功或者失败
    const seed = Math.random()
    console.log(seed)
    if(seed > 0.8) {
        // 表示成功
        resolve()
    } else {
        // 表示失败
        reject()
    }
})

p1.then(() => {
    console.log("成功！")
}, () => {
    console.log("失败！")
}).then(() => {
    console.log("成功2！")
}, () => {
    console.log("失败2！")
})
