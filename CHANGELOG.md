# Changelog

## [2025-10-24] - Implemented Tag-Based Blog Post Filtering System

### Added

#### **New Utility Module: `src/utils/tags.ts`**
- **`slugifyTag(tag: string)`** - Converts tag names to URL-safe slugs
  - Example: "Vue 3" → "vue-3", "Code Optimization" → "code-optimization"
  - Handles lowercase conversion, space-to-hyphen replacement, and special character removal
  
- **`unslugifyTag(slug: string, allTags: string[])`** - Converts slugs back to original tag names
  - Matches against existing tags to preserve original casing
  - Fallback: converts hyphens back to spaces
  
- **`getAllTags()`** - Retrieves all unique tags from blog collection
  - Returns sorted array of tag names
  
- **`getPostsByTag(tag: string)`** - Filters posts by tag name
  - Case-insensitive matching using slug comparison
  - Returns posts sorted by date (newest first)
  
- **`getTagCounts()`** - Counts posts per tag
  - Returns object with tag names as keys and counts as values
  
- **`getTagsByPopularity()`** - Gets tags sorted by post count
  - Returns array of [tag, count] tuples sorted by popularity

#### **New Component: `src/components/TagBadge.astro`**
- **Reusable clickable tag component** with consistent styling
  - Accepts `tag` (string), `count` (optional number), `showCount` (optional boolean) props
  - Links to `/blog/tag/{tag-slug}` for filtering
  - Hover effects with color change, elevation, and smooth transitions
  - Optional post count display: "Vue 3 (5)"
  - Uses CSS variables for theming consistency

#### **New Page: `src/pages/blog/tag/[tag].astro`**
- **Dynamic tag filtering page** with server-side static generation
  - URL structure: `/blog/tag/vue-3`, `/blog/tag/code-optimization`
  - Shows all posts with selected tag
  - Includes breadcrumb navigation: Home → Blog → Tags → [Tag Name]
  - Displays post count for the filtered tag
  - Empty state handling when no posts found
  - Navigation links to "All Posts" and "View All Tags"
  - Fully responsive design with mobile optimizations

#### **New Page: `src/pages/blog/tags.astro`**
- **Tag overview/index page** showing all available tags
  - URL: `/blog/tags`
  - Displays all tags sorted by popularity (most posts first)
  - Shows post count for each tag: "Vue 3 (5)"
  - Visual tag cloud with gradient background
  - Summary statistics: total tags and total posts
  - Breadcrumb navigation
  - Fade-in animations for better UX
  - Fully responsive with mobile optimizations

### Changed

#### **Updated: `src/components/BlogCard.astro`**
- **Replaced static tag badges with clickable `TagBadge` components**
  - Tags are now interactive links instead of plain text
  - Removed inline `.tag-badge` styles (moved to TagBadge component)
  - Imported and integrated TagBadge component
  - Maintains existing visual appearance while adding click functionality

#### **Updated: `src/pages/blog/[slug].astro`**
- **Added tag section at bottom of individual blog posts**
  - Shows "Tagged with:" heading with all post tags
  - Tags are clickable using TagBadge component
  - Added post navigation section with links to:
    - "Back to all posts" → `/blog`
    - "View all tags" → `/blog/tags`
  - Styled with proper spacing, borders, and responsive layout
  - Mobile-optimized navigation (stacks vertically on small screens)

### Technical Implementation

#### **Server-Side Static Generation (SSG)**
- **Why chosen:** Better SEO, faster performance, shareable URLs
- **How it works:** 
  - Astro generates separate HTML pages at build time for each tag
  - Uses `getStaticPaths()` to create routes dynamically
  - No JavaScript needed for filtering (works without JS)
  - Each tag page can be indexed by search engines

#### **URL Structure**
- **Tag pages:** `/blog/tag/{lowercase-slug}`
  - "Vue 3" → `/blog/tag/vue-3`
  - "Code Optimization" → `/blog/tag/code-optimization`
- **All tags:** `/blog/tags`
- **Individual posts:** `/blog/{post-slug}` (existing)

