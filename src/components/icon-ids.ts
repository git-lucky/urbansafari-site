// Mask ids for Icon.astro. A running counter keeps them unique within a page
// and identical from one build to the next (Astro renders pages in order).
let count = 0;
export const nextIconId = (name: string) => `ic-${name}-${++count}`;
