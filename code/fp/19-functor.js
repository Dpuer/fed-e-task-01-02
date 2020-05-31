const sVal = Symbol('value')
class Container {
    static of (value) {
        return new Container(value)
    }
    constructor (value) {
        this[sVal] = value
    }

    map (fn) {
        return Container.of(fn(this[sVal]))
    }
}

// let r = Container.of(5)
//     .map(x => x + 2)
//     .map(x => x * x)

Container.of(null)
    .map(x => x.toUpperCase())

console.log(r)