# isDifferent
![test coverage 100%](https://img.shields.io/badge/test_coverage-100%25-brightgreen)
![dependencies 0](https://img.shields.io/badge/dependencies-0-brightgreen)
![minified size 1.5k](https://img.shields.io/badge/minified_size-1.5k-brightgreen)

Check deep equality of two variables

## Install

### npm
```sh
npm i isdifferent
```

### CDN
```html
<script src="https://cdn.jsdelivr.net/npm/isdifferent@1.0.2/build/isDifferent.min.js"></script>
```

### local
[download](https://cdn.jsdelivr.net/npm/isdifferent@1.0.2/build/isDifferent.min.js)

## Usage
```javascript
const isDifferent = require('isdifferent')

isDifferent('bar', 'foo') // true
isDifferent({response: 42, question: 'unknown'}, {question: 'unknown', response: 42}) // false
```
