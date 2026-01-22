'use strict'

const assert = require('assert')
const { slugify } = require('./clubside-utils.js')

// Basic
assert.strictEqual(slugify('I ♥ Dogs', [['♥', ' heart ']]), 'i-heart-dogs')

// Trim + normalize
assert.strictEqual(slugify('  Déjà Vu!  '), 'deja-vu')

// Alphanumeric + punctuation collapse
assert.strictEqual(slugify('fooBar 123 $#%'), 'foobar-123')

// Cyrillic transliteration
assert.strictEqual(slugify('я люблю единорогов'), 'ya-lyublyu-edinorogov')

// Case normalization
assert.strictEqual(slugify('BAR and baz'), 'bar-and-baz')

// Emoji replacement
assert.strictEqual(slugify('I love @🐶', [['🐶', 'dogs']]), 'i-love-at-dogs')

// Leading slash
assert.strictEqual(slugify('/.film'), 'slash-film')

// Dotted acronym
assert.strictEqual(
	slugify('Codename: Kids Next Door - Operation: V.I.D.E.O.G.A.M.E.', [['.', '']]),
	'codename-kids-next-door-operation-videogame'
)

console.log('slugify tests passed')
