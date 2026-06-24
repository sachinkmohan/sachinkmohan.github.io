---
title: JS String Methods
date: "2026-06-24"
category: JavaScript
description: Learning JS String methods
tags:
  - JavaScript
---

## charAt()

The charAt() method of String values returns a new string consisting of the single UTF-16 code unit at the given index.

#### Syntax

```js
charAt(index);

// Example
const car = "benz";
car.charAt(0); // 'b'
```

## slice()

The slice() method of String values extracts a section of this string and returns it as a new string, without modifying the original string.

[Firefox Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)

#### Syntax

```js
slice(indexStart)
slice(indexStart, indexEnd)

// Example
const name = "hell boy"
name.slice(-1) = 'y'
```
