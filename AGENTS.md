# AI Collaboration Guide

This repository is the single source of truth for Yi Ling Pan's long-term professional website. Codex and Claude must follow the same documentation, decisions, and review expectations.

## Project intent

Build a durable, accessible, bilingual/multilingual educator website that can grow over years without requiring the site owner to edit application code. Do not treat it as a temporary student portfolio.

## Source of truth and scope

- Git history and the files in this repository are authoritative.
- Read `README.md` and relevant files under `docs/` before proposing or making a change.
- Do not invent personal facts: credentials, roles, employers, dates, publications, awards, research, contact details, or claims of impact.
- Keep personal content in content files; keep presentation and behavior in application code.
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

## Content rules

- Article and resource pages must be written in Markdown or MDX with validated front matter.
- Use stable, human-readable slugs. Do not change a published slug without preserving a redirect strategy.
- Put downloadable files in the designated public asset location; use descriptive, stable filenames and add meaningful metadata in the corresponding content entry.
- Draft content must be excluded from production publication by an explicit status/date rule.
- Use plain language, meaningful headings, descriptive link text, and alt text that conveys the image's purpose.

## Implementation principles

- Prefer static generation and standard HTML over client-side JavaScript.
- Design mobile-first; preserve keyboard access, visible focus, semantic landmarks, color contrast, and reduced-motion preferences.
- Every public page needs accurate title, description, canonical URL, and appropriate social metadata.
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
