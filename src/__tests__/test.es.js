import isDifferent, { arrayIsDifferent, objectIsDifferent } from '../../dist/isDifferent.es'


describe('arrayIsDifferent', () => {
  it('returns false with two empty arrays', () => {
    expect(arrayIsDifferent([], [])).toBe(false)
  })

  it('returns false with two equal arrays', () => {
    expect(arrayIsDifferent([1, 2, 3, 7], [1, 2, 3, 7])).toBe(false)
  })

  it('return true if b is not an array', () => {
    expect(arrayIsDifferent([], 'no array')).toBe(true)
  })
  it('return true with two different arrays', () => {
    expect(arrayIsDifferent([], [1])).toBe(true)
    expect(arrayIsDifferent([1, 2, 3], [1, 2])).toBe(true)
    expect(arrayIsDifferent([1, 2, 3], [1, 2, 5])).toBe(true)
  })
})

describe('objectIsDifferent', () => {
  it('returns false if equal', () => {
    expect(objectIsDifferent({}, {})).toBe(false)
    expect(objectIsDifferent({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(false)
  })

  it('returns true if different', () => {
    expect(objectIsDifferent(null, {})).toBe(true)
    expect(objectIsDifferent({}, null)).toBe(true)
    expect(objectIsDifferent({}, { a: 1 })).toBe(true)
    expect(objectIsDifferent({ a: 1, b: 2 }, { a: 1, b: 3 })).toBe(true)
  })
})

describe('isDifferent', () => {
  it('returns false if equal', () => {
    expect(isDifferent()).toBe(false)
    expect(isDifferent(null, null)).toBe(false)
    expect(isDifferent(42, 42)).toBe(false)
    expect(isDifferent({ a: 42, b: [123, { a: { b: 1, c: 2 } }], c: 23 }, { a: 42, b: [123, { a: { b: 1, c: 2 } }], c: 23 })).toBe(false)
    expect(isDifferent({ response: 42, question: 'unknown' }, { question: 'unknown', response: 42 })).toBe(true)
  })

  it('returns true if different', () => {
    expect(isDifferent(1)).toBe(true)
    expect(isDifferent(null, 2)).toBe(true)
    expect(isDifferent(undefined, null)).toBe(true)
    expect(isDifferent(42, 46)).toBe(true)
    expect(isDifferent({ a: 42, b: [123, { a: { b: 1, c: 2 } }], c: 23 }, { a: 42, b: [123, { a: { b: 1, c: 5 } }], c: 23 })).toBe(true)
  })
})
