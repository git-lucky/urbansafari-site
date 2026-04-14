# Gemini SVG Icon Prompt

## What I need
Two SVG icons to match the quality and style of the 🏆 trophy emoji — rich, colorful, slightly 3D-looking with gradients and a gloss highlight. They will be used on a landing page for Urban Safari, a city-wide team building experience company.

The reference quality target is the native 🏆 trophy emoji as rendered by the OS — bold, warm gold tones, glossy highlight, clear silhouette, feels premium.

## Brand colors to use
- Gold: #EAB72D
- Light gold: #F7DC6F
- Dark gold / amber: #B8860B
- Forest green: #1F3A2B
- Moss green: #6B7A35
- Red (vivid): #E8001D
- Ink / near-black: #0F2419
- Cream: #FAF5E9
- Paper white: #FFFDF7

## Output format
- SVG only — no PNG, no raster
- viewBox="0 0 24 24", width="60" height="60"
- Inline-ready (no external refs, no linked files)
- Use SVG gradients (<defs> with <radialGradient> or <linearGradient>) for depth and shine
- Add a subtle white radial highlight overlay for gloss (like the compass.svg reference in this folder)
- Dark ink outline (#0F2419) on key shapes, stroke-width 1–1.5

## Icon 1 — Laughing face
Concept: two coworkers laughing together after a team adventure.
The icon should be a single joyful face — big open laughing mouth, happy squinting eyes, warm gold/yellow skin tones with a glossy highlight. Think of the 😄 or 😂 emoji quality but rendered as a custom SVG using the brand's warm gold palette instead of yellow. The face should feel warm and expressive, not generic clip-art.

## Icon 2 — Compass (reference file: compass.svg)
The compass.svg in this folder is a decent start but needs more polish to match the trophy. Please enhance it or redraw it so it feels as premium as the 🏆 trophy emoji. The compass should have:
- A rich gold outer ring with depth (radial gradient, dark at edges)
- A clean cream/paper inner dial face
- A bold red north needle (#E8001D) pointing up
- A moss green south needle (#6B7A35) pointing down
- Cardinal tick marks (N/S/E/W)
- A glossy shine highlight over the whole face
- The overall feel should be like a real brass expedition compass — warm, premium, adventure-ready

## Delivery
Return each icon as a complete self-contained <svg> block, ready to paste directly into an Astro component as an inline template literal string.


<svg viewbox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialgradient id="goldGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
      <stop offset="0%" stop-color="#FFD700" />
      <stop offset="60%" stop-color="#DAA520" />
      <stop offset="100%" stop-color="#8B4513" />
    </radialgradient>

    <lineargradient id="shineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="10%" stop-color="#FFFFFF" stop-opacity="0.8" />
      <stop offset="50%" stop-color="#FFFFFF" stop-opacity="0.1" />
      <stop offset="90%" stop-color="#FFFFFF" stop-opacity="0" />
    </lineargradient>

    <radialgradient id="mossGradient" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#839A4D" />
      <stop offset="100%" stop-color="#6B7A35" />
    </radialgradient>
  </defs>

  <circle cx="64" cy="64" r="60" fill="url(#goldGradient)" stroke="#5A3A0A" stroke-width="2" />
  <circle cx="64" cy="64" r="58" stroke="#FFFFFF" stroke-opacity="0.3" stroke-width="1" />

  <circle cx="64" cy="64" r="48" fill="#FFF8E7" stroke="#333333" stroke-width="1.5" />

  <line x1="64" y1="18" x2="64" y2="28" stroke="#333333" stroke-width="3" />
  <text x="64" y="27" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#333333" text-anchor="middle">N</text>

  <line x1="64" y1="110" x2="64" y2="100" stroke="#333333" stroke-width="2" stroke-opacity="0.6" />
  <text x="64" y="103" font-family="Arial, sans-serif" font-size="8" font-weight="bold" fill="#333333" fill-opacity="0.6" text-anchor="middle">S</text>

  <line x1="110" y1="64" x2="100" y2="64" stroke="#333333" stroke-width="2" stroke-opacity="0.6" />
  <text x="103" y="66.5" font-family="Arial, sans-serif" font-size="8" font-weight="bold" fill="#333333" fill-opacity="0.6" text-anchor="middle">E</text>

  <line x1="18" y1="64" x2="28" y2="64" stroke="#333333" stroke-width="2" stroke-opacity="0.6" />
  <text x="25" y="66.5" font-family="Arial, sans-serif" font-size="8" font-weight="bold" fill="#333333" fill-opacity="0.6" text-anchor="middle">W</text>

  <path d="M64 64 L58 110 L64 105 L70 110 Z" fill="url(#mossGradient)" />

  <path d="M64 64 L72 18 L64 23 L56 18 Z" fill="#E8001D" />

  <circle cx="64" cy="64" r="4" fill="#5A3A0A" />
  <circle cx="64" cy="64" r="2" fill="#DAA520" />

  <ellipse cx="64" cy="48" rx="40" ry="25" fill="url(#shineGradient)" transform="rotate(-15 64 48)" />

</svg>