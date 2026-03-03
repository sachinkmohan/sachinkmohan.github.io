---
title: Named vs Default Exports
date: "2026-03-03"
category: JavaScript
description: What are the difference between Named and Default Exports in Javascript
tags:
  - ES6
---

Exports is used to share code between modules.

## Named

---

`operations.js`

```js
export function sum(a,b) => a +b
// import
import {sum} from './operations.js'
```

- Any number of exports possible
- Name should match while importing
- Uses curly braces
- Introduced in ES6

## Default

```js
export default function sum(a,b) => a+b
//import
import addFunction from './operations.js'
```

- Any name is possible while importing
- Only one default export per file
