/* eslint-disable no-extend-native */
/* eslint-disable semi */
import {
  capitalize,
  capitalizeAll,
  allCaps, oddCaps,
  evenCaps, kabobCase,
  snakeCase,
  stripSpaces,
  stripExtraSpaces,
} from './string-methods'

// Must use function! (arrow functions won't work here)

// Capitalize first letter
// String.prototype.capitalize = capitalize

String.prototype.capitalize = function() {
  return capitalize(this)
}

// Capitalize all
String.prototype.capitalizeAll = function() {
  return capitalizeAll(this)
}


// 'My String'.capitalizeAll()

// Alias for toUpperCase
String.prototype.allCaps = allCaps

// Capitalize Everyother
String.prototype.oddCaps = oddCaps

// Capitalize all
String.prototype.evenCaps = evenCaps

String.prototype.kabobCase = kabobCase
String.prototype.snakeCase = snakeCase
String.prototype.stripSpaces = stripSpaces

String.prototype.stripExtraSpaces = stripExtraSpaces

const randomString = (n) => {
  let str = ''
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  for (let i = 0; i < n; i += 1) {
    str += letters.charAt(Math.round(Math.random() * letters.length))
  }

  return str
}

export {
  randomString,
  capitalize,
  capitalizeAll,
  allCaps, oddCaps,
  evenCaps, kabobCase,
  snakeCase,
  stripSpaces,
  stripExtraSpaces,
}
