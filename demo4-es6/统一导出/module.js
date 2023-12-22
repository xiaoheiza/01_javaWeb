// 变量  只有用export关键字标记导出了，外面才可以使用
const PI = 3.14
function sum(a, b) {
    return a + b
}

// 类
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    sayHello () {
        console.log ('hello')
    }
}


export {PI, sum, Person}