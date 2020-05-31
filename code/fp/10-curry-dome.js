// 柯里化案例
// ''.match(/\s+/g)
// ''.match(/\d+/g)

const _ = require('lodash')

const match = _.curry(function (reg, str) {
    return str.match(reg)
})

const haveSpace = match(/\s+/g)
const haveNumber = match(/\d+/g)

// console.log(haveSpace('hello world'))
// console.log(haveNumber('123abc'))

const filter = _.curry(function(func,array){
    return array.filter(func)
})

console.log(filter(haveSpace, ['John Connor', 'John_Donne']))

const findSpace = filter(haveSpace)
console.log(findSpace(['John Connor', 'John_Donne']))