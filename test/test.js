const justincase = require('../index.js')

test('Upper Cases String', () => {
	let str = "abc"
	let newStr = str.capitalize()
	expect(newStr).toBe('Abc')
})

test('Upper all letters', () => {
	let str = "abc"
	let newStr = str.allCaps()
	expect(newStr).toBe('ABC')
})

test('Upper all words', () => {
	let str = "hello world"
	let newStr = str.capitalizeAll()
	expect(newStr).toBe('Hello World')
})

test('Capitalizes odd letters', () => {
	let str = "foo bar"
	let newStr = str.oddCaps()
	expect(newStr).toBe('fOo bAr')
})

test('Capitalizes even letters', () => {
	let str = "foo bar"
	let newStr = str.evenCaps()
	expect(newStr).toBe('FoO BaR')
})