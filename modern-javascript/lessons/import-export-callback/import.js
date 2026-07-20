import { add, subtract } from './mathOperationsExport.js'
//Notice how doSomething does not require curly brackets, because it is a default export
import doSomething from './defaultExport.js'

console.log(add(4, 5))
console.log(add(6, 7))

doSomething()