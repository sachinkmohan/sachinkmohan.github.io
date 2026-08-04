---
title: Expo Multiple App Variant Config
description: App Variant Config
category: App Development
date: "2026-08-04"
tags:
  - Expo
---

[Expo Documentation on Multiple App Variants](https://docs.expo.dev/tutorial/eas/multiple-app-variants/)

## Step 1 - app.json and eas.json modifications

`app.json` was converted to `app.config.ts`

```ts
import { ConfigContext, ExpoConfig } from "expo/config";

const IS_DEV = process.env.APP_VARIANT === "development";

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return "com.bhashasakhi.app.dev";
  }

  return "com.bhashasakhi.app";
};

const getAppName = () => {
  if (IS_DEV) {
    return "(Dev) Bhasha Sakhi";
  }

  return "Bhasha Sakhi";
};

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: getAppName(),
  scheme: IS_DEV ? "bhashasakhi-dev" : "bhashasakhi",
  ios: {
    bundleIdentifier: getUniqueIdentifier(),
  },
  android: {
    package: getUniqueIdentifier(),
  }
```

`eas.json`

```json
"build": {
    "development": {
      "env": {
        "APP_VARIANT": "development"
      }
    },
}
```

## Step 2 - Build the app using the command(for development)

`eas build --profile development`

## Step 3 - Add script to `package.json`

```json
{
  "scripts": {
    "dev": "APP_VARIANT=development npx expo start"
  }
}
```

## Step 4 - Start dev server

`npm run dev`
