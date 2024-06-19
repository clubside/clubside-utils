'use strict'

const { numToWords } = require('./clubside-utils.js')

console.log({ input: 26, separators: undefined, result: numToWords(26) })
// => 'Twenty-Six'

console.log({ input: -50, separators: undefined, result: numToWords(-50, true) })
// => 'Negative Fifty'

console.log({ input: 56908, separators: true, result: numToWords(56908, true) })
// => 'Fifty-Six Thousand, Nine Hundred and Eight'

console.log({ input: 16789.8993, separators: true, result: numToWords(16789.8993, true) })
// => ''Sixteen Thousand, Seven Hundred and Eighty-Nine Point Eight Thousand, Nine Hundred and Ninety-Three'

console.log({ input: 16789456.8993999, separators: true, result: numToWords(16789456.8993999, true) })
// => 'Sixteen Million, Seven Hundred and Eighty-Nine Thousand, Four Hundred and Fifty-Six Point Eight Million, Nine Hundred and Ninety-Three Thousand, Nine Hundred and Ninety-Nine'

console.log({ input: 16789456.8993999, separators: undefined, result: numToWords(16789456.8993999) })
// => 'Sixteen Million Seven Hundred Eighty-Nine Thousand Four Hundred Fifty-Six Point Eight Million Nine Hundred Ninety-Three Thousand Nine Hundred Ninety-Nine'
