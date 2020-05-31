const fp = require('lodash/fp')
const fs = require('fs')
const sVal = Symbol('value')

class IO {
    static of (value) {
        return new IO(() => value)
    }
    constructor (fn) {
        this[sVal] = fn
    }
    map (fn) {
        return new IO(fp.flowRight(fn, this[sVal]))
    }
}

let readFile = function(filename) {
    return new IO(function () {
        return fs.readFileSync(filename, 'utf-8')
    })
}

let print = function (x) {
    return new IO(function () {
        console.log(x)
        return x
    })
}

let cat = fp.flowRight(print, readFile)
// IO(IO(x))
let r = cat('./package.json')[sVal]()[sVal]()
console.log(r)