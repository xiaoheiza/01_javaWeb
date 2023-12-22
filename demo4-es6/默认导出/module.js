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

// 默认导出在一个js中只能有一个
export default sum

// 可以混合使用，但一般不这么干
export {PI}