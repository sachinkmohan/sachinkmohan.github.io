# Global Heading Styles in Astro - Best Practices

## What is the Best Practice?

According to **Astro documentation**, there are **3 recommended approaches** for setting global heading styles (h1-h6):

---

## ✅ **Option 1: Global Styles in Layout Component (RECOMMENDED)**

**This is what we implemented for you!**

### Why This Approach?

According to Astro docs:

> "While we recommend scoped styles for most components, you may eventually find a valid reason to write global, unscoped CSS. You can opt-out of automatic CSS scoping with the `<style is:global>` attribute."

### Implementation:

```astro
<!-- src/layouts/Layout.astro -->
<style is:global>
  h1 {
    font-size: var(--text-h1);
    font-weight: 700;
    line-height: 1.2;
    color: var(--dark);
  }

  h2 { /* ... */ }
  h3 { /* ... */ }
  /* ... h4-h6 */
</style>
```

### ✅ **Advantages:**

- **Astro's recommended method** for global styles
- **Single source of truth** - all pages use the same layout
- **Easy to maintain** - one place to change heading styles
- **Works with Tailwind variables** from `@theme`
- **Proper cascade order** - global styles have lowest specificity
- **Component styles can override** when needed

### ✅ **Best For:**

- Site-wide consistent typography
- Standard heading hierarchy
- Projects using a main layout wrapper

---

## ⚠️ **Option 2: Import External CSS File**

Import a dedicated global stylesheet in your layout:

```astro
<!-- src/layouts/Layout.astro -->
---
import "../styles/global.css";
import "../styles/typography.css"; // Separate typography file
---
```

```css
/* src/styles/typography.css */
h1 {
  font-size: var(--text-h1);
  font-weight: 700;
  line-height: 1.2;
  color: var(--dark);
}
/* ... h2-h6 */
```

### ✅ **Advantages:**

- **Separation of concerns** - typography in its own file
- **Easier to find** - dedicated typography stylesheet
- **Can be reused** across multiple layouts

### ⚠️ **Disadvantages:**

- Extra file to manage
- Needs to be imported in every layout that needs it

### ✅ **Best For:**

- Large projects with multiple layouts
- When you want to organize CSS into separate files

---

## ⚠️ **Option 3: Tailwind Plugin or `@layer` (Tailwind-specific)**

Use Tailwind's base layer for heading styles:

```css
/* src/styles/global.css */
@import "tailwindcss";
@plugin '@tailwindcss/typography';

@theme {
  --text-h1: 2.5rem;
  --text-h2: 2rem;
  /* ... */
}

/* Add base styles */
@layer base {
  h1 {
    font-size: theme(--text-h1);
    font-weight: 700;
    line-height: 1.2;
  }
}
```

### ⚠️ **Note:**

- Tailwind 4's `@layer base` is different from Tailwind 3
- Less commonly used in Astro projects
- More complex setup

### ✅ **Best For:**

- Tailwind-heavy projects
- When you want Tailwind to manage everything

---

## 📊 **Comparison Table**

| Feature                    | Option 1: `<style is:global>` | Option 2: Import CSS | Option 3: Tailwind @layer |
| -------------------------- | ----------------------------- | -------------------- | ------------------------- |
| **Astro Recommended**      | ✅                            | ✅                   | ⚠️                        |
| **Ease of Use**            | ⭐⭐⭐⭐⭐                    | ⭐⭐⭐⭐             | ⭐⭐⭐                    |
| **Maintainability**        | ⭐⭐⭐⭐⭐                    | ⭐⭐⭐⭐             | ⭐⭐⭐                    |
| **Single Source**          | ✅                            | ✅                   | ✅                        |
| **Separation of Concerns** | ⚠️                            | ✅                   | ✅                        |
| **Performance**            | Excellent                     | Excellent            | Excellent                 |
| **Override Flexibility**   | ✅✅                          | ✅✅                 | ✅                        |

---

## 🎯 **What We Implemented**

We used **Option 1** (`<style is:global>` in Layout.astro) because:

### ✅ **Your Current Setup:**

```astro
<!-- src/layouts/Layout.astro -->
<style is:global>
  /* Global heading styles using Tailwind 4 theme variables */
  h1 {
    font-size: var(--text-h1);  /* From @theme in global.css */
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
    color: var(--dark);  /* From :root variables */
  }

  h2 { font-size: var(--text-h2); /* ... */ }
  h3 { font-size: var(--text-h3); /* ... */ }
  h4 { font-size: var(--text-h4); /* ... */ }
  h5 { font-size: var(--text-h5); /* ... */ }
  h6 { font-size: var(--text-h6); /* ... */ }

  /* Responsive variants for mobile */
  @media (max-width: 768px) {
    h1 { font-size: 2rem; }
    /* ... smaller sizes ... */
  }
</style>
```

---

## 📐 **Your Heading Scale**

