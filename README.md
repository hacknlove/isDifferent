# isDifferent

## Install
```sh
npm i isdifferent
```

## Usage
```javascript
const isDifferent = require('isdifferent')

isDifferent('bar', 'foo') // true
isDifferent({response: 42, question: 'unknown'}, {question: 'unknown', response: 42}) // false
```

## Test
```
git clone https://github.com/hacknlove/isDifferent.git
cd isDifferent
npm install
npm test
```
