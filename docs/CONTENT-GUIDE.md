# Content Guide

## Purpose

This guide is for the site owner and collaborators. It explains how content should be prepared and maintained without requiring knowledge of the application implementation.

## Content types

| Type | Use it for | Primary outcome |
| --- | --- | --- |
| Article | Professional writing, teaching philosophy, research interests, or reflections | A readable, permanent public page |
| Resource | Lesson materials, guides, templates, and downloadable teaching aids | A contextual page plus downloadable files when relevant |
| Core page | Durable profile information such as teaching experience, CV, or contact | An updated navigational page |

## Before publishing

Keep the publishing routine small enough to sustain. The minimum checklist is:

- Write a useful title and one- to two-sentence description in plain language.
- For an article, set the publication status and date when publishing.
- Remove student names, identifiable work, and classroom details unless permission and privacy requirements are clear.
- Publish in English unless a reviewed translation and a specific need for another language have been agreed.

Always ensure factual statements, dates, organization names, and credentials are accurate. Check copyright, licensing, accessibility, and versioning when they apply to the content; they are not required fields for every post.

## Article checklist

Each article should include:

- A clear title and one- to two-sentence description
- Publication status and date when published
- A stable slug (the final part of its web address)
- Readable paragraphs and meaningful headings where needed

Add tags, image alt text, sources, acknowledgements, or a reviewed translation when they are relevant.

## Resource checklist

Each current resource page should make the following information clear in its approved page content; these are not yet generic schema fields:

- Intended audience, subject/level when relevant, and learning purpose
- What is included and how to use it
- File type and a descriptive download filename

Add license or reuse terms, accessibility notes, and a version/date when they are useful or necessary for that resource. Use a new, clearly labeled version when a changed download would affect classroom use.

Do not replace a published download at the same URL when a version difference matters to users. Publish a new version with a clear label, and keep or redirect the old file intentionally.

## Current publishing workflow

Articles are authored as Markdown files with validated front matter. The current resources index and resource pages are bespoke Astro pages, so do not assume that a new resource can be published by adding a Markdown file. A reusable resource-content system is a future decision, to be made when real resources show a repeated need.

## Markdown authoring for articles

Use ordinary paragraphs, `##` headings for main sections, bulleted lists for related items, and meaningful link text. Avoid starting headings with “Introduction” unless it conveys something useful. Do not use headings merely to make text large.

MDX should be used sparingly, only when an approved reusable component genuinely improves understanding. If an article can be written in Markdown, prefer Markdown.

## Images and files

- Use owned, licensed, or properly attributed assets.
- Name files clearly: `classroom-discussion-prompts-v1.pdf`, not `final-final2.pdf`.
- Avoid scanned PDFs when a selectable-text version is possible.
- Provide alt text based on the purpose of the image in the surrounding content.
- Compress large files while preserving classroom print quality.

## Media intake and review

This is the canonical policy for adding or changing website media.

- Keep the web-use source that the site needs. Do not add multiple unnecessary raw or exported versions of the same image; large editable originals not needed by the site may remain outside Git. Do not delete existing repository originals automatically.
- Use the existing purpose-based `src/assets/` structure for new files: `classroom/` for classroom photography, `images/` for portraits and other personal imagery, `resources/<resource-slug>/` for resource media, and `articles/<article-slug>/` when an article needs its own media. Do not reorganize existing assets without a specific task.
- Use descriptive, stable filenames for new imports, rather than camera names such as `IMG_0352.jpg`. Keep names short enough to scan while making the image's purpose clear.
- Prepare a reasonable web-ready source while keeping enough resolution for Astro's responsive image processing. Avoid duplicate web exports when Astro can generate the needed variants.
- Before publishing classroom photography or student-related media, explicitly review whether people, names, student work, screens, boards, badges, worksheets, or other personal information are identifiable. Decide whether cropping, masking, blur, another privacy treatment, or non-publication is appropriate. Repository presence does not prove consent or permission.
- Preserve authentic documented experience. Practical crop, framing, exposure, color, background-cleanup, and privacy edits are allowed; do not fabricate classroom events or materially alter people.
- Reuse existing approved assets when appropriate. Coding agents must not invent privacy or permission status, replace authentic photography with generated substitutes, bulk rename/compress/reorganize media, or delete apparently unused large files without a specific owner-approved task. Preserve approved image compositions unless asked to change them.

## Status and maintenance

- `draft`: private and excluded from the production site
- `published`: public and currently active; included in normal article listings
- `archived`: public at its existing URL but excluded from normal article listings; it has no archive notice or special visual treatment

`archived` does not mean deleted or withdrawn. Removing an article for privacy, factual, or other reasons is a separate decision and should not use the `archived` status.

Review core profile pages at least annually. Review resource links and downloads periodically. Correct errors transparently when the correction materially affects the content.

## Privacy and professional care

Never publish identifiable student information, private school material, assessment data, or classroom photography without appropriate permission. When in doubt, generalize, anonymize, or keep the material private.
