# My Utility Functions

This library includes a number of utility functions I've compiled from a variety of projects.

## slugify

Creates a slug based on a string. A slug is defined as a lower-case string with spaces converted to hyphens, '&' to 'and', '@' to 'at' and '/' to 'slash'. All other punctuation is converted to a hyphen. Repeat hyphens are consdensed into a single hyphen. Extra replacement patterns can be passed.

This code is based on [slugify](https://github.com/sindresorhus/slugify) by [Sindre Sorhus](https://github.com/sindresorhus).

### Usage

```js
const { slugify } = require('./clubside-utils.js')

const result = slugify('Codename: Kids Next Door - Operation: V.I.D.E.O.G.A.M.E.', [['.', '']])
// => 'codename-kids-next-door-operation-videogame'
```

#### Parameters

- `string` is the string you want to slugify.
- `extraReplacements` is an optional array of additional replacements in the form of `[[match, replacement], [match, replacement], ...]`

## smartify

Converts quotes to smart quotes, double-hyphen to em-dash, hyphen followed by a space to en-dash and three consectutive periods to an ellipsis. Excludes text within HTML tags.

### Usage

```js
const { smartify } = require('./clubside-utils.js')

const result = smartify('As the scornful cry "So what?" echoes from glen to glen, and as the unmoved Joanne Juraszek admits that she finds her son\'s new fame "very strange," skeptical citizens might do well to pay attention to a peculiar clinking sound audible across the land.')
// => 'As the scornful cry “So what?” echoes from glen to glen, and as the unmoved Joanne Juraszek admits that she finds her son’s new fame “very strange,” skeptical citizens might do well to pay attention to a peculiar clinking sound audible across the land.'
```

#### Parameters

- `string` is the string you want to smartify.

## numToWords

Converts Numbers to Words, optionally grouped. Prepends 'Negative ' for negative numbers.

This code is based on this [Stack Overflow](https://stackoverflow.com/a/71276286/13646936) answer by [Mohsen Alyafei](https://stackoverflow.com/users/11606728/mohsen-alyafei).

### Usage

```js
const { numToWords } = require('./clubside-utils.js')

const result = numToWords(16789456.8993999, true)
// => 'Sixteen Million, Seven Hundred and Eighty-Nine Thousand, Four Hundred and Fifty-Six Point Eight Million, Nine Hundred and Ninety-Three Thousand, Nine Hundred and Ninety-Nine'
```

#### Parameters

- `number` is the number (or string for extra large numbers) you want to convert to words.
- `separators` is an optional boolean that indicates whether or not to group words with commas and 'and'.
