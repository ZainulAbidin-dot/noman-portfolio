# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install      # install dependencies
npm run dev      # start Vite dev server (http://localhost:5173)
npm run build    # production build
npm run preview  # preview the production build locally
```

There is no test suite, linter, or type checker configured in this project.

## Architecture

This is a single-page React portfolio site (Vite + plain React, no router, no Tailwind). The entire page is one scroll surface assembled in `src/App.jsx` from section components rendered in order (`Hero`, `About`, `Services`, `Portfolio`, `Contact`) between a fixed `Header` and a `Footer`. Navigation is anchor-based scrolling (`#home`, `#about`, `#services`, `#portfolio`, `#contact`), not client-side routing — `Header` and `Footer` both scroll sections into view with `element.scrollIntoView({ behavior: 'smooth' })` rather than changing the URL.

### Directory roles

- `src/sections/` — one component per full-width page section (`<section id="...">`), each paired with its own co-located CSS file (e.g. `Hero.jsx` + `Hero.css`).
- `src/components/` — smaller reusable pieces used across sections (`Header`, `Footer`, `RotatingRings`, `StatCounter`, `CircularProgress`, `Icon`, `Reveal`), also co-located with CSS where they have their own styling.
- `src/hooks/` — all scroll/animation behavior lives here rather than inline in components:
  - `useReveal` — IntersectionObserver-based scroll-reveal; returns `[ref, isVisible]`, used by the `Reveal` wrapper component.
  - `useScrollSpy` — tracks which section is currently active for header nav highlighting.
  - `useStickyHeader` — toggles the header's "scrolled" (glass background) state.
  - `useCountUp` — animates a number from 0 to a target when it scrolls into view (used by `StatCounter`).
  - `useElementScale` — measures a wrapper via `ResizeObserver` and returns a scale factor so a fixed-pixel-size child (the rotating rings) shrinks to fit smaller viewports instead of overflowing.
- `src/data/content.js` — all copy, nav links, service/skill/project data lives here as plain data arrays/objects, imported by sections. Add or edit site content here rather than hardcoding strings in JSX.
- `src/styles/index.css` — global design tokens (CSS custom properties for colors, fonts, spacing), resets, shared utility classes (`.container`, `.section`, `.btn`, `.glass-card`, `.gold-text`, etc.), and all `@keyframes` used across the app (`fadeIn`, `fadeInUp`, `fadeInDown`, `zoomIn`, `spin`/`spinReverse`, `floatY`, `pulseGlow`). Section/component CSS files rely on these variables rather than redefining colors.

### Scroll-reveal pattern

Most section content is wrapped in the `Reveal` component (`src/components/Reveal.jsx`) instead of applying animation classes directly:

```jsx
<Reveal delay={150} zoom className="about-visual">...</Reveal>
```

`Reveal` uses `useReveal` internally and toggles `.reveal`/`.reveal-zoom` + `.is-visible` classes (defined in `styles/index.css`), passing `delay` through as the `--reveal-delay` CSS variable. Stagger multiple items by incrementing `delay` per index (see `Services.jsx` / `Portfolio.jsx` mapping over arrays).

### Rotating rings (hero visual)

`RotatingRings.jsx` renders 3 concentric orbits of tech-label "icons" (data in `content.js` as `ringIcons`, one array per ring) at a fixed base size (`BASE_SIZE = 460`px). Each ring rotates via CSS animation (`spin`/`spinReverse`) at its own `duration`, and each orbiting icon is independently counter-rotated at the same duration so the icon labels stay upright while orbiting. Because the ring geometry uses fixed pixel radii (needed for the `rotate() translateX() rotate()` positioning trick), responsiveness is handled separately: `useElementScale` measures the actual rendered wrapper width and applies a CSS `scale()` transform to the whole ring assembly rather than resizing the rings' internal geometry. When editing ring behavior, change `RING_CONFIG` (radius/duration/direction) and `ringIcons` together — the icon count per ring determines the angular spacing.

### CSS load order gotcha

`main.jsx` imports `./styles/index.css` **before** `./App.jsx`. This is intentional: Vite/ESM injects component CSS in module-graph traversal order, so importing the global stylesheet first ensures component-level rules (e.g. a `@media` override like `.header-cta { display: none }` in `Header.css`) can win over same-specificity base rules (e.g. `.btn { display: inline-flex }` in `index.css`). If a responsive override mysteriously loses to a base utility class, check import order before adding `!important`.

### Content is genericized placeholder data

This project was reconstructed from a real person's portfolio site as a structural/technical template — all names, photos, bios, testimonials, and social links in `content.js` and the JSX are intentionally generic placeholders ("Your Name", "Your Photo", etc.). Keep new content genericized in the same style unless explicitly asked to personalize it.
