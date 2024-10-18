---
layout: single
title: "Configure Refs in Vue 3"
date: 2024-10-18 15:15:55 +0200
categories: vue3 
---

If you are among those who are doing a migration from vue 2 to vue 3, then you have come to the right place. 

A sample on how ref would look on a component.

```
<ExampleComponent
        ref="discardMessage"
></ExampleComponent>

```

Through the below link, you should have an idea, what has changed. Now let's dig deep in.

[Vue Mastery blog on ref](https://www.vuemastery.com/blog/migration/#vfor-references-replaced)

Here it is replaced by a callback function based on the scenario.


But if your scenario is simple. 

In Vue 2, let's say if you had a function call `showMessage()` in ExampleComponent.Then the syntax would be

```
this.$refs.discardMessage.showMessage()
```

In Vue 3, it will be


```
<script setup>

import { ref } from 'vue'; // Don't forget this import

const discardMessage = ref(null)
discardMessage.value.showMessage()

<script>
```

That's all folks!!