| Heading | Desktop Size   | Mobile Size     | Weight | Line Height |
| ------- | -------------- | --------------- | ------ | ----------- |
| **h1**  | 2.5rem (40px)  | 2rem (32px)     | 700    | 1.2         |
| **h2**  | 2rem (32px)    | 1.75rem (28px)  | 600    | 1.3         |
| **h3**  | 1.75rem (28px) | 1.5rem (24px)   | 600    | 1.4         |
| **h4**  | 1.5rem (24px)  | 1.25rem (20px)  | 600    | 1.45        |
| **h5**  | 1.25rem (20px) | 1.125rem (18px) | 600    | 1.5         |
| **h6**  | 1rem (16px)    | 1rem (16px)     | 600    | 1.55        |

---

## 🔧 **How It Works**

### 1. **Define Theme Variables** (global.css)

```css
@theme {
  --text-h1: 2.5rem;
  --text-h2: 2rem;
  --text-h3: 1.75rem;
  --text-h4: 1.5rem;
  --text-h5: 1.25rem;
  --text-h6: 1rem;
}
```

### 2. **Apply Global Styles** (Layout.astro)

```astro
<style is:global>
  h1 {
    font-size: var(--text-h1);
    /* ... other properties ... */
  }
</style>
```

### 3. **Use Throughout Your Site**

```astro
<!-- Automatically styled -->
<h1>Page Title</h1>
<h2>Section Heading</h2>
<h3>Subsection</h3>
```

### 4. **Override When Needed**

```astro
<!-- Component-specific override -->
<style>
  h1 {
    /* This scoped style has higher specificity */
    color: red;
  }
</style>
```

---

## 🎨 **Best Practices from Astro Docs**

### ✅ **DO:**

1. **Use `<style is:global>` in layout** for site-wide heading styles
2. **Define size variables in `@theme`** for consistency
3. **Keep global styles minimal** - only truly global typography
4. **Add responsive variants** for mobile devices
5. **Use CSS variables** for maintainability

### ❌ **DON'T:**

1. **Don't put heading styles in individual components** (duplication)
2. **Don't use inline styles** for headings (hard to maintain)
3. **Don't override global styles too often** (defeats the purpose)
4. **Don't forget mobile responsiveness**

---

## 📖 **Astro Documentation References**

From [Astro Styling Guide](https://docs.astro.build/en/guides/styling/):

> **Global Styles:** "While we recommend scoped styles for most components, you may eventually find a valid reason to write global, unscoped CSS. You can opt-out of automatic CSS scoping with the `<style is:global>` attribute."

> **Cascading Order:** "Astro CSS rules are evaluated in this order of appearance: `<link>` tags in the head (lowest precedence), imported styles, scoped styles (highest precedence)"

This means:

- Global styles have **lowest specificity**
- Component scoped styles can **always override** globals
- This is the **intended behavior** for maintainable CSS

---

## 🚀 **Usage Examples**

### Example 1: Blog Post Page

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout>
  <article>
    <h1>My Blog Post</h1>  <!-- Uses global h1 styles -->
    <h2>Introduction</h2>   <!-- Uses global h2 styles -->
    <h3>Section 1</h3>      <!-- Uses global h3 styles -->
  </article>
</Layout>
```

### Example 2: Component Override

```astro
<!-- Special heading for hero section -->
<h1 class="hero-title">Welcome!</h1>

<style>
  /* This overrides global h1 styles for this component */
  .hero-title {
    font-size: 4rem;
    background: linear-gradient(to right, blue, purple);
    -webkit-background-clip: text;
  }
</style>
```

### Example 3: Tailwind Utility Override

```astro
<!-- Override specific properties with Tailwind -->
<h1 class="text-red-600 mb-8">Error Page</h1>
<!-- Still uses global font-size, weight, line-height -->
<!-- But overrides color and margin-bottom -->
```

---

## 🎯 **Summary**

### ✅ **Implemented Solution:**

- **Method:** `<style is:global>` in Layout.astro
- **Variables:** Defined in `@theme` (global.css)
- **Coverage:** h1 through h6
- **Responsive:** Mobile breakpoint at 768px
- **Maintainable:** Single source of truth
- **Flexible:** Easy to override when needed

### ✅ **Benefits:**

1. **Consistency** - All headings look the same across the site
2. **Maintainability** - Change once, update everywhere
3. **Performance** - Minimal CSS duplication
4. **Scalability** - Easy to add new heading variations
5. **Accessibility** - Proper heading hierarchy

### ✅ **Follows Astro Best Practices:**

- Uses `<style is:global>` for truly global styles
- Leverages CSS variables for theming
- Respects cascade order
- Allows component-level overrides
- Mobile-responsive by default

---

## 📝 **Next Steps**

Your heading system is now complete! You can:

1. ✅ Use `<h1>` through `<h6>` anywhere in your site
2. ✅ They'll automatically use the global styles
3. ✅ Override with component styles when needed
4. ✅ Use Tailwind utilities for one-off customizations

No additional configuration needed! 🎉
