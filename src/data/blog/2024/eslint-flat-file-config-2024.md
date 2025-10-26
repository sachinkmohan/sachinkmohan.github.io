---
title: ESLint - Flat file config in 2024
slug: eslint-flat-file-config-2024
description: Learn how to set up ESLint with a flat file configuration in 2024.
date: "2024-09-09"
tags:
  - ESLint
  - Configuration
---

This was an easy fix previously. Under env - you had to set the jest to true.

```json
{
  "env": {
    "jest": true
  }
}
```

![ESLint Jest error showing 'jest' is not defined in the terminal](../../../assets/blog/2024/eslint-post/eslint-jest-error.png)

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
