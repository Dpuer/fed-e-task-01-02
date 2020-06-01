// 基于以下代码完成下面的四个练习

const fp = require('lodash/fp')

// 数据
// horsepower 马力，dollar_value 价格，in_stock 库存

const cars = [{
        name: 'Ferrari FF',
        horsepower: 660,
        doller_vale: 700000,
        in_stock: true
    },
    {
        name: 'Spyker C12 Zagato',
        horsepower: 650,
        doller_vale: 648000,
        in_stock: false
    },
    {
        name: 'Jaguar XKR-S',
        horsepower: 550,
        doller_vale: 132000,
        in_stock: false
    },
    {
        name: 'Audi R8',
        horsepower: 525,
        doller_vale: 114200,
        in_stock: false
    },
    {
        name: 'Aston Martin One-77',
        horsepower: 750,
        doller_vale: 1850000,
        in_stock: true
    },
    {
        name: 'Pagani Huayra',
        horsepower: 700,
        doller_vale: 1300000,
        in_stock: false
    }
]

// 使用函数组合fp.flowRight()重新实现下面这个函数
// let isLastInStock = function (cars) {
//     // 获取最后一条数据
//     let last_car = fp.last(cars)
//     // 获取最后一条数据的in_stock属性值
//     return fp.prop('in_stock', last_car)
// }

let isLastInStock = fp.flowRight(fp.prop('in_stock'), fp.last)
console.log(isLastInStock(cars))



// 使用fp.flowRight、fp.prop()和fp.first()获取第一个car的name

let isFirstName = fp.flowRight(fp.prop('name'), fp.first)
console.log(isFirstName(cars))



// 使用帮助函数_average重构averageDollarValue，使用函数组合的方式实现
let _average = function (xs) {
    return fp.reduce(fp.add, 0, xs) / xs.length
}
// let averageDollarValue = function (cars) {
//     let doller_vales = fp.map(function (car) {
//         return car.doller_vale
//     }, cars)
//     return _average(doller_vales)
// }

let averageDollarValue = fp.flowRight(_average, fp.map(fp.prop('doller_vale')))
console.log(averageDollarValue(cars))

// 使用flowRight写一个sanitizeNames()函数，返回一个下划线连接的小写字符串，把数组中的name转为这种形式：例如：sanitizeNames(["Hello World"]) => ["hello_world"]
let _underscore = fp.replace(/\W+/g, '_')
let sanitizeNames = fp.map(fp.flowRight(fp.toLower, _underscore, fp.prop('name')))
console.log(sanitizeNames(cars))