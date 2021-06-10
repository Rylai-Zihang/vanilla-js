// 节流 技能cd
function throttle(fn, gapTime) {
    let cd = false
    if(!cd) {
        fn()
        cd = true
        return function() {
            setTimeout(()=>{
                fn()
                cd = false
            }, gapTime)
        }
    }
}

let fn = () => console.log('我执行了')
fn = throttle(fn,1000)

document.body.onscroll = fn
