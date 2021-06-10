// 数据结构：{ [event]: [handler array] }
const EventManager = (function() {
    let eventList = {}
    const on = function(event, handler) {
        if(!eventList[event]) {
            eventList[event] = [handler]
        } else {
            eventList[event].push(handler)
        }
    }
    const fire = function(event) {
        if(eventList[event]) {
            eventList[event].forEach(handler => {
                handler()
            })
        }
    }
    const off = function(event, handler) {
        if(eventList[event]) {
            if(!handler) {
                delete eventList[event]
            } else {
                const index = eventList[event].indexOf(handler)
                eventList.splice(index, 1)
            }
        }
    }

    return {
        on,
        fire,
        off
    }
})()

EventManager.on("create", function() {
    console.log("我是God造出来的男人")
})

EventManager.on("create", function() {
    console.log("我是God造出来的女人")
})

EventManager.fire("create")
