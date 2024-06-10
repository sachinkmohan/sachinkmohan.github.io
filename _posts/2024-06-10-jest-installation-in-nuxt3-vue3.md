---
layout: single
title: "Installing Jest in Nuxt 3"
date: 2024-06-10 16:15:55 +0200
categories: jekyll update
---

[Referred Medium document](https://medium.com/@fgoessler/set-up-nuxt3-with-jest-typescript-80aa4d3cfabc)

P.S - This is for Jest 29

1. Installing dependencies

```bash
# jest basic dependencies
  yarn add --dev @types/jest jest ts-jest jest-transform-stub typescript
  # vue specific jest helpers
  yarn add --dev @vue/vue3-jest @vue/test-utils@next
```

2. Setup babel config

[Jest guide on using babel]([url](https://jestjs.io/docs/getting-started#using-babel))

```
npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/preset-typescript
```

Add the below in babel.config.js
```
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
  ],
};
```

3. Setup Jest config file

```
// ./jest.config.js
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ["js", "jsx", "mjs", "ts", "vue"],
  moduleNameMapper: {
    "^@/(.*)": "<rootDir>/$1",
    "#app": "<rootDir>/node_modules/nuxt3/dist/app/index.mjs"
  },
  transform: {
    '^.+\\.(js|jsx|mjs)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
    ".+\\.(css|scss|png|jpg|svg)$": "jest-transform-stub",
    ".*\\.(vue)$": "@vue/vue3-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(nuxt3|unenv))",
  ],
  setupFiles: [
    "./test-utils/global-test-utils-config.ts"
  ]
};
```

4. Adjust tsconfig.json
```
{
  // https://v3.nuxtjs.org/concepts/typescript
  "extends": "./.nuxt/tsconfig.json",
  "compilerOptions": {
    "types": ["jest"]
  }
}
```

5. Create `./test-utils/global-test-utils-config.ts` for global Jest helper code

```
// ./test-utils/global-test-utils-config.ts
import {ref} from "vue";
/** Mock Nuxt's useState to be a simple ref for unit testing. **/
jest.mock("#app", () => ({
    useState: <T>(key: string, init: () => T) => {
        return ref(init())
    }
}))
```

All the deep explanations are in referred medium blog linked in the beginning. 
