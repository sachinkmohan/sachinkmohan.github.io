---
title: JavaScript RegExp Basics
date: "2025-02-15"
category: JavaScript
description: Essential patterns and methods for working with regular expressions in JavaScript
tags:
  - RegExp
  - Patterns
  - String Matching
---

## Creating Regular Expressions

There are two ways to create a regular expression in JavaScript:

### Literal Notation
```javascript
const pattern = /hello/i;  // 'i' flag for case-insensitive
```

### Constructor Function
```javascript
const pattern = new RegExp('hello', 'i');
```

## Common Flags

- `i` - Case-insensitive matching
- `g` - Global search (find all matches)
- `m` - Multiline mode
- `s` - Dot matches newline characters

## Basic Methods

### `test()` - Check if pattern exists
```javascript
const regex = /hello/i;
console.log(regex.test('Hello World'));  // true
console.log(regex.test('Goodbye'));      // false
```

### `exec()` - Find match details
```javascript
const regex = /(\w+)@(\w+)/;
const match = regex.exec('contact@example.com');
console.log(match[0]);  // 'contact@example.com'
console.log(match[1]);  // 'contact'
console.log(match[2]);  // 'example'
```

### String Methods with RegExp

#### `match()` - Find all matches
```javascript
const text = 'cat, dog, cat';
const matches = text.match(/cat/g);
console.log(matches);  // ['cat', 'cat']
```

#### `replace()` - Replace matches
```javascript
const text = 'Hello World';
const result = text.replace(/world/i, 'JavaScript');
console.log(result);  // 'Hello JavaScript'
```

#### `split()` - Split by pattern
```javascript
const text = '2025-02-15';
const parts = text.split(/-/);
console.log(parts);  // ['2025', '02', '15']
```

## Common Patterns

| Pattern | Matches |
|---------|---------|
| `.` | Any character except newline |
| `\d` | Digit (0-9) |
| `\w` | Word character (a-z, A-Z, 0-9, _) |
| `\s` | Whitespace |
| `[abc]` | Any of a, b, or c |
| `[^abc]` | Anything except a, b, or c |
| `a*` | Zero or more a's |
| `a+` | One or more a's |
| `a?` | Zero or one a |
| `a{3}` | Exactly 3 a's |

## Practical Example

Email validation pattern:
```javascript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(emailRegex.test('user@example.com'));    // true
console.log(emailRegex.test('invalid.email'));       // false
```
