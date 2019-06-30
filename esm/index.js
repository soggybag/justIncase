// Must use function! (arrow functions won't work here)

// Capitalize first letter
function capitalize() {
  return this.charAt(0).toUpperCase() + this.slice(1)
}

// Capitalize all
function capitalizeAll() {
  return this.split(' ').map(str => str.capitalize()).join(' ')
}

// 'My String'.capitalizeAll()

// Alias for toUpperCase
function allCaps() {
  return this.toUpperCase()
}

// Capitalize Everyother
function oddCaps() {
  return this.split('').map((str, i) => (i % 2 === 0 ? str : str.capitalize())).join('')
}

// Capitalize all
function evenCaps() {
  return this.split('').map((str, i) => (i % 2 === 0 ? str.capitalize() : str)).join('')
}


// Replace space with -

function kabobCase() {
  return this.split(' ').join('-')
}

function snakeCase() {
  return this.split(' ').join('_')
}

function stripSpaces() {
  return this.split(' ').join('')
}

// String.trim() removes white space from the ends
function stripExtraSpaces() {
  return this.trim().split(' ').filter(i => i !== '').join(' ')
}

/* eslint-disable no-extend-native */

// Must use function! (arrow functions won't work here)

// Capitalize first letter
String.prototype.capitalize = capitalize;

// Capitalize all
String.prototype.capitalizeAll = capitalizeAll;

// 'My String'.capitalizeAll()

// Alias for toUpperCase
String.prototype.allCaps = allCaps;

// Capitalize Everyother
String.prototype.oddCaps = oddCaps;

// Capitalize all
String.prototype.evenCaps = evenCaps;

String.prototype.kabobCase = kabobCase;
String.prototype.snakeCase = snakeCase;
String.prototype.stripSpaces = stripSpaces;

String.prototype.stripExtraSpaces = stripExtraSpaces;

const randomString = (n) => {
  let str = '';
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let i = 0; i < n; i += 1) {
    str += letters.charAt(Math.round(Math.random() * letters.length));
  }

  return str
};

export { randomString };
