# justIncase

![GitHub package.json version](https://img.shields.io/github/package-json/v/soggybag/justincase.svg)
![npm bundle size](https://img.shields.io/bundlephobia/min/@soggybag/justincase.svg)
[![install size](https://packagephobia.now.sh/badge?p=@soggybag/justincase)](https://packagephobia.now.sh/result?p=@soggybag/justincase)
[![Coverage Status](https://coveralls.io/repos/github/soggybag/justincase/badge.svg?branch=master)](https://coveralls.io/github/soggybag/justincase?branch=master)
[![Build Status](https://travis-ci.org/soggybag/justincase.svg?branch=master)](https://travis-ci.org/soggybag/justincase)

A library of string functions to help managing case.

## Code samples 

```
let hello = "Hello World"
let foo = "foo bar"
```

Capitalize the first letter of a string
```
console.log(hello.capitalize()) // Hello World
console.log(foo.capitalize())	  // Foo bar
```

Capitalize the first letter of all words in a string
```
console.log(foo.capitalizeAll()) // Foo Bar
```

Alternate case in a string, odd characters will be upper
```
console.log(foo.oddCaps())   // fOo bAr
console.log(hello.oddCaps()) // HElLo WOrLd
```

Alternate cae with even characters upper
```
console.log(foo.evenCaps())  // FoO BaR
```

Replace all spaces with a hyphen "-"
```
console.log(hello.kabobCase()) // Hello-World
console.log(foo.kabobCase())   // foo-bar
```

Replaces all spaces with an underscore "_"
```
console.log(hello.snakeCase()) // Hello_World
console.log(foo.snakeCase())   // foo_bar
```