---
title: Astro - Getting Started Guide for Beginners
slug: astro-getting-started
description: Astro basics to improve your Astro website development experience.
date: "2025-10-26"
tags:
  - Astro
---

## Images

- The images doesn't work as expected in your markdown files. You will have to use `![]()` notation.

[Refer Astro's Official Guide](https://docs.astro.build/en/guides/images/)

- Note, the images added using `![]()` are not resizable. That's only possible in `<Image>` tags which you can't use in Markdown files directly. Second alternative is to use `<Image>` tag in `MDX` files. For this you need to convert your `.md` files to `.mdx` files. Not only that, you need additional configuration too. All details are in the Astro Official Guide.

## Links

To let external links in the markdown files to open in another tab, I used the following hack suggestedb by Astro.
Install `rehype-external-links` plugin.

[Astro Official Guide](https://docs.astro.build/en/recipes/external-links/#resources)

I also added the below config in `astro.config.mjs`

```js
export default defineConfig({
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: "_blank",
          rel: ["noopener", "noreferrer"],
          content: { type: "text", value: " 🔗" },
        },
      ],
    ],
  },
});
```

I added `content: { type: "text", value: " 🔗" }` to show the emoji next to the link.
