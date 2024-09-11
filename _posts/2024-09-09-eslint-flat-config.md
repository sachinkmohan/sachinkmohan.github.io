---
layout: single
title: "ESLint - Flat file config"
date: 2024-09-09 22:10:55 +0200
categories: eslint
---

This was an easy fix previously. Under env - you had to set the jest to true.

```json
{
  "env": {
    "jest": true
  }
}
```

<img src="{{ site.url }}{{ site.baseurl }}/assets/images/2024-09-09-eslint-flat-config/eslint-jest-error.png" alt="Sprint 3 Image">

The fix in Eslint 9 is

```json
export default [
  {
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
```

Reference link - https://eslint.org/docs/latest/use/configure/language-options
