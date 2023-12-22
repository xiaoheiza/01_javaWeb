import * as m1 from './module.js'
console.log(m1.default(10, 20))   // 实际上使用的就是sum

import {default as add} from './module.js'     // 也可以这样导入
import add from './module.js'     // 也可以这样导入