# Changelog

## [2025-10-22] - Implemented Global Heading Styles (h1-h6)

### Added
- **Global heading styles** for h1 through h6 in `Layout.astro`
  - h1: 2.5rem (40px) → 2rem (32px) on mobile, 700 weight
  - h2: 2rem (32px) → 1.75rem (28px) on mobile, 600 weight
  - h3: 1.75rem (28px) → 1.5rem (24px) on mobile, 600 weight
  - h4: 1.5rem (24px) → 1.25rem (20px) on mobile, 600 weight
  - h5: 1.25rem (20px) → 1.125rem (18px) on mobile, 600 weight
  - h6: 1rem (16px) → 1rem (16px) on mobile, 600 weight

- **Responsive heading sizes** with mobile breakpoint at 768px
  - All headings scale down appropriately for mobile devices
  - Maintains proper visual hierarchy on all screen sizes

- **GLOBAL_HEADINGS_GUIDE.md** - Comprehensive documentation including:
  - 3 recommended approaches for global heading styles in Astro
  - Comparison table of all approaches
  - Best practices from Astro documentation
  - Usage examples and override patterns
  - Complete heading scale reference

### Changed
- **Layout.astro**: Added `<style is:global>` block with complete heading definitions
  - Uses Tailwind 4 theme variables (`var(--text-h1)` through `var(--text-h6)`)
  - Uses design system color (`var(--dark)`) for consistency
  - Includes proper line-heights, margins, and font-weights
  - All headings are mobile-responsive

### Technical Details

**Approach Chosen:**
- **Method:** `<style is:global>` in Layout component
- **Why:** Astro's officially recommended approach for global styles
- **Documentation Reference:** https://docs.astro.build/en/guides/styling/#global-styles

**Implementation Details:**
1. Theme variables defined in `global.css` using `@theme` directive
2. Global styles applied in `Layout.astro` using `<style is:global>`
3. All heading sizes use CSS variables for maintainability
4. Responsive variants added with media query

**Cascade Order (from Astro docs):**
1. `<link>` tags in head (lowest precedence)
2. Imported styles
3. **Global styles** (`<style is:global>`) ← Our heading styles
4. Scoped component styles (highest precedence)

This means component-level styles can always override global headings when needed.

### Best Practices Followed

✅ **Astro Recommendations:**
- Used `<style is:global>` for truly global typography
- Kept global styles in main Layout component
- Leveraged CSS variables from `@theme`
- Maintained proper cascade order
- Allowed component overrides

✅ **Typography Best Practices:**
- Clear visual hierarchy (h1 largest → h6 smallest)
- Consistent line-heights for readability
- Appropriate font-weights for distinction
- Mobile-responsive scaling
- Proper spacing with margin-bottom

✅ **Maintainability:**
- Single source of truth in Layout.astro
- Uses variables for easy customization
- Well-documented in GLOBAL_HEADINGS_GUIDE.md
- Easy to override when needed

### Impact

✅ **Site-wide consistency** - All headings follow the same design system
✅ **Better maintainability** - Change once in Layout, update everywhere
✅ **Mobile-responsive** - Automatic scaling on smaller screens
✅ **Flexible** - Component styles can override when needed
✅ **Scalable** - Easy to extend or modify heading scale
✅ **Accessible** - Proper heading hierarchy for screen readers

### Usage

```astro
<!-- Anywhere in your site -->
<h1>Page Title</h1>        <!-- Automatically styled -->
<h2>Section Heading</h2>   <!-- Automatically styled -->
<h3>Subsection</h3>        <!-- Automatically styled -->

<!-- Override when needed -->
<h1 class="text-red-600">Special Title</h1>
<!-- Or with component scoped styles -->
```

### Related Files
- `src/layouts/Layout.astro` - Global heading implementation
- `src/styles/global.css` - Theme variable definitions
- `GLOBAL_HEADINGS_GUIDE.md` - Complete documentation and best practices
