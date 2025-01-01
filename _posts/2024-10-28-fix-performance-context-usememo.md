---
layout: single
title: "Fix performance issue with useMemo in React Context"
date: 2024-10-28 19:15:55 +0200
categories: react
---

The other day, my sonarlint was showing a code smell that would have caused a performance issue in my React app. The issue was related to the way I was using React Context. I was passing a new object as the value prop to the Context provider every render, which would cause all the child components to re-render unnecessarily. To fix this, I had to wrap the object in a useMemo hook. In this article, I'll explain the issue in detail and show you how to fix it.

Following was the warning I got from sonarlint:

> The object passed as the value prop to the Context provider changes every render. To fix this consider wrapping it in a useMemo hook.sonarlint(typescript:S6481)

### Code without useMemo

```typescript
import { createContext, useState, useContext, ReactNode } from "react";

const EditModeContext = createContext({
  isEditMode: false,
  toggleEditMode: () => {},
});

export const EditModeProvider = ({ children }: { children: ReactNode }) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const toggleEditMode = () => {
    setIsEditMode((prevMode) => !prevMode);
  };

  return (
    <EditModeContext.Provider value={{ isEditMode, toggleEditMode }}>
      {children}
    </EditModeContext.Provider>
  );
};

export const useEditMode = () => useContext(EditModeContext);
```

### Code with useMemo

```typescript
import {
  createContext,
  useState,
  useContext,
  useMemo,
  useCallback,
  ReactNode,
} from "react";

const EditModeContext = createContext({
  isEditMode: false,
  toggleEditMode: () => {},
});

export const EditModeProvider = ({ children }: { children: ReactNode }) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const toggleEditMode = useCallback(() => {
    setIsEditMode((prevMode) => !prevMode);
  }, []);

  const value = useMemo(
    () => ({ isEditMode, toggleEditMode }),
    [isEditMode, toggleEditMode]
  );

  return (
    <EditModeContext.Provider value={value}>
      {children}
    </EditModeContext.Provider>
  );
};

export const useEditMode = () => useContext(EditModeContext);
```

## Detail explanation below:

Imagine you have a React app with several components.

1. **Parent Component** (`EditModeProvider`):

   - This is like a big **parent component** that contains **child components**.
   - It provides an `EditModeContext` with an `isEditMode` value and a `toggleEditMode` function.

2. **Child Components** (`ComponentA`, `ComponentB`, etc.):
   - There are **multiple child components** that need to use the `isEditMode` value and `toggleEditMode` function.
   - These child components use the `useEditMode()` hook to get the value from the context.

### How Context Works Here:

- Every time the **state changes** in the `EditModeProvider` (like toggling `isEditMode` from `false` to `true`), the **entire provider re-renders**.
- This **re-render** means that any new **values that are defined inside this provider component** are recreated.

Now, the **problem** happens with the object `{ isEditMode, toggleEditMode }` that is being passed to the `EditModeContext.Provider` as `value`. Every time `EditModeProvider` re-renders, this **object is re-created**—even if `isEditMode` or `toggleEditMode` themselves have not changed.

### Why This Affects Child Components:

- Imagine you have **many child components** (`ComponentA`, `ComponentB`, `ComponentC`, etc.) that all **consume** this context value.
- When a new object `{ isEditMode, toggleEditMode }` is created, **React thinks it’s a completely new value**, even if the contents are the same.
- Since React thinks the **context value has changed**, **all child components that use this context will re-render**, even if the data has not meaningfully changed.

If you have a **lot of components** consuming this context, this re-creation of the value object causes **all of them to re-render unnecessarily** every single time the parent re-renders. This can lead to **performance issues** because all those components are doing extra work they don't need to.

### Using `useMemo` to Fix It:

When you use `useMemo` to memoize the `value` object:

- React **remembers** (`memoizes`) the value and **only recreates it if something actually changes**—in this case, if `isEditMode` changes.
- This means if `isEditMode` doesn’t change, **the same value object is reused**, and the child components do not re-render.

In other words, `useMemo` helps React **avoid unnecessary re-renders of the child components** by making sure the value object stays the same unless something inside it actually changes.

This is especially important if:

- You have a **large number of components** subscribing to the context.
- The components are **complex** or have **costly re-render logic**.
- Preventing unnecessary re-renders helps keep the app fast and responsive.

Hope that was helpful!
