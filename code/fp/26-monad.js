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

    join () {
        return this[sVal]()
    }

    flatMap (fn) {
        return this.map(fn).join()
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

let r = readFile('./package.json')
    .map(x => x.toUpperCase())
    .flatMap(print)
    .join()

console.log(r)