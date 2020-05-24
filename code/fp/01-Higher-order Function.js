// 高阶函数-函数作为参数

function forEach (array, fn) {
    for (let index = 0; index < array.length; index++) {
        fn(array[index]);
    }
}

// 测试

// let arr = [1, 3, 4, 7, 8];
// forEach(arr, function (item){
//     console.log(item)
// });

// filter

function filter (array, fn) {
    let results = []
    for (let index = 0; index < array.length; index++) {
        if (fn(array[index])) results.push(array[index])
    }
    return results
}

// 测试
let arr = [1, 3, 4, 7, 8];
let r = filter(arr, function (item){
    return item % 2 === 0
});

console.log(r)

// 函数作为返回值

function makeFn () {
    let msg = 'Hello function'
    return function () {
        console.log(msg)
    }
}

makeFn()()

// once
function once (fn) {
    let done = false
    return function () {
        if (!done) {
            done = true
            return fn.apply(this, arguments)
        }
    }
}

let pay = once(function (money) {
    console.log(`支付：${money} RMB`)
})

pay(5)
pay(5)
pay(5)
pay(5)
pay(5)

// map
const map = (array, fn) => {
    let results = []
    for (const iterator of array) {
        results.push(fn(iterator))
    }
    return results
}

let arrMap = [1, 3, 4, 7, 8];
arrMap = map(arrMap, v => v * v)
console.log(arrMap)

// every
const every = (array, fn) => {
    let result = true
    for (const iterator of array) {
        result = fn(iterator)
        if (!result) break
    }
    return result
}

let arrEvery = [1, 3, 4, 7, 8]
let everyR = every(arrEvery, v => v > 2)
console.log(everyR)

// some
const some = (array, fn) => {
    let result = false
    for (const iterator of array) {
        result = fn(iterator)
        if (result) break
    }
    return result
}

let arrSome = [1, 3, 4, 7, 8]
let someR = some(arrSome, v => v > 2)
console.log(someR)