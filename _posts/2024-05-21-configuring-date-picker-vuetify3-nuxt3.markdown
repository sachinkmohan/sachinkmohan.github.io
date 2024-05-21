---
layout: single
title: "Configure Date Picker for internationalisation(i18n) in Vuetify 3 & Nuxt 3"
date: 2024-05-21 19:15:55 +0200
categories: jekyll update
---

`<v-date-picker></v-date-picker>`

When you are using `v-date-picker` in vuetify 3, you might have to define a new plugin to show the date picker in the desired language.

If you are using both Options API and Composition API, then you might need the following configuration.

{% highlight typescript %}
import { createVuetify } from 'vuetify';

import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'

import { createI18n, useI18n } from 'vue-i18n';

export default defineNuxtPlugin((app) => {
const lang = 'de' // you can set logic here to get the language from the user

const messages = {
en: {
$vuetify: {
datePicker: {
title: 'Select Date',
},
},
},

const i18n = createI18n({
legacy: false, // you must set `false`, to use Vue 3 Composition API
locale: mappedLocale ,
fallbackLocale: 'en',
messages
});

const vuetify = createVuetify({
locale: {
adapter: createVueI18nAdapter({ i18n, useI18n }),
},

});
app.vueApp.use(vuetify);
});
{% endhighlight %}

Note here legacy should be set to false. The reason is because Vuetify 3 doesn't support legacy to be true. Here legacy means Options API.

But you can have vue-i18n configured seperately(for `$t`) legacy true to use Options API. Hence you might need to define two different plugins. One for i18n and another for vuetify.

```javascript
const i18n = createI18n({
  legacy: false, // you must set `false`, to use Vue 3 Composition API
  locale: mappedLocale,
  fallbackLocale: "en",
  messages,
});
```

```javascript
const messages = {
en: {
$vuetify: {
datePicker: {
title: 'Select Date',
},
},
},
```

Messages should be set only if you wish to show the title. If not, you can use `hide-header` prop in the v-date-picker component. But if you wish to show the title, then you can set the title in the messages. Else you will end up seeing `$vuetify.datePicker.title` on the top of component. I had to scratch my head around this to get this fixed, as vuetify 2 had `no-title` prop I guess if I remember correctly, which is removed in vuetify 3. Very bad move Vuetify team 😡!! The documentation is not so clear. Please update!

> Currently I am using vue-18n v8. This version supports Options API. But
> vuetify 3 doesn't. Hence this workaround. Hope this helps!
