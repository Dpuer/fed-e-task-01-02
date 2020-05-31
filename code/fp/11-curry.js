// 模拟实现curry

function curry (func) {
    return function curriedFn (...args){
        // 判断实参和形参的个数
        if (args.length < func.length) {
            return function (...inner) {
                return curriedFn(...args.concat(inner))
            }
        }
        return func(...args)
    }
}

function getSum (a, b, c) {
    return a + b + c
}
const curried = curry(getSum)

console.log(curried(1, 2, 3))
console.log(curried(1)(2, 3))
console.log(curried(1, 2)(3))