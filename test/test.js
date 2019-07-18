/* eslint-disable no-undef */
/* eslint-disable semi */
require('../umd/just-in-case')

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

test('kabobCas()', () => {
  const str = 'foo bar'
  const newStr = str.kabobCase()
  expect(newStr).toBe('foo-bar')
})

test('snakeCas()', () => {
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
