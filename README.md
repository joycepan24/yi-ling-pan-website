# Yi Ling Pan — Professional Website

Long-term professional website for Yi Ling Pan, focused on bilingual/multilingual education, teaching practice, reflection, research interests, and shareable teaching resources.

> This repository currently contains the project foundation only. It intentionally does not yet contain a website implementation or personal biography.

## Direction

The planned stack is Astro + Tailwind CSS + Markdown/MDX content collections. It is static-first, accessible, SEO-ready, and designed to keep writing and teaching materials separate from application code. A database is not part of the initial architecture.

Read the project documentation before making changes:

- [Architecture](docs/ARCHITECTURE.md)
- [Brand foundation](docs/BRAND.md)
- [Design system](docs/DESIGN-SYSTEM.md)
- [Content guide](docs/CONTENT-GUIDE.md)
- [Architecture decisions](docs/DECISIONS.md)
- [AI collaboration instructions](AGENTS.md)

## Planned site areas

- About and teaching philosophy
- Teaching experience and professional development
- Articles and classroom reflections
- Research interests
- Teaching resources and downloadable materials
- CV/resume and contact information

No personal facts or public claims should be added until Yi Ling Pan supplies or approves them.

## Content-owner workflow (target)

Once the implementation phase is complete, adding an article or teaching resource should mean creating a Markdown/MDX file, completing its front matter, and placing any downloadable file in the designated assets folder. The content guide will remain the non-technical reference for that workflow.

## Working conventions

- Use Git as the source of truth; do not rely on changes made only in external tools.
- Review `docs/DECISIONS.md` before changing the architecture.
- Prefer small, reviewable changes.
- Validate builds and accessibility-impacting work before handoff.

## Proposed implementation sequence

1. Approve and scaffold the documented Astro architecture.
2. Establish the content schema, sample placeholders, routes, metadata, and base layouts.
3. Implement the visual system and responsive templates.
4. Add Yi Ling Pan's approved content and teaching materials.
5. Perform accessibility, SEO, performance, and cross-device review before launch.
