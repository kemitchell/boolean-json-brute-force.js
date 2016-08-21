```javascript
var solve = require('boolean-json-brute-force')
```

The package exports a function of one [boolean-json](https://npmjs.com/packages/boolean-json-schema) argument. It returns an object map from variable name to boolean value.

```javascript
var assert = require('assert')

assert.deepEqual(
  solve({and: ['a', 'b', 'c', 'd']}),
  {a: true, b: true, c: true, d: true}
)

assert.deepEqual(
  solve({and: ['a', {not: 'b'}, 'c']}),
  {a: true, b: false, c: true}
)
```

Or, if there is no solution, it returns `undefined`.

```javascript
assert.deepEqual(
  solve({and: ['a', {not: 'a'}]}),
  undefined
)
```
