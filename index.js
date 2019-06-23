
let str = "Hello World"
str.toUpperCase()
str.toLowerCase()

// Must use function! (arrow functions won't work here)

// Capitalize first letter
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1)
}

// Capitalize all 
String.prototype.capitalizeAll = function() {
	return this.split(" ").map(str => str.capitalize()).join(' ')
}

// Alias for toUpperCase
String.prototype.allCaps = function() {
  return this.toUpperCase()
}

// Capitalize Everyother
String.prototype.oddCaps = function() {
	return this.split('').map((str, i) => i % 2 === 0 ? str : str.capitalize()).join('')
}

// Capitalize all 
String.prototype.evenCaps = function() {
	return this.split('').map((str, i) => i % 2 === 0 ? str.capitalize() : str).join('')
}


// Replace space with -

String.prototype.kabobCase = function() {
  return this.split(' ').join('-')
}

String.prototype.snakeCase = function() {
	return this.split(' ').join('_')
}

String.prototype.stripSpaces = function() {
	
}

// String.trim() removes white space from the ends
String.stripExtraSpaces = function() {
	
}





// -----------------------------------------

// ** Ideas ** 

// * Functions and this *

// function() {} vs () => {} 
// It's all about -> this

// * IIFE *

// Scope 

// Putting code into IIFE
// Getting code out of IIFE
// You could use a class...
// Generator functions


