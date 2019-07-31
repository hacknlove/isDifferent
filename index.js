function isDifferent (a, b) {
  if (a === b) {
    return false
  }
  if (typeof a !== typeof b) {
    return true
  }
  if (Array.isArray(a)) {
    return arrayIsDifferent(a, b)
  }
  if (typeof a === 'object') {
    return objectIsDifferent(a, b)
  }
  return true
}

function arrayIsDifferent (a, b) {
  if (!Array.isArray(b)) {
    return true
  }
  if (a.length !== b.length) {
    return true
  }
  return a.some((e, i) => {
    return isDifferent(e, b[i])
  })
}

function objectIsDifferent (a, b) {
  if (a === null && b !== null) {
    return true
  }
  if (b === null) {
    return true
  }

  const keysA = Object.keys(a)
  const keysB = Object.keys(b)

  if (arrayIsDifferent(keysA, keysB)) {
    return true
  }

  return keysA.some((key) => {
    return isDifferent(a[key], b[key])
  })
}

module.exports = isDifferent

if (process.env.NODE_ENV === 'test') {
  module.exports.arrayIsDifferent = arrayIsDifferent
  module.exports.objectIsDifferent = objectIsDifferent
}
