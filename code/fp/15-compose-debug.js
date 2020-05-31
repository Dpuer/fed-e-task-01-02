const _ = require('lodash')

// const log = v => {
//     console.log(v)
//     return v
// }

const trace = _.curry((tag, v) => {
    console.log(tag, v)
    return v
})

const split = _.curry((sep, str) => _.split(str, sep))
const map = _.curry((fn, array) => _.map(array, fn))
const join = _.curry((sep, array) => _.join(array, sep))

const f = _.flowRight(join('-'), trace('after map'), map(_.toLower), split(' '))



console.log(f('NEVER SAY DIE'))