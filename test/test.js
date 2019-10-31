/* eslint-disable no-undef */
/* eslint-disable semi */

// npm run prepare
// npm run test

// const just = require('../umd/just-in-case')
import { randomString } from '../src/index'

test('Capitalize()', () => {
  const str = 'abc'
  const newStr = str.capitalize()
  expect(newStr).toBe('Abc')
})

test('capitalizeAll()', () => {
  const str = 'hello world'
  const newStr = str.capitalizeAll()
  expect(newStr).toBe('Hello World')
})

test('allCaps()', () => {
  const str = 'abc'
  const newStr = str.allCaps()
  expect(newStr).toBe('ABC')
})

test('oddCaps()', () => {
  const str = 'foo bar'
  const newStr = str.oddCaps()
  expect(newStr).toBe('fOo bAr')
})

test('evenCaps()', () => {
  const str = 'foo bar'
  const newStr = str.evenCaps()
  expect(newStr).toBe('FoO BaR')
})

test('kabobCase()', () => {
  const str = 'foo bar'
  const newStr = str.kabobCase()
  expect(newStr).toBe('foo-bar')
})

test('snakeCase()', () => {
  const str = 'foo bar'
  const newStr = str.snakeCase()
  expect(newStr).toBe('foo_bar')
})

test('stripSpaces()', () => {
  const str = 'Hello World'
  expect(str.stripSpaces()).toBe('HelloWorld')
})

test('stripExtraSpaces()', () => {
  const str = ' Hello    World foo bar '
  expect(str.stripExtraSpaces()).toBe('Hello World foo bar')
})

test('randomString()', () => {
  const str1 = randomString(3)
  expect(str1.length).toBe(3)
}) 
