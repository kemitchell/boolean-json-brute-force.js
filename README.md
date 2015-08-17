```javascript
var solve = require('boolean-json-brute-force')
var assert = require('assert')
```

`solve` takes a [boolean-json](https://npmjs.com/packages/boolean-json-schema) argument and returns an object map from variable name to boolean value.

```javascript
assert.deepEqual(
  solve({ and: [ 'a', { and: [ 'b', { and: [ 'c', 'd' ] } ] } ] }),
  { a: true,
    b: true,
	c: true,
	d: true })

assert.deepEqual(
  solve({ and: [ 'a', { not: 'b' } ] }),
  { a: true,
    b: false })
```

`solve` returns `undefined` for invalid expressions:

```javascript
assert.deepEqual(
  solve({ and: [ 'a', { not: 'a' } ] }),
  undefined)
```
