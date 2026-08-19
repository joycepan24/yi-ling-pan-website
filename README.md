# Yi Ling Pan — Professional Website

Long-term professional website for Yi Ling Pan, focused on bilingual/multilingual education, teaching practice, reflection, research interests, and shareable teaching resources.

The current static site includes Home, About, Writing, individual article routes, a Resources index, and two bespoke resource pages. Approved biography, article, resource, and classroom-photography content now lives in the repository alongside the implementation.

## Direction

The site uses Astro + Tailwind CSS. Articles are Markdown content entries with validated front matter; the current resource pages are bespoke Astro pages with their own layouts and assets. The site is static-first and designed to keep editorial content separate from presentation code. A database is not part of the current architecture.

Read the project documentation before making changes:

- [Architecture](docs/ARCHITECTURE.md)
- [Brand foundation](docs/BRAND.md)
- [Design system](docs/DESIGN-SYSTEM.md)
- [Visual direction](docs/VISUAL-DIRECTION.md)
- [Content guide](docs/CONTENT-GUIDE.md)
- [Writing style](docs/WRITING-STYLE.md)
- [Architecture decisions](docs/DECISIONS.md)
- [AI collaboration instructions](AGENTS.md)

## Current site areas

- Home and About
- Writing archive and individual article pages
- Teaching resources and individual resource pages
- Classroom and professional photography where it supports the content

CV, contact, multilingual routing, downloadable materials, and deployment are not currently implemented. Do not add personal facts or public claims without Yi Ling Pan's approval.

## Local development

```bash
pnpm install
pnpm dev
```

For a production check and local production preview:

```bash
pnpm build
pnpm preview
```

## Content workflow

Articles are authored as Markdown entries in `src/content/articles/` and validated by `src/content.config.ts`. The current resources index and resource pages are bespoke Astro pages, not a generic resource collection. Do not create a resource schema or migrate those pages until a repeated real-content need and an approved design are available.

## Working conventions

- Use Git as the source of truth; do not rely on changes made only in external tools.
- Review `docs/DECISIONS.md` before changing the architecture.
- Prefer small, reviewable changes.
- Validate builds and accessibility-impacting work before handoff.
- Before changing the site, read `AGENTS.md`, the relevant documentation, and the existing implementation. The repository may contain uncommitted work; preserve unrelated changes.
