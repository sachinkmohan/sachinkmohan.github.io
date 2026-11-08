# Resource lists live in a Wiki of Markdown Topic files, not in blog posts

Lists of recommended Resources (e.g. "Best writing resources") were being published as dated blog posts, but they are living documents that keep growing. We moved them into a separate **Wiki** section (`/wiki`), where each **Topic** is one Markdown file in its own content collection and each Resource is just a list item (`[Title](url) – note`). Old blog URLs redirect to the matching Topic page.

## Considered Options

- **Keep them as blog posts**: rejected. Posts are dated and sorted by date, which suits writing, not a list you keep adding to.
- **One structured file per Resource, or a single JSON/YAML file** (like `projects.json`): rejected. Strict fields (title, url, note) would allow filtering and validation, but adding a Resource would take more effort, and the goal is to add one in seconds. It also rules out intro prose and sub-headings on a Topic page.

## Consequences

- Resources are not structured data. The build doesn't enforce the "Note is required" rule, so a Topic can't be filtered or counted per Resource without parsing the Markdown.
- A Resource belongs to exactly one Topic. Cross-listing would mean copying the same entry into another file.
