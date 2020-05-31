// Hello     world => hello_world

const fp = require('lodash/fp')

const f = fp.flowRight(fp.replace(/\s+/g, '_'), fp.toLower)

console.log(f('Hello     world'))

// 把一个字符串中的首字母提取并转换成大写，使用.作为分隔符
// world wild web => W. W. W.

// const firstLetterToUpper = fp.flowRight(fp.join('. '), fp.map(fp.first), fp.map(fp.toUpper), fp.split(' '))
const firstLetterToUpper = fp.flowRight(fp.join('. '), fp.map(fp.flowRight(fp.toUpper, fp.first)), fp.split(' '))

console.log(firstLetterToUpper('world wild web'))