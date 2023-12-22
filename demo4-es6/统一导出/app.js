// 导入module.js
/* 
        * 代表module.js中的所有成员
        无论何种方式导入，导入的内容都会被当成一个对象处理
        因此需要一个对象来接收所有的成员
*/
/* import * as m1 from './module.js'

console.log(m1.PI)
console.log(m1.sum(10, 20)) */

//统一导出也可以这样接收

import {PI, sum, Person} from './module.js'

console.log(PI)
console.log(sum(10, 20))