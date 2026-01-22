# clubside‑utils

A small collection of explicit, predictable utility functions extracted from real production projects. These utilities are designed to be readable, maintainable, and free of hidden behavior. They are used throughout CosSocial, Videogame Pavilion, and other archival and content‑processing tools.

---

## slugify

Converts a string into a clean, URL‑safe slug.

A slug is defined as:

- lower‑case
- spaces → hyphens
- `&` → `and`
- `@` → `at`
- `/` → `slash`
- all other punctuation → hyphen
- repeated hyphens collapsed
- optional custom replacements
- Unicode normalized and transliterated when possible

This code is based on [Sindre Sorhus’s slugify](https://github.com/sindresorhus/slugify).

### Usage

```js
const { slugify } = require('./clubside-utils.js')

const result = slugify(
  'Codename: Kids Next Door - Operation: V.I.D.E.O.G.A.M.E.',
  [['.', '']]
)
// => 'codename-kids-next-door-operation-videogame'
```

### Parameters

- **string** — the string to slugify
- **extraReplacements** — optional array of `[match, replacement]` pairs

---

## smartify

Converts straight quotes, hyphens, and ellipses into proper typographic punctuation while **preserving HTML tags and attributes**.

### What smartify does

- `"` → `“` or `”`
- `'` → `‘` or `’`
- `...` → `…`
- `--` → em dash (`—`)
- `---` → em dash (`—`)
- numeric ranges (`10-20`) → en dash (`10–20`)
- spaced dash (`A - B`) → en dash (`A – B`)
- word‑to‑word hyphens (`north-south`) → en dash (`north–south`)
- **skips HTML tags and attributes entirely**

### Usage

```js
const { smartify } = require('./clubside-utils.js')

const result = smartify(
  'As the scornful cry "So what?" echoes from glen to glen...'
)
// => 'As the scornful cry “So what?” echoes from glen to glen…'
```

### Options

```js
smartify(string, {
  hyphens: true   // default; set to false to disable all dash conversions
})
```

### Parameters

- **string** — the string to smartify
- **options.hyphens** — set to `false` to disable dash/ellipsis conversion

---

## numToWords

Converts numbers into English words.
Supports:

- integers
- decimals
- negative numbers
- optional grouping with commas and “and”

Based on [this StackOverflow answer](https://stackoverflow.com/a/71276286/13646936) by Mohsen Alyafei.

### Usage

```js
const { numToWords } = require('./clubside-utils.js')

const result = numToWords(16789456.8993999, true)
// => 'Sixteen Million, Seven Hundred and Eighty-Nine Thousand, Four Hundred and Fifty-Six Point Eight Million, Nine Hundred and Ninety-Three Thousand, Nine Hundred and Ninety-Nine'
```

### Parameters

- **number** — number or numeric string
- **separators** — boolean; include commas and “and” when true

---

## addIndent

Adds indentation (tabs) to every line of a string.
This utility uses **tabs**, not **spaces**, matching the indentation philosophy used across CosSocial and related projects.

### Usage

```js
const { addIndent } = require('./clubside-utils.js')

addIndent('Line 1\nLine 2', 2)
// => '\t\tLine 1\n\t\tLine 2'
```

### Parameters

- **string** — the text to indent
- **count** — number of tabs to add

---

## removeIndent

Removes the **minimum common indentation** from all lines in a block of text.
Preserves leading and trailing newlines.

Useful for:

- HTML blocks
- SQL blocks
- Markdown
- template literals

### Usage

```js
const { removeIndent } = require('./clubside-utils.js')

removeIndent(`
        <p>Hello</p>
        <p>World</p>
`)
/*
Returns:
`
<p>Hello</p>
<p>World</p>
`
*/
```

### Parameters

- **string** — the text to normalize

---

## License

MIT License.
See `LICENSE` for details.
