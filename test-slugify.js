'use strict'

const { slugify } = require('./clubside-utils.js')

console.log({ input: 'I ♥ Dogs', extraReplacements: [['♥', ' heart ']], result: slugify('I ♥ Dogs') })
// => 'i-heart-dogs'

console.log({ input: '  Déjà Vu!  ', extraReplacements: undefined, result: slugify('  Déjà Vu!  ') })
// => 'deja-vu'

console.log({ input: 'fooBar 123 $#%', extraReplacements: undefined, result: slugify('fooBar 123 $#%') })
// => 'foobar-123'

console.log({ input: 'я люблю единорогов', extraReplacements: undefined, result: slugify('я люблю единорогов') })
// => 'ya-lyublyu-edinorogov'

console.log({ input: 'BAR and baz', extraReplacements: undefined, result: slugify('BAR and baz') })
// => 'bar-and-baz'

console.log({ input: 'I love @🐶', extraReplacements: [['🐶', 'dogs']], result: slugify('I love @🐶', [['🐶', 'dogs']]) })
// => 'i-love-at-dogs'

console.log({ input: '/.film', extraReplacements: undefined, result: slugify('/.film') })
// => 'slash-film'

console.log({ input: 'Codename: Kids Next Door - Operation: V.I.D.E.O.G.A.M.E.', extraReplacements: [['.', '']], result: slugify('Codename: Kids Next Door - Operation: V.I.D.E.O.G.A.M.E.', [['.', '']]) })
// => 'codename-kids-next-door-operation-videogame'
