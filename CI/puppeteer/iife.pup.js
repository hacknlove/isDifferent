/* global page */
/* global isDifferent */

import path from 'path'

describe('iife', () => {
  beforeAll(async () => {
    await page.goto(`file:${path.join(__dirname, 'iife.html')}`)
  })

  it('returns false if equal', async () => {
    expect(await page.evaluate((a, b) => isDifferent.isDifferent(a, b), undefined)).toBe(false)
    expect(await page.evaluate((a, b) => isDifferent.isDifferent(a, b), null, null)).toBe(false)
    expect(await page.evaluate((a, b) => isDifferent.isDifferent(a, b), 42, 42)).toBe(false)
    expect(await page.evaluate((a, b) => isDifferent.isDifferent(a, b), { a: 42, b: [123, { a: { b: 1, c: 2 } }], c: 23 }, { a: 42, b: [123, { a: { b: 1, c: 2 } }], c: 23 })).toBe(false)
    expect(await page.evaluate((a, b) => isDifferent.isDifferent(a, b), { response: 42, question: 'unknown' }, { question: 'unknown', response: 42 })).toBe(true)
  })

  it('returns true if different', async () => {
    expect(await page.evaluate((a, b) => isDifferent.isDifferent(a, b), 1)).toBe(true)
    expect(await page.evaluate((a, b) => isDifferent.isDifferent(a, b), null, 2)).toBe(true)
    expect(await page.evaluate((a, b) => isDifferent.isDifferent(a, b), undefined, null)).toBe(true)
    expect(await page.evaluate((a, b) => isDifferent.isDifferent(a, b), 42, 46)).toBe(true)
    expect(await page.evaluate((a, b) => isDifferent.isDifferent(a, b), { a: 42, b: [123, { a: { b: 1, c: 2 } }], c: 23 }, { a: 42, b: [123, { a: { b: 1, c: 5 } }], c: 23 })).toBe(true)
  })
})
