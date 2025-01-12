---
layout: single
title: "React Project - Vocab Trainer"
date: 2025-01-12 23:10:55 +0200
categories: react
---

> This is an ongoing project since July 2, 2024.

> Repo link - [Vocab Trainer](https://github.com/sachinkmohan/em-vocab-trainer)

> Application Link - [https://bhasha-trainer.netlify.app/](https://bhasha-trainer.netlify.app/)

> Test credentials ->
> username: whitetiger@dummy.com
> password: dummy123

I have been wanting to develop an mobile app for my Malayalam language learning students for a long time. I made an attempt back in 2020-21 using React Native and Expo. But due to many similar apps like that in the market, my app was reject by Apple App Store. I couldn't get back to it due to other commitments. But here I am again, trying to build a web app using React 18 with my web development experience so far 🚀. This time, it is going to be different, as I am using TDD, clean code principles to build a stable app.

As I have laid the foundation for the app, I jumped right in by refining the ideas on paper and got some stories on my Jira board.

> Here is the screenshot of my last sprint board.

<img src="{{ site.url }}{{ site.baseurl }}/assets/images/sprint-3.png" alt="Sprint 3 Image" class="full">

> Backlogs as below for my upcoming sprint...

<img src="{{ site.url }}{{ site.baseurl }}/assets/images/backlogs-sprint-3.png" alt="Backlog Sprint 3 Image" class="full">

I am currently building a Vocabulary builder for my language learning students using the following stack 🧱

- Frontend using - React 18, Typescript and Tailwind CSS
- Backend - Firebase
- Unit testing - Jest & testing-library for React

> Following is the demo 📹 ⏯️ of the admin page where the data is entered in CSV format.

P.S - There is a short lag after pressing the button. If you have patience for 5 more seconds, then you will see a toast message that the words are added successfully. 🤞

<img src="{{ site.url }}{{ site.baseurl }}/assets/images/adding-words-demo.gif" alt="Backlog Sprint 3 Image" class="full">

# Features

## As an Admin(Screenshot above)

- You can add words to database in multiple languages.

- You can edit individual word entries

## As an User

### Signup & Login

<img src="{{ site.url }}{{ site.baseurl }}/assets/images/2024-07-28-vocab-trainer-react-project/signup.png" alt="signup" class="full">

<img src="{{ site.url }}{{ site.baseurl }}/assets/images/2024-07-28-vocab-trainer-react-project/login.png" alt="login" class="full">

### User can learn new words.

<img src="{{ site.url }}{{ site.baseurl }}/assets/images/2024-07-28-vocab-trainer-react-project/learn-words.png" alt="learn-words" class="full">

### Before learning again, user should pass 60% in a quiz.

<img src="{{ site.url }}{{ site.baseurl }}/assets/images/2024-07-28-vocab-trainer-react-project/learn-words-quiz.png" alt="learn-words-quiz" class="full">
### A word list page to view all the words learned.
<img src="{{ site.url }}{{ site.baseurl }}/assets/images/2024-07-28-vocab-trainer-react-project/word-list.png" alt="word-list" class="full">
