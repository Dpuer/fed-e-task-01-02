const _  = require('lodash')

function getArea (r) {
    console.log(r)
    return Math.PI * r * r
}

// let getAreaWithMemory = _.memoize(getArea)
// console.log(getAreaWithMemory(4))
// console.log(getAreaWithMemory(4))
// console.log(getAreaWithMemory(4))
// console.log(getAreaWithMemory(4))

function memoize (f) {
    let cache = {}
    return function (...args) {
        let key = JSON.stringify(arguments)
        cache[key] = cache[key] || f(...args)
        return cache[key]
    }
}

let getAreaWithMemory = memoize(getArea)
console.log(getAreaWithMemory(4))
console.log(getAreaWithMemory(4))
console.log(getAreaWithMemory(4))
console.log(getAreaWithMemory(4))