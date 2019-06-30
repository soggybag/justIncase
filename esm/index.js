/* eslint-disable no-extend-native */
/* eslint-disable semi */

// const sampleString = 'Hello World'
// sampleString.toUpperCase()
// sampleString.toLowerCase()

// Must use function! (arrow functions won't work here)

// Capitalize first letter
String.prototype.capitalize = function capitalize() {
  return this.charAt(0).toUpperCase() + this.slice(1)
};

// Capitalize all
String.prototype.capitalizeAll = function capitalizeAll() {
  return this.split(' ').map(str => str.capitalize()).join(' ')
};

// 'My String'.capitalizeAll()

// Alias for toUpperCase
String.prototype.allCaps = function allCaps() {
  return this.toUpperCase()
};

// Capitalize Everyother
String.prototype.oddCaps = function oddCaps() {
  return this.split('').map((str, i) => (i % 2 === 0 ? str : str.capitalize())).join('')
};

// Capitalize all
String.prototype.evenCaps = function evenCaps() {
  return this.split('').map((str, i) => (i % 2 === 0 ? str.capitalize() : str)).join('')
};


// Replace space with -

String.prototype.kabobCase = function kabobCase() {
  return this.split(' ').join('-')
};

String.prototype.snakeCase = function snakeCase() {
  return this.split(' ').join('_')
};

String.prototype.stripSpaces = function stripSpaces() {
  return this.split(' ').join('')
};

// String.trim() removes white space from the ends
String.prototype.stripExtraSpaces = function stripExtraSpaces() {
  return this.trim().split(' ').filter(i => i !== '').join(' ')
};

const randomString = (n) => {
  let str = '';
  for (let i =0; i < n; i += 1) {
    str += String.fromCharCode(Math.round(Math.random() * 99));
  }

  return str
};

export { randomString };
