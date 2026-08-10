# Architecture

## Purpose

This site should remain easy to publish, review, and evolve for at least two to five years. The architecture separates educator-authored content from the website's presentation and keeps operational complexity low.

## Chosen direction

Use **Astro** with **Tailwind CSS** and **Markdown/MDX content collections**.

| Need | Architectural response |
| --- | --- |
| Linkable articles and resources | One statically generated route per content item |
| Content separate from code | Markdown/MDX files with schema-validated front matter |
| Search visibility | Per-page metadata, canonical URLs, sitemap, robots rules, structured data where appropriate |
| Accessible, responsive experience | Semantic Astro components and responsive CSS; test keyboard and screen-reader-critical flows |
| Downloads | Version-controlled public files referenced by content metadata |
| Few scripts | Astro islands only when interaction genuinely requires JavaScript |
| Dozens of entries | Collections, tags, filters, pagination or archives when needed |

## Why Astro

Astro produces static HTML by default, supports Markdown and MDX naturally, and allows selective interactive components without making the entire website a JavaScript application. This fits a primarily editorial professional site better than preserving an unspecified React prototype.

Tailwind CSS is proposed for consistent, maintainable styling through a small token-driven design system. It should be configured deliberately rather than used as an unstructured collection of one-off utility strings.

## Content model

The implementation should use Astro content collections (or their current supported equivalent) with schemas for at least:

- `articles` — essays, reflections, and professional writing
- `resources` — teaching materials, downloadable files, and usage notes
- `pages` — durable, editor-owned long-form pages when Markdown is preferable

Likely front matter shared across collections:

```yaml
title: ""
description: ""
slug: ""
status: draft # draft | published | archived
language: en # or an approved BCP 47 language tag
publishedAt: null
updatedAt: null
tags: []
featuredImage: null
```

Resources should add fields such as `audience`, `format`, `download`, `license`, and `instructions`. Final schemas must be decided when representative real content is available; do not fabricate values just to fill examples.

## Proposed repository layout

```text
src/
  components/       # reusable presentational and accessible UI pieces
  content/          # Markdown/MDX collections only
    articles/
    resources/
    pages/
  layouts/          # shared page shells
  pages/            # routes and route templates
  styles/           # global styles, tokens, Tailwind entry points
  content.config.*  # collection schemas
public/
  downloads/        # PDFs and educator-facing downloadable materials
  images/           # static images that do not need image processing
docs/               # governance and maintenance documentation
```

Use `src/assets/` for images imported and optimized by Astro, and `public/` for files that must retain a stable direct URL, particularly downloads.

## Routing and publishing

- Articles should resolve to `/articles/<slug>/`.
- Resources should resolve to `/resources/<slug>/` with a clearly labeled download link when applicable.
- Listing pages should be available at `/articles/` and `/resources/`; filtering or pagination can be introduced when volume warrants it.
- Keep trailing-slash and canonical URL behavior consistent from the first deployment.
- Published slugs are permanent URLs. If one changes, configure a redirect at the host and retain a documented migration note.
- Drafts must never be included in production routes, feeds, sitemaps, or navigation.

## Multilingual approach

English is the primary and initial public language. Start with language-aware content metadata, semantic `lang` attributes, and a content structure that can support translations. Do not introduce Chinese content or a full internationalization routing framework until there is a specific need, a reviewed translation, and an agreed URL strategy. This avoids prematurely committing to duplicated content or locale paths.

## Data, services, and deployment

No database is initially justified: content is editorial, modest in volume, versionable, and does not require accounts or per-user state. Add a database only for a defined need that static files cannot satisfy.

Deployment should be a static host with HTTPS, redirects, deployment previews, and Git-based continuous deployment. The provider is intentionally undecided; it must be chosen and recorded before launch.

## Boundaries

- Do not store secrets in the repository.
- Avoid contact-form backends until spam handling, privacy, and ownership are decided; a mailto link is an acceptable initial option.
- Avoid analytics until goals, consent/legal requirements, and data retention are agreed.
- Add client-side search, filters, or interactive widgets only after proving static navigation is insufficient.
- Publish the initial CV as an accessible HTML core page. A downloadable PDF is deferred until a specific application or other use requires one.
- Include a helpful 404 page and one reusable social-sharing preview image in the initial release. RSS is deferred until a stable publishing rhythm is established.

## Quality gates

Before deployment, run the production build and relevant checks. Review generated routes, internal links, metadata, mobile layout, keyboard navigation, focus states, contrast, image alt text, and download links. Use automated checks where practical, but do not substitute them for manual review.
