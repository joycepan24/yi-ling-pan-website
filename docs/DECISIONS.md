# Architecture Decision Record

This log records consequential choices so Codex and Claude can work from the same assumptions. New entries should include the context, decision, consequences, date, and approval status. Do not silently alter an accepted decision.

## ADR-001 — Static-first professional publishing stack

- **Date:** 2026-08-09
- **Status:** Accepted — approved by the site owner on 2026-08-10
- **Context:** The site needs durable professional pages, articles, teaching resources, downloadable materials, SEO, accessibility, and low maintenance. It does not currently require accounts, personalized state, or frequently changing transactional data.
- **Decision:** Use Astro as the site framework, Tailwind CSS for the design implementation, and Markdown/MDX content collections for editorial content. Generate pages statically by default and add client-side JavaScript only for necessary interactions.
- **Consequences:** Content is version-controlled, URL-addressable, reviewable, and inexpensive to host. The site can scale to dozens of entries without a database. A future interactive feature may need an isolated service or a new decision.
- **Alternatives considered:** Preserve an unknown React prototype (rejected: no prototype exists in this repository and a full client application is unnecessary); a database-backed CMS (deferred: no demonstrated need); hand-authored HTML pages (rejected: does not give a sustainable editorial workflow).

## ADR-002 — Git repository is the shared source of truth

- **Date:** 2026-08-09
- **Status:** Accepted
- **Context:** Codex and Claude will collaborate over multiple years, with a risk of divergent assumptions and out-of-repository edits.
- **Decision:** Keep implementation, content, documentation, and decisions in this Git repository. External tools may assist, but their outputs must be reviewed and committed here to become authoritative.
- **Consequences:** Changes are reviewable and recoverable. Collaborators must avoid undocumented parallel conventions.

## ADR-003 — No database in the initial release

- **Date:** 2026-08-09
- **Status:** Accepted — approved by the site owner on 2026-08-10
- **Context:** Planned content is editorial and resource-oriented. There is no stated requirement for logins, personal accounts, comments, bookings, or personalized data.
- **Decision:** Do not introduce a database or headless CMS initially. Store content in Markdown/MDX and assets in the repository/public deployment output.
- **Consequences:** Lower cost, privacy exposure, and operational complexity. A future database decision requires a specific user need, ownership model, backup plan, privacy assessment, and documented migration path.

## ADR-004 — Language-ready, not prematurely localized

- **Date:** 2026-08-09
- **Status:** Accepted — approved by the site owner on 2026-08-10
- **Context:** The site represents bilingual/multilingual education, but its initial professional audience includes English-speaking New York City schools and employers. Translation ownership and future URL structure are not yet defined.
- **Decision:** Publish in English as the primary and initial public language. Include language metadata and correct HTML language attributes from the beginning, but defer Chinese content, locale routing, and translation infrastructure until a specific need and a reviewed translation exist.
- **Consequences:** The site has a clear initial editorial language without committing to duplicate content or locale paths. Future Chinese or other language content must have a documented translation workflow and URL convention before publication.

## ADR-005 — Stable URLs and downloadable-resource care

- **Date:** 2026-08-09
- **Status:** Accepted
- **Context:** Articles and classroom resources may be shared, cited, bookmarked, or downloaded over several years.
- **Decision:** Use human-readable stable slugs; preserve redirects when published URLs change; use descriptive download names; and version resources when changes affect usage.
- **Consequences:** A small amount of release discipline protects existing links and users.

## ADR-006 — Initial CV presentation

- **Date:** 2026-08-10
- **Status:** Accepted — approved by the site owner
- **Context:** The site needs a professional CV that is easy for schools and employers to read, search, and keep current. A downloadable file has not been requested for the initial release.
- **Decision:** Publish the CV as an accessible HTML core page. Do not create a downloadable PDF in the initial release; create one later only when a job application or other specific use requires it.
- **Consequences:** The CV remains easy to update, link, and read on mobile devices. A later PDF should be derived from the reviewed HTML CV content so the two versions do not diverge.

## Initial-release scope notes

- Include a helpful 404 (not found) page and one reusable social-sharing preview image.
- Defer RSS until there is an established publication rhythm and enough public articles to make it useful.
- Choose and record the deployment provider before the public launch; it is not required to begin implementation.
