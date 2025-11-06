import { getCollection, type CollectionEntry } from "astro:content";

/**
 * Convert a tag name to a URL-safe slug
 * Example: "Vue 3" -> "vue-3"
 * Example: "Code Optimization" -> "code-optimization"
 */
export function slugifyTag(tag: string): string {
  return tag
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[^\w-]/g, ""); // Remove special characters except hyphens
}

/**
 * Convert a slug back to a tag name by matching against existing tags
 * Example: "vue-3" -> "Vue 3"
 */
export function unslugifyTag(slug: string, allTags: string[]): string {
  return (
    allTags.find((tag) => slugifyTag(tag) === slug) || 
    slug.replace(/-/g, " ") // Fallback: replace hyphens with spaces
  );
}

/**
 * Get all unique tags from blog posts
 * Returns sorted array of tag names
 */
export async function getAllTags(): Promise<string[]> {
  const posts = await getCollection("blog");
  const tagSet = new Set<string>();

  posts.forEach((post) => {
    post.data.tags.forEach((tag) => tagSet.add(tag));
  });

  return Array.from(tagSet).sort();
}

/**
 * Get all posts that have a specific tag
 * Returns posts sorted by date (newest first)
 */
export async function getPostsByTag(
  tag: string,
): Promise<CollectionEntry<"blog">[]> {
  const posts = await getCollection("blog", ({ data }) => {
    return data.tags.some((postTag) => slugifyTag(postTag) === slugifyTag(tag));
  });

  return posts.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  );
}

/**
 * Get a map of tags to their post counts
 * Returns object with tag names as keys and counts as values
 */
export async function getTagCounts(): Promise<Record<string, number>> {
  const posts = await getCollection("blog");
  const tagCounts: Record<string, number> = {};

  posts.forEach((post) => {
    post.data.tags.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });

  return tagCounts;
}

/**
 * Get tags sorted by popularity (post count)
 * Returns array of [tag, count] tuples
 */
export async function getTagsByPopularity(): Promise<[string, number][]> {
  const tagCounts = await getTagCounts();
  return Object.entries(tagCounts).sort((a, b) => b[1] - a[1]);
}
