const sVal = Symbol('value')

class MayBe {
    static of (value) {
        return new MayBe(value)
    }

    constructor (value) {
        this[sVal] = value
    }

    map (fn) {
        return this.isNothing() ? MayBe.of(null) : MayBe.of(fn(this[sVal]))
    }

    isNothing () {
        return this[sVal] === null || this[sVal] === undefined
    }
}

let r = MayBe.of(null)
    .map(x => x.toUpperCase())
    .map(x => null)
    .map(x => x.split(' '))

console.log(r)
