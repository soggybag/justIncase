// Must use function! (arrow functions won't work here)

/** 
 * Capitalize first letter
 * @returns String
 * */
export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/** 
 * Capitalize all
 * @returns String
 * */
export function capitalizeAll(str) {
  return str.split(' ').map(str => capitalize(str)).join(' ')
}

/** 
 * Alias for toUpperCase()
 *  @returns String
 * */
export function allCaps() {
  return this.toUpperCase()
}

// Capitalize Everyother
export function oddCaps() {
  return this.split('').map((str, i) => (i % 2 === 0 ? str : str.capitalize())).join('')
}

// Capitalize all
export function evenCaps() {
  return this.split('').map((str, i) => (i % 2 === 0 ? str.capitalize() : str)).join('')
}


// Replace space with -

export function kabobCase() {
  return this.split(' ').join('-')
}

export function snakeCase() {
  return this.split(' ').join('_')
}

export function stripSpaces() {
  return this.split(' ').join('')
}

// String.trim() removes white space from the ends
export function stripExtraSpaces() {
  return this.trim().split(' ').filter(i => i !== '').join(' ')
}