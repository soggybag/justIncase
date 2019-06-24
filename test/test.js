/* eslint-disable semi */
require('../index.js')

test('Upper Cases String', () => {
  const str = 'abc'
  const newStr = str.capitalize()
  expect(newStr).toBe('Abc')
})

test('Upper all letters', () => {
  const str = 'abc'
  const newStr = str.allCaps()
  expect(newStr).toBe('ABC')
})

test('Upper all words', () => {
  const str = 'hello world'
  const newStr = str.capitalizeAll()
  expect(newStr).toBe('Hello World')
})

test('Capitalizes odd letters', () => {
  const str = 'foo bar'
  const newStr = str.oddCaps()
  expect(newStr).toBe('fOo bAr')
})

test('Capitalizes even letters', () => {
  const str = 'foo bar'
  const newStr = str.evenCaps()
  expect(newStr).toBe('FoO BaR')
})

test('Strip spaces', () => {
  const str = 'Hello World'
  expect(str.stripSpaces()).toBe('HelloWorld')
})

test('Strip extra spaces', () => {
  const str = ' Hello    World foo bar '
  expect(str.stripExtraSpaces()).toBe('Hello World foo bar')
})