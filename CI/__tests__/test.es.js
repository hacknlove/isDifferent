import { isDifferent } from '../../dist/isDifferent.es'

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
