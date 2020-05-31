const sVal = Symbol('value')
class Left {
    static of (value) {
        return new Left(value)
    }
    constructor (value) {
        this[sVal] = value
    }

    map (fn) {
        return this
    }
}

class Right {
    static of (value) {
        return new Right(value)
    }
    constructor (value) {
        this[sVal] = value
    }

    map (fn) {
        return Right.of(fn(this[sVal]))
    }
}

// let r1 = Right.of(12).map(x => x + 2)
// let r2 = Left.of(12).map(x => x + 2)

// console.log(r1)
// console.log(r2)

function parseJSON (str) {
    try {
        return Right.of(JSON.parse(str))
    } catch (err) {
        return Left.of({ error: err.message})
    }
}

let r = parseJSON('{"name": "zs"}')
    .map(x => x.name.toUpperCase())
console.log(r)