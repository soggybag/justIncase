// Must use function! (arrow functions won't work here)

/** 
 * Capitalize first letter
 * @returns String
 * */
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/** 
 * Capitalize all
 * @returns String
 * */
function capitalizeAll(str) {
  return str.split(' ').map(str => capitalize(str)).join(' ')
}

/** 
 * Alias for toUpperCase()
 *  @returns String
 * */
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
// String.prototype.capitalize = capitalize

String.prototype.capitalize = function() {
  return capitalizeAll(this)
};

// Capitalize all
String.prototype.capitalizeAll = function() {
  return capitalizeAll(this)
};


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
