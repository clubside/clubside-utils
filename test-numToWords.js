'use strict'

const assert = require('assert')
const { numToWords } = require('./clubside-utils.js')

// Basic
assert.strictEqual(numToWords(26), 'Twenty-Six')

// Negative
assert.strictEqual(numToWords(-50, true), 'Negative Fifty')

// Thousands
assert.strictEqual(
	numToWords(56908, true),
	'Fifty-Six Thousand, Nine Hundred and Eight'
)

// Decimal
assert.strictEqual(
	numToWords(16789.8993, true),
	'Sixteen Thousand, Seven Hundred and Eighty-Nine Point Eight Thousand, Nine Hundred and Ninety-Three'
)

// Millions
assert.strictEqual(
	numToWords(16789456.8993999, true),
	'Sixteen Million, Seven Hundred and Eighty-Nine Thousand, Four Hundred and Fifty-Six Point Eight Million, Nine Hundred and Ninety-Three Thousand, Nine Hundred and Ninety-Nine'
)

// No separators
assert.strictEqual(
	numToWords(16789456.8993999),
	'Sixteen Million Seven Hundred Eighty-Nine Thousand Four Hundred Fifty-Six Point Eight Million Nine Hundred Ninety-Three Thousand Nine Hundred Ninety-Nine'
)

console.log('numToWords tests passed')
