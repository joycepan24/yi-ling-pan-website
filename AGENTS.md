# AI Collaboration Guide

This repository is the single source of truth for Yi Ling Pan's long-term professional website. Codex and Claude must follow the same documentation, decisions, and review expectations.

## Project intent

Build a durable, accessible, bilingual/multilingual educator website that can grow over years without requiring the site owner to edit application code. Do not treat it as a temporary student portfolio.

## Source of truth and scope

- Git history and the files in this repository are authoritative.
- Read `README.md` and relevant files under `docs/` before proposing or making a change.
- Inspect the existing routes, components, styles, and content that the task touches before changing them. Treat established compositions and bespoke layouts as intentional unless the owner asks to change them.
- Do not invent personal facts: credentials, roles, employers, dates, publications, awards, research, contact details, or claims of impact.
- Keep repeatable editorial content in content files and presentation and behavior in application code. Existing bespoke pages may contain approved page-specific content; do not relocate it solely to impose a generic abstraction.
- Do not add a database, CMS, analytics provider, hosting dependency, or major framework without a documented decision in `docs/DECISIONS.md` and explicit user approval.

## Agent roles

Codex is the primary implementation agent. Claude is primarily an architecture, UX/UI, content, accessibility, and SEO reviewer. Either agent may identify issues, but implementation changes must preserve the documented architecture.

## Required workflow

1. Inspect the relevant code, content, documentation, and working-tree changes.
2. Explain the proposed approach before significant changes.
3. Check `docs/DECISIONS.md`; document consequential new architectural decisions before or with the change.
4. Make the smallest focused change that meets the request.
5. Validate proportionately (build, tests, linting, link checks, visual/accessibility checks when available).
6. Report changed files, validation performed, limitations, and follow-up decisions.

For implementation changes, run `pnpm check` before handoff unless the task cannot safely run it. It is the repository's canonical objective validation command.

## Content rules

- When creating or editing website articles, follow `docs/WRITING-STYLE.md` as the source of truth for the author's writing voice.
- Articles use Markdown with validated front matter. Current resource pages are bespoke Astro pages; do not introduce a generic resource schema or migrate them without a documented decision and explicit approval.
- Use stable, human-readable slugs. Do not change a published slug without preserving a redirect strategy.
- Put downloadable files in the designated public asset location; use descriptive, stable filenames and add meaningful metadata in the corresponding content entry.
- Draft content must be excluded from production publication by an explicit status/date rule.
- Use plain language, meaningful headings, descriptive link text, and alt text that conveys the image's purpose.
- Before adding or changing media, follow the canonical intake and privacy policy in `docs/CONTENT-GUIDE.md`.

## Visual workflow

Before proposing or making visual or layout changes, read `docs/VISUAL-DIRECTION.md` and inspect the relevant existing layouts, components, and styles. Visual changes must follow the established design decisions, and a new visual system must not be introduced without discussion and explicit approval. Content remains the primary focus.

Do not replace approved page-specific compositions with generic abstractions or refactor unrelated layouts while completing a focused task. Preserve the circular personal-portrait treatment and the editorial classroom-photography treatment where they are already part of an approved composition.

Preserve:

- A calm editorial feeling
- Typography-first design
- Generous whitespace
- Restrained visual elements
- The organic shape language when it is appropriate to the composition

Avoid:

- Generic blog layouts
- Unnecessary cards
- Decorative images without meaning
- Excessive UI elements
- Startup- or marketing-style patterns

## Implementation principles

- Prefer static generation and standard HTML over client-side JavaScript.
- Design mobile-first; preserve keyboard access, visible focus, semantic landmarks, color contrast, and reduced-motion preferences.
- Every public page needs accurate title and description. Add canonical URLs and appropriate social metadata with the approved deployment/SEO work.
- Do not add dependencies for a one-line problem. Prefer the stack's built-in features.
- Keep generated files, credentials, machine-specific files, and build output out of version control.

## Review checklist

Before completing a substantial change, check:

- Content and claims are user-supplied or explicitly marked as placeholders.
- New routes are linkable and have metadata.
- Heading order, landmarks, keyboard flow, images, and downloads are accessible.
- Layout works at narrow and wide viewports.
- No avoidable JavaScript or dependency was introduced.
- Documentation and decisions still match the implementation.
