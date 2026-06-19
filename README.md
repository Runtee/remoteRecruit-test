# RemoteRecruit — Features Page

A pixel-faithful, fully responsive recreation of the **RemoteRecruit – Features** page from the
provided Figma design, built with React, TypeScript, Vite, and Tailwind CSS.

🔗 **Live demo:** _add your deployed URL here_
🎨 **Design:** [RemoteRecruit – Home (Figma)](https://www.figma.com/design/EtejDtLu3wavBclhHY6JNa/Design?node-id=1-131)

## Tech stack

| Concern        | Choice                                  |
| -------------- | --------------------------------------- |
| Framework      | React 18 + TypeScript                   |
| Build tool     | Vite 5                                   |
| Styling        | Tailwind CSS 3 (custom design tokens)   |
| Animations     | CSS keyframes + IntersectionObserver    |
| Fonts          | Poppins (Google Fonts)                  |

## Features

- **Component-based architecture** — every section (Navbar, Hero, FeatureRow, SignUpAd,
  CommonQuestions, Pricing, Footer) and primitive (Button, Reveal, LazyImage, Logo, SocialIcons)
  is a reusable component.
- **Design fidelity** — colors, typography, and the type scale are tokenized in
  `tailwind.config.js` straight from the Figma frame (e.g. `text-display`, `text-h2`, `bg-cta-gradient`).
- **Fully responsive** — desktop, tablet, and mobile layouts, including a hamburger menu on small
  screens. (The Figma only ships a 1440px desktop frame, so mobile/tablet breakpoints use
  best-judgment layouts that preserve the design language.)
- **Scroll-reveal animations** — sections fade/slide in via the `Reveal` component, which respects
  `prefers-reduced-motion`.
- **Hover & focus states** — on buttons, links, and social icons, with visible focus rings for
  keyboard users.
- **Scroll-to-top button** — appears after scrolling down.
- **Performance** — images are lazy-loaded and served as WebP; no render-blocking heavy assets.

## Project structure

```
src/
  components/      # All UI sections and reusable primitives
  data/
    content.ts     # Mock content (features, plans, FAQ, socials)
  App.tsx          # Page composition
  main.tsx         # Entry point
  index.css        # Tailwind layers + base styles
public/            # Static assets (images, SVGs, favicon)
```

## Getting started

Requires **Node.js 18+** (developed on Node 22).

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Production build
npm run build

# 4. Preview the production build locally
npm run preview
```

## Deployment

The project is a static SPA and deploys with zero extra configuration.

- **Vercel** — import the repo; the framework preset is auto-detected. `vercel.json` is included.

Build command: `npm run build` · Output directory: `dist`

## Known limitations

- **Mobile/tablet is best-judgment.** The Figma file contains only the 1440px desktop artboard for
  this page, so responsive breakpoints were designed to match the desktop look-and-feel rather than
  a pixel-specified mobile comp.
- **Buttons are non-functional** ("Sign In", "Sign Up", "Get Started") — they're anchors/placeholders,
  as the exam scope is the marketing page only.
- **Mock content** — the FAQ answers and some listing text use the Figma placeholder copy verbatim.
- A couple of muted label colors come straight from the design and sit near the WCAG AA contrast
  threshold for small text.