#### **Filtering Logic**
- Uses `getCollection()` with filter callback for tag matching
- Case-insensitive comparison via slug normalization
- Sorted by date (newest first) for consistency

### Features

✅ **Clickable Tags** - All tags throughout the site are now interactive
✅ **Tag-Specific Pages** - Dedicated pages for each tag showing filtered posts
✅ **Tag Overview** - Central page listing all tags with post counts
✅ **Related Tags** - Blog posts show their tags at the bottom
✅ **Post Counts** - Tag badges show number of posts: "Vue 3 (5)"
✅ **Breadcrumb Navigation** - Clear navigation path on all tag pages
✅ **SEO Optimized** - Each tag page is indexable by search engines
✅ **Shareable URLs** - Direct links to filtered tag views
✅ **Responsive Design** - Mobile-optimized layouts throughout
✅ **Empty States** - Graceful handling when no posts found
✅ **Visual Feedback** - Hover effects and transitions for better UX

### User Experience Improvements

1. **Discovery** - Users can explore content by topics of interest
2. **Navigation** - Easy to find related posts on similar topics
3. **Context** - Clear understanding of post categorization
4. **Accessibility** - Works without JavaScript, keyboard navigable
5. **Performance** - Fast page loads with pre-rendered static pages
6. **Mobile-First** - Optimized layouts for all screen sizes

### SEO Benefits

✅ **Indexable Tag Pages** - Search engines can discover content by topic
✅ **Semantic URLs** - Clean, readable URLs for better rankings
✅ **Internal Linking** - Improved site structure and link equity
✅ **Topic Authority** - Grouped content signals expertise in areas
✅ **Better Discoverability** - Users can find specific topics via search

### File Structure

```
src/
├── utils/
│   └── tags.ts                    (NEW - utility functions)
├── components/
│   ├── BlogCard.astro             (UPDATED - clickable tags)
│   └── TagBadge.astro             (NEW - reusable tag component)
└── pages/
    └── blog/
        ├── [slug].astro           (UPDATED - tags at bottom)
        ├── tags.astro             (NEW - all tags overview)
        └── tag/
            └── [tag].astro        (NEW - filtered posts by tag)
```

### Usage Examples

**Clicking a tag:**
```
BlogCard → Click "Vue 3" → /blog/tag/vue-3 → See all Vue 3 posts
```

**Browsing all tags:**
```
Visit /blog/tags → See all tags with counts → Click any tag → Filtered posts
```

**Reading a post:**
```
Individual blog post → Scroll to bottom → See tags → Click to explore related posts
```

### Performance Impact

- **Build time:** Minimal increase (generates one page per unique tag)
- **Page load:** Faster than client-side filtering (pre-rendered HTML)
- **SEO:** Significantly improved (indexable tag pages)
- **Accessibility:** Perfect (works without JavaScript)

### Browser Compatibility

✅ All modern browsers (Chrome, Firefox, Safari, Edge)
✅ Works with JavaScript disabled
✅ Fully accessible via keyboard navigation
✅ Screen reader compatible

### Related Files

- `src/utils/tags.ts` - Tag utility functions
- `src/components/TagBadge.astro` - Clickable tag component
- `src/components/BlogCard.astro` - Updated with clickable tags
- `src/pages/blog/tag/[tag].astro` - Tag filtering page
- `src/pages/blog/tags.astro` - All tags overview
- `src/pages/blog/[slug].astro` - Updated with tag section

---

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
<h1>Page Title</h1>
<!-- Automatically styled -->
<h2>Section Heading</h2>
<!-- Automatically styled -->
<h3>Subsection</h3>
<!-- Automatically styled -->

<!-- Override when needed -->
<h1 class="text-red-600">Special Title</h1>
<!-- Or with component scoped styles -->
```

### Related Files

- `src/layouts/Layout.astro` - Global heading implementation
- `src/styles/global.css` - Theme variable definitions
- `GLOBAL_HEADINGS_GUIDE.md` - Complete documentation and best practices
