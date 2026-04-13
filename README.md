# Urban Safari — Marketing Site

Static marketing site for Urban Safari, built with [Astro](https://astro.build) and deployed to Cloudflare Pages.

## Stack

- **Framework:** Astro 5 (static output, no SSR)
- **Styling:** Vanilla CSS with design tokens in `src/styles/global.css`
- **Fonts:** Cabinet Grotesk + Satoshi (via Fontshare CDN), JetBrains Mono
- **Hosting:** Cloudflare Pages

## Local development

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # builds to ./dist
pnpm preview      # serves the built site
```

## Project layout

```
src/
  layouts/Base.astro        # HTML shell, SEO meta, nav + footer
  components/               # Nav, Footer, Mascot, home sections
    home/                   # Homepage sections composed in index.astro
  content/                  # Structured content (tiers, FAQ)
  pages/                    # Routes: /, /privacy, /support, /404
  styles/global.css         # Design tokens + resets + utilities
public/                     # Static assets (team photos, mascot placeholders)
MASCOT_SPEC.md              # Atlas the elephant — pose catalog + style guide
```

## Design system quick reference

- Palette: cream, sand, forest, coral, sunset (see `:root` in `global.css`).
- Headings: Cabinet Grotesk (`--font-display`), chunky and warm.
- Body: Satoshi (`--font-body`).
- Mono: JetBrains Mono for eyebrows, numerals, small labels.
- Reusable classes: `.wrap`, `.section`, `.eyebrow`, `.lead`, `.btn` / `.btn-coral` / `.btn-forest` / `.btn-ghost`, `.band-sand` / `.band-cream-deep` / `.band-forest` / `.band-coral`, `.rise` + `.rise-1…5` for staggered load-in, `.grain` for the noise overlay.

## Atlas the mascot

Every `<Mascot pose="..." />` usage is a placeholder until real art is dropped into `public/mascot/`. Pose slugs, their usage locations, and the illustrator style guide live in `MASCOT_SPEC.md`.

Audit all current poses in use:

```bash
grep -rEoh 'pose="[a-z0-9-]+"' src | sort -u
```

## Deploying to Cloudflare Pages

See `DEPLOY.md`.
