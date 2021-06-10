// 带着一起做
// 有取消定时器的操作
function debounce(fn, wait) {
    let timer = null
    return function() {
        if(timer) {
            clearTimeout(timer)
        }
        setTimeout(() => {
            fn()
        }, wait)
    }
}

let fn = () => console.log('我执行了')
fn = debounce(fn,1000)

document.body.onscroll = fn
