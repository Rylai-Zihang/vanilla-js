// 主题
class Subject {
    constructor(name) {
        this.name = name
        this.observers = []
    }
    addObserver(observer) {
        this.observers.push(observer)
    }
    removeObserver(observer) {
        const index = this.observers.indexOf(observer)
        this.observers.splice(index, 1)
    }
    notify() {
        this.observers.forEach(observer => {
            observer.update()
        })
    }
}

// 观察者
class Observer {
    constructor() {
        this.update = function() {}
    }
    subscribeTo(subject) {
        subject.addObserver(this)
    }
}

const subject = new Subject("送报纸")
const observer1 = new Observer()
observer1.update = () => {
    console.log("我是小明，我收到报纸了")
}
observer1.subscribeTo(subject)
subject.notify()
