# Architecture

## Purpose

This site should remain easy to publish, review, and evolve for at least two to five years. The architecture separates educator-authored content from the website's presentation and keeps operational complexity low.

## Chosen direction

Use **Astro** with **Tailwind CSS**. Articles use a Markdown content collection; current resource pages use bespoke Astro routes and a hand-curated resources index.

| Need | Architectural response |
| --- | --- |
| Linkable articles and resources | One statically generated route per item |
| Article content separate from code | Markdown files with schema-validated front matter |
| Current resource presentation | Bespoke Astro pages with page-specific layouts and imported assets |
| Search visibility | Current per-page titles and descriptions; canonical URLs, sitemap, robots rules, and structured data when deployment/SEO work is approved |
| Accessible, responsive experience | Semantic Astro components and responsive CSS; test keyboard and screen-reader-critical flows |
| Downloads | No current download workflow; future stable public files documented with their resource content |
| Few scripts | Astro islands only when interaction genuinely requires JavaScript |
| Dozens of entries | Expand the article collection and add filtering, pagination, or archives only when needed |

## Why Astro

Astro produces static HTML by default, supports Markdown and MDX naturally, and allows selective interactive components without making the entire website a JavaScript application. This fits a primarily editorial professional site better than preserving an unspecified React prototype.

Tailwind CSS supports the implemented token-driven design system. Keep its use deliberate rather than turning it into an unstructured collection of one-off utility strings.

## Content model

### Articles (current)

The `articles` collection contains essays, reflections, and professional writing in Markdown. Its schema validates the title, description, status, explicit stable slug, language, and relevant dates. It is the only current Astro content collection.

Current article front matter:

```yaml
title: ""
description: ""
slug: ""
status: draft # draft | published | archived
language: en # or an approved BCP 47 language tag
publishedAt: null
updatedAt: null
tags: [] # optional
```

### Resources (current)

The resources index is a curated Astro page, and each resource has its own static Astro route and page-specific layout. This preserves the existing teaching-material presentations without forcing unrelated resources into a premature shared schema.

There is no `resources` content collection, generic resource front matter, or empty resource-content directory today. Consider a simple Markdown system only when repeated real resource content establishes the metadata and layout it needs; record that decision before migrating existing pages.

## Current repository layout

```text
src/
  assets/           # imported, optimized images and resource visuals
  components/       # reusable presentational and accessible UI pieces
  content/
    articles/       # current Markdown article entries
  content.config.ts # current article collection schema
  layouts/          # shared page shells
  pages/
    resources/      # current bespoke resource routes
  styles/           # global styles and visual tokens
scripts/            # focused build-time validation
docs/               # governance and maintenance documentation
```

Use `src/assets/` for images imported and optimized by Astro. If stable downloadable files are added in the future, place them in an intentional public-asset location with stable filenames and document the workflow at that time.

## Routing and publishing

- Articles should resolve to `/articles/<slug>/`.
- Current resource routes resolve to `/resources/<slug>/`; a download link is included only when the particular resource has a download.
- Listing pages should be available at `/articles/` and `/resources/`; filtering or pagination can be introduced when volume warrants it.
- Keep trailing-slash URL behavior consistent. Canonical URL behavior will be added with the deployment/SEO work.
- Published slugs are permanent URLs. If one changes, configure a redirect at the host and retain a documented migration note.
- Published articles appear in production routes and normal article listings. Archived articles retain their production routes but are excluded from normal article listings. Drafts must never be included in production routes, feeds, sitemaps, or navigation.

## Multilingual approach

English is the primary and initial public language. Start with language-aware content metadata, semantic `lang` attributes, and a content structure that can support translations. Do not introduce Chinese content or a full internationalization routing framework until there is a specific need, a reviewed translation, and an agreed URL strategy. This avoids prematurely committing to duplicated content or locale paths.

## Data, services, and deployment

No database is initially justified: content is editorial, modest in volume, versionable, and does not require accounts or per-user state. Add a database only for a defined need that static files cannot satisfy.

Deployment should be a static host with HTTPS, redirects, deployment previews, and Git-based continuous deployment. The provider is intentionally undecided; it must be chosen and recorded before launch.

## Boundaries

- Do not store secrets in the repository.
- Avoid contact-form backends until spam handling, privacy, and ownership are decided.
- Avoid analytics until goals, consent/legal requirements, and data retention are agreed.
- Add client-side search, filters, or interactive widgets only after proving static navigation is insufficient.
- A custom 404 page is implemented at `src/pages/404.astro` and generates `/404.html`. No CV route, contact method, downloadable-material workflow, canonical metadata, or social-sharing preview image is currently implemented. The CV and social-sharing preview remain deferred for the present public-site scope; the latter depends on final domain and share-metadata decisions. RSS remains deferred until a stable publishing rhythm is established.

## Quality gates

Before deployment, run the production build and relevant checks. Review generated routes, internal links, metadata, mobile layout, keyboard navigation, focus states, contrast, image alt text, and download links. Use automated checks where practical, but do not substitute them for manual review.
