# isDifferent
![test coverage 100%](https://img.shields.io/badge/test_coverage-100%25-brightgreen)
![dependencies 0](https://img.shields.io/badge/dependencies-0-brightgreen)
![minified size 0.4k](https://img.shields.io/badge/minified_size-0.4k-brightgreen)

Check deep equality of two variables

## browser
### script
```html
<script src="https://cdn.jsdelivr.net/npm/isdifferent@2.0.0/dist/isDifferent.iife.js"></script>
<script>
  isDifferent.isDifferent('bar', 'foo') // true
  isDifferent.isDifferent({response: 42, question: 'unknown'}, {question: 'unknown', response: 42}) // false
</script>
```

### module
```html
<script type="module">
  import { isDifferent } from 'https://cdn.jsdelivr.net/npm/isdifferent@2.0.0/dist/isDifferent.esm.min.js'

  isDifferent('bar', 'foo') // true
  isDifferent({response: 42, question: 'unknown'}, {question: 'unknown', response: 42}) // false
</script>
```

## node (and browser with some bundler)
```
npm i isdifferent
```
```javascript
import { isDifferent } from 'isdifferent'
// or // const { isDifferent } = require('isdifferent')

isDifferent('bar', 'foo') // true
isDifferent({response: 42, question: 'unknown'}, {question: 'unknown', response: 42}) // false
```
