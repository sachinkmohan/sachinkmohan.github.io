---
layout: single
title: "Why React.FunctionComponent or React.FC is not recommended anymore"
date: 2025-01-01 23:59:55 +0200
categories: react
---

First blog in 2025! 🥳

I have been working lately on the React Vocabulary builder app using Typescript. During my development process, I was validating few code suggestions by Copilot and felt that they were outdated while associating type for the key values on an Object. Cross checking on web, I figured out that the data on Copilot was a bit outdated.

## Outdated Syntax

```
interface UserWelcomeScreenProps {
  nickname: string | null;
  userGrowthPoints: number;
  favoriteWordsCount: number;
}

const UserWelcomeScreen: React.FC<UserWelcomeScreenProps> = ({ nickname, userGrowthPoints, favoriteWordsCount }) => {

```

## Updated Code

```
const UserWelcomeScreen = ({ nickname, userGrowthPoints, favoriteWordsCount }: UserWelcomeScreenProps) => {
```

If you look closely `React.FC<UserWelcomeScreenProps>`is rewritten differently and in a simple way in the new syntax.

[Reference link explaining it is deprecated](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components/)

P.S - Be careful when using LLM generated codes.
