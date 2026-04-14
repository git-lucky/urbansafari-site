# How It Works — Icon Replacement Design Spec
**Date:** 2026-04-14

## Context

The How It Works section (`src/components/home/HowItWorks.astro`) currently uses the Atlas mascot in four different poses to illustrate each step. The goal is to replace these with clean Lucide-style icons in stamp-bordered circles — clearer at a glance, less heavyweight, inspired by PostHog's feature section treatment.

---

## Outcome

Replace the `<Mascot>` components in the four-step grid with inline SVG icons inside smaller gold-bordered circles. No layout changes. No new npm dependencies.

---

## Icon Mapping

| Step | Title | Lucide Icon |
|---|---|---|
| 01 | Tell us the brief | `PhoneCall` |
| 02 | We build the expedition | `Wrench` |
| 03 | Your team plays | `Map` |
| 04 | Everyone leaves grinning | `Trophy` |

Icons are inlined as raw SVG paths (no npm package). Stroke width `1.5`, rendered at `44px × 44px`, color `var(--forest)`.

---

## Container

- Size: `88px` diameter circle (down from `160px`)
- Background: `var(--paper)`
- Border: `2px solid var(--gold)`
- Border-radius: `var(--radius-pill)`
- No box-shadow (keeps it lighter than stamp cards elsewhere on the page)
- Icon centred inside with flexbox

---

## Connector Trail

The dashed connector line between steps is absolutely positioned at `top: 90px` in the current code, calibrated for the mascot circle height. With the smaller `88px` container this shifts to `top: 44px`.

---

## Changes to HowItWorks.astro

1. Remove `import Mascot from '@/components/Mascot.astro'`
2. Remove `pose` field from each step object in the `steps` array
3. Add an `icon` field to each step containing the inline SVG markup string
4. Replace `<div class="step-mascot"><Mascot ... /></div>` with `<div class="step-icon" set:html={step.icon}></div>` (Astro's `set:html` directive renders trusted inline HTML safely)
5. Update `.step-mascot` → `.step-icon` styles: `88px` container, flexbox centre, `var(--paper)` bg, `2px solid var(--gold)` border, `border-radius: var(--radius-pill)`
6. Update `.step-grid::before` connector trail from `top: 90px` → `top: 44px`

---

## Verification

1. `pnpm dev` — visit `http://localhost:4321`
2. Confirm four icons render correctly in their circles
3. Confirm dashed connector trail aligns with the icon circles at desktop width
4. Confirm 2-col and 1-col responsive layouts still work (trail is hidden on mobile — no change needed)
5. Confirm no mascot images are requested in the network tab
