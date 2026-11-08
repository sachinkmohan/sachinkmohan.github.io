# 0001: Resource lists live in a Wiki of Markdown Topic files, not in blog posts

- **Status:** accepted
- **Date:** 2026-11-08

## Context

Lists of recommended Resources (e.g. "Best writing resources") were being
published as dated blog posts in `src/data/blog/`. But they are living
documents that keep growing, and blog posts are dated and sorted by date.
The site already has three content collections (`blog`, `til`, `project`,
see `src/content.config.ts`), and the term definitions are in `CONTEXT.md`.

## Decision

We will keep Resource lists in a separate **Wiki** section (`/wiki`), not in
blog posts. Each **Topic** is one Markdown file in `src/data/wiki/`, and each
Resource is a list item: `[Title](url) – note`. A Topic page may include intro
prose and sub-headings. Old blog URLs redirect to the matching Topic page
(`redirects` in `astro.config.mjs`).

We will not store Resources as structured data, whether that's one file per
Resource or a single JSON/YAML file like `projects.json`. Adding a Resource
should take seconds.

Revisit if Resources need filtering, tagging, cross-listing in several
Topics, or validation at build time.

## Consequences

The next agent adds a Resource as a Markdown list item in the right Topic
file, and creates a new file in `src/data/wiki/` for a new Topic. It does not
write a blog post or add a data schema for Resources.

What stays simple: adding Resources, and writing prose around them.

What gets harder: the build doesn't enforce the "Note is required" rule. A
Resource belongs to exactly one Topic, so cross-listing means duplicating the
entry. Resources can't be filtered or counted without parsing the Markdown.
