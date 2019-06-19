# justIncase

![GitHub package.json version](https://img.shields.io/github/package-json/v/soggybag/justincase.svg)
![npm bundle size](https://img.shields.io/bundlephobia/min/@soggybag/justincase.svg)
[![install size](https://packagephobia.now.sh/badge?p=@soggybag/justincase)](https://packagephobia.now.sh/result?p=@soggybag/justincase)

A library of string functions to help managing case.

```
let hello = "Hello World"
let foo = "foo bar"

console.log(hello.capitalize()) // Hello World
console.log(foo.capitalize())	// Foo bar

console.log(foo.capitalizeAll()) // Foo Bar

console.log(foo.oddCaps()) // fOo bAr
console.log(foo.evenCaps()) // FoO BaR
console.log(hello.oddCaps()) // HElLo WOrLd

console.log(hello.kabobCase()) // Hello-World
console.log(foo.kabobCase()) // foo-bar

console.log(hello.snakeCase()) // Hello_World
console.log(foo.snakeCase()) // foo_bar
```