/**
 * Social-proof control panel.
 *
 * Every value in here is intentionally "empty" at launch — the site reads
 * these and hides the corresponding chips, sections, and copy until real
 * data exists. Fill in a value and its UI reveals on the next build.
 *
 * Guideline: do not claim it on the site until it's true here.
 */

export interface ClientLogo {
  name: string;
  /** 1–2 character glyph shown in the placeholder chip. Replace with `src` when real marks exist. */
  glyph: string;
  /** Optional path to a real logo mark in /public; takes precedence over glyph. */
  src?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

/**
 * Running totals. Set to a number when verifiable.
 * `null` → any UI depending on that count is hidden.
 */
export const counts = {
  citiesPlayed:   null as number | null,   // e.g. 14
  eventsRun:      null as number | null,   // e.g. 72
  teamsServed:    null as number | null,   // e.g. 120
  averageRating:  null as number | null,   // e.g. 4.9 (out of 5)
};

/**
 * Company logos shown in the "Played by teams at" strip.
 * Empty array → the entire strip is hidden.
 */
export const clientLogos: ClientLogo[] = [];

/**
 * Named testimonials. Empty array → any testimonials section is hidden.
 * Reserved for future use.
 */
export const testimonials: Testimonial[] = [];

// ---------------------------------------------------------------------------
//  Derived booleans — use these in templates for clean conditional rendering.
// ---------------------------------------------------------------------------

export const hasLogos         = clientLogos.length > 0;
export const hasTestimonials  = testimonials.length > 0;
export const hasCityCount     = counts.citiesPlayed !== null;
export const hasEventCount    = counts.eventsRun !== null;
export const hasRating        = counts.averageRating !== null && counts.eventsRun !== null;
