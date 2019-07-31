import test from 'ava'
import isDifferent, { objectIsDifferent, arrayIsDifferent } from './index'

test('arrayIsDifferent: equal', t => {
  t.false(arrayIsDifferent([], []))
  t.false(arrayIsDifferent([1,2,3,7], [1,2,3,7]))
})

test('arrayIsDifferent: different', t => {
  t.true(arrayIsDifferent([], [1]))
  t.true(arrayIsDifferent([1,2,3], [1,2]))
  t.true(arrayIsDifferent([1,2,3], [1,2,5]))
})


test('objectIsDifferent: equal', t => {
  t.false(objectIsDifferent({}, {}))
  t.false(objectIsDifferent({a: 1, b: 2}, {a: 1, b: 2}))
})

test('objectIsDifferent: different', t => {
  t.true(objectIsDifferent({}, {a: 1}))
  t.true(objectIsDifferent({a: 1, b: 2}, {a: 1, b: 3}))
})

test('isDifferent: equal', t => {
  t.false(isDifferent())
  t.false(isDifferent(null, null))
  t.false(isDifferent(42, 42))
  t.false(isDifferent({a: 42, b: [123, {a: {b: 1, c: 2}}], c: 23}, {a: 42, b: [123, {a: {b: 1, c: 2}}], c: 23}))
  t.true(isDifferent({response: 42, question: 'unknown'}, {question: 'unknown', response: 42}))
})

test('isDifferent: different', t => {
  t.true(isDifferent(1))
  t.true(isDifferent(null, 2))
  t.true(isDifferent(undefined, null))
  t.true(isDifferent(42, 46))
  t.true(isDifferent({a: 42, b: [123, {a: {b: 1, c: 2}}], c: 23}, {a: 42, b: [123, {a: {b: 1, c: 5}}], c: 23}))
})
