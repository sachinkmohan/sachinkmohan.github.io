---
title: npm dependencies
description: npm dependencies
category: Node
date: "2026-06-30"
tags:
  - Node
---

> Dev dependencies are not needed in production

Others that are not needed in production

- Typescript packages
- Linters and formatters: Prettier, ESLint
- Testing - Jest, Vitest

Exception of devDependencies that are needed in production

- webpack
- tsc
- Vite
- esbuild

```json
 "dependencies": {
    "@google/generative-ai": "^0.15.0",
    "express": "^4.18.2",
    "helmet": "^8.1.0",
    "openai": "^4.52.0",
    "sqlite": "^5.1.1",
    "sqlite3": "^5.1.7"
  },
   "devDependencies": {
    "nodemon": "^3.0.2"
  }
```

`$ npm ci --omit=dev`

- A clean install from your package-lock.json(more reliable, reproducable builds)
- Faster in CI/CD environments.
