const _ = require('lodash')

const array = ['zhao', 'qian', 'sun', 'li']

console.log(_.first(array))
console.log(_.last(array))

console.log(_.toUpper(_.first(array)))

console.log(_.reverse(array))

const r = _.each(array, (item, index) => {
    console.log(item, index)
})

console.log(r)