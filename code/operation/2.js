const fp = require('lodash/fp')
const {
    Maybe,
    Container
} = require('./support')

// 使用fp.add(x,y)和fp(f,x)创建一个能让functor里的值增加的函数ex1
let maybe = Maybe.of([5, 6, 11])
let ex1 = (number) => maybe.map(fp.map(fp.add(number)))
console.log(ex1(1))

// 实现一个函数ex2，能够使用fp.first获取列表的第一个元素
let xs = Container.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do'])
let ex2 = () => xs.map(fp.first)
console.log(ex2())

// 实现一个函数ex3，使用safeProp和fp.first找到user的名字的首字母
let safeProp = fp.curry(function (x, o) {
    return Maybe.of(o[x])
})
let user = {
    id: 2,
    name: 'albert'
}
let ex3 = (user) => safeProp('name')(user).map(fp.first)
console.log(ex3(user))

// 使用Maybe重写ex4，不要有if语句
// let ex4 = function (n) {
//     if (n) {
//         return parseInt(n)
//     }
// }
let ex4 = (str) => Maybe.of(str).map(parseInt)

console.log(ex4('123'))


// PS: 这里我的实现最终输出的是类对象中包含的值，我不确定题目要求的ex1-ex4是否需要返回具体的值，如果需要直接再访问一下_value字段即可