'use strict'

const assert = require('assert')
const { addIndent } = require('./clubside-utils.js')

// addIndent uses tabs, not spaces
assert.strictEqual(
	addIndent('Line 1\nLine 2', 4),
	'\t\t\t\tLine 1\n\t\t\t\tLine 2'
)

assert.strictEqual(
	addIndent('<p>Hello</p>', 2),
	'\t\t<p>Hello</p>'
)

console.log('addIndent tests passed')
