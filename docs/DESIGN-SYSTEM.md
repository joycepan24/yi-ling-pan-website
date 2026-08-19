# Design System

## Goal

Provide a small, accessible design language that keeps future pages coherent without forcing the content owner to make design decisions for every article or resource.

## System principles

- Content leads; decoration supports comprehension.
- Use semantic HTML before ARIA.
- Build mobile-first and test at narrow, medium, and wide viewports.
- Favor durable components over page-specific styling.
- Keep interaction subtle and usable with keyboard, touch, and reduced motion.

## Tokens

The implementation should define semantic tokens, not color names scattered across components:

```text
color: surface, surface-muted, text, text-muted, border, accent, accent-strong, focus
type: font-body, font-display, text sizes, line heights, weights
space: a small consistent spacing scale
layout: reading measure, content width, page gutter, section spacing
shape: radius, border width, shadow levels
motion: duration and easing, respecting prefers-reduced-motion
```

The current implementation uses an approved warm-neutral surface, near-black text, muted lavender/butter/sage accents, an editorial serif display face, and a readable sans-serif body face. See [Visual Direction](VISUAL-DIRECTION.md) for its use. Any refinement must meet WCAG 2.2 AA contrast expectations for normal text, controls, and focus indicators.

## Core components

Build and document only components with repeat use:

- Site header, navigation, and footer
- Skip link and accessible mobile navigation
- Page heading and prose layout
- Article/resource card and metadata row
- Tag list
- Callout or note
- Download link/card that states file type and size when known
- Pagination or archive navigation, if content volume requires it

Components must define states (default, hover, focus-visible, active, disabled when applicable) and work without JavaScript unless the interaction inherently needs it.

## Typography and reading

- Use one body family and, at most, one complementary display family.
- Keep long-form text at a comfortable line length and line height.
- Do not convey meaning through color alone.
- Preserve heading hierarchy: one page-level `h1`, followed by logical sections.
- Style inline links visibly in more than one way than color alone.

## Accessibility baseline

- Semantic landmarks: header, nav, main, footer.
- A visible-on-focus skip link.
- Keyboard-operable navigation, menus, links, and downloads.
- Clearly visible focus indicators with sufficient contrast.
- Alt text for informative images; empty alt text for purely decorative images.
- Captions/transcripts for media when media is introduced.
- No automatic motion that cannot be paused; honor reduced-motion preferences.

## Responsive behavior

Start with one-column reading layouts. Add columns only where they preserve hierarchy and readability. Navigation may collapse at a tested breakpoint, but content order must remain logical. Avoid fixed heights for editorial content and accommodate enlarged text and long translated strings.

## Design review

Before accepting a component, review it at representative viewport widths and with keyboard navigation. Check contrast, focus, zoom/reflow, heading structure, and whether content still reads clearly when images fail to load.
