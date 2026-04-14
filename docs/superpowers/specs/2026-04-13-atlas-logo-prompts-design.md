# Atlas Logo Prompts — Gemini Image Generation

## Brand context

- **Mascot:** Atlas, a cute chibi elephant with teal-to-lavender gradient body, dusty-rose inner ears, big expressive eyes, plum-ink outlines
- **Palette:** forest green `#1F3A2B`, gold `#EAB72D`, cream `#FAF5E9`, sand `#EDDFC3`
- **Style reference:** PostHog logo — bold mascot-forward, thick outlines, clean wordmark, startup energy
- **Generator:** Google Gemini
- **Atlas spec:** `/MASCOT_SPEC.md` | **Existing prompts:** `/MASCOT_PROMPTS.md`

---

## Prompt A — Wordmark Logo

Paste into Gemini:

> A clean startup combination logo in the PostHog style. Left side: a cute chibi cartoon elephant mascot with an oversized round head, large leaf-shaped ears with dusty-rose pink inner fill (#E6A4B0), big round expressive eyes with white catchlight sparkles, a warm open-mouth smile, and a smooth cell-shaded body that grades from mint-teal (#8CC9C4) at the top to lavender (#A89BCC) at the bottom. The elephant wears a tan safari jacket (#EDDFC3) and holds small gold binoculars. One ear tilts upward in a curious expression. Right side: bold chunky sans-serif wordmark — "Urban" in dark forest green (#1F3A2B), "Safari" in warm gold (#EAB72D). Mascot and text at equal visual weight, horizontally aligned. Thick plum-ink outlines (#2A2239) throughout, approximately 2px. Flat cell-shaded illustration, no textures, no geometric patterns, no drop shadows. Clean white background. Professional startup brand identity, vector-style.

---

## Prompt B — Icon / App Mark

Paste into Gemini:

> A clean startup app icon in the PostHog style. A cute chibi cartoon elephant mascot centered on a warm cream background (#FAF5E9). The elephant has an oversized round head, large leaf-shaped ears with dusty-rose pink inner fill (#E6A4B0), big round expressive eyes with white catchlight sparkles, a warm open-mouth smile with a small pink tongue, and a smooth cell-shaded body that grades from mint-teal (#8CC9C4) at the top to lavender (#A89BCC) at the bottom. The elephant holds a small cream-colored city map with gold pushpins (#EAB72D), one ear tilted up curiously. Thick plum-ink outlines (#2A2239) throughout. Flat cell-shaded illustration, no textures or geometric body patterns, no background elements. Gold and forest green (#1F3A2B) prop accents only. No text. Scalable, badge-ready composition. Professional mascot icon, vector-style.

---

## Iteration tips

If Gemini output drifts from Atlas's look, append to the prompt:

- `"smooth gradient body, NO geometric patterns or textures on body"`
- `"chibi proportions: head larger than body, short stubby limbs"`
- `"NOT realistic, NOT 3D rendered — flat 2D cell-shaded cartoon"`
