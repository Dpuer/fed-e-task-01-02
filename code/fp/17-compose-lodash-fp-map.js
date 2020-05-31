const _ = require('lodash')
const fp = require('lodash/fp')

_.map(['23', '8', '10'], parseInt)
// parseInt('23', 0, array)
// parseInt('8', 1, array)
// parseInt('10', 2, array)
fp.map(parseInt, ['23', '8', '10'])