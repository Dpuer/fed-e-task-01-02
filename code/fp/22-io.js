const fp = require('lodash/fp')
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

let r = IO.of(process).map(p => p.execPath)

console.log(r[sVal]())