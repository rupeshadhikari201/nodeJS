console.log("hello world")
// ways to load modules
/*
const os = require('os')
console.log(os.type())
console.log(os.version())
console.log(os.hostname())
console.log(os.homedir())
console.log(os.userInfo())
console.log(os.machine())
console.log(os.userInfo().uid)
console.log(os.userInfo().username)
console.log(os.userInfo().gid)
console.log(os.userInfo().shell)
console.log(os.userInfo().console)
*/
console.log(__dirname)
console.log(__filename)

// path module
const path = require('path')
console.log("USING PATH MODULE : ")
console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))

// importing custom modules
const maths = require('./customMathModule')
// const math = require('math')
// console.log(maths.add(10, 5))
// console.log(maths.sub(10, 5))
// console.log(maths.mul(10, 5))
// console.log(maths.mul(10, 5))
console.log(maths.square(5))
// console.log(maths.PI())