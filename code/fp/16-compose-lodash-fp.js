const fp = require('lodash/fp')

const f = fp.flowRight(fp.join('-'), trace('after map'), fp.map(fp.toLower), fp.split(' '))

console.log(f('NEVER SAY DIE'))