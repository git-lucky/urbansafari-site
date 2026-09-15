// Only the homepage is personalized. Explicit city URLs retain their own city.
// Cloudflare supplies cf; client-controlled location headers are never read.
export function visitorCity(cf) {
  if (!cf || typeof cf.city !== 'string') return null;
  const city = cf.city.trim();
  if (!city || city.length > 80 || !/^[\p{L}\p{M}\p{N} .,'’()\-]+$/u.test(city)) return null;
  const region = typeof cf.regionCode === 'string' && /^[A-Z0-9-]{1,8}$/i.test(cf.regionCode) ? cf.regionCode : '';
  const country = typeof cf.country === 'string' && /^[A-Z]{2}$/.test(cf.country) && cf.country !== 'XX' && cf.country !== 'T1' ? cf.country : '';
  const suffix = region || country;
  return {name:city,label:suffix ? `${city}, ${suffix}` : city};
}
export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.pathname !== '/' || !['GET','HEAD'].includes(context.request.method)) return context.next();
  const city = visitorCity(context.request.cf);
  const original = await context.next();
  if (!original.ok || !original.headers.get('content-type')?.includes('text/html')) return original;
  const response = new Response(original.body,original);
  // Never reuse one visitor's city for another, including on a no-location fallback.
  response.headers.set('Cache-Control','private, no-store');
  response.headers.delete('ETag');response.headers.delete('Last-Modified');
  if (!city) return response;
  const title = `Corporate team building in ${city.label} · Urban Safari`;
  const description = `Bring your ${city.name} team together with a custom Urban Safari scavenger hunt. Local challenges, live scoring, and an event built around your company.`;
  const text = value => ({element:element=>element.setInnerContent(value)});
  return new HTMLRewriter()
    .on('title',text(title))
    .on('meta[name="description"], meta[property="og:description"], meta[name="twitter:description"]',{element:e=>e.setAttribute('content',description)})
    .on('meta[property="og:title"], meta[name="twitter:title"]',{element:e=>e.setAttribute('content',title)})
    .on('[data-city-contact]',text(`Let’s plan your ${city.name} team event.`))
    .on('[data-city-button] [data-plan-label]',text(`Plan ${city.name}`))
    .on('[data-plan-link]',{element:e=>e.setAttribute('href',`/plan/?city=${encodeURIComponent(city.label)}`)})
    .transform(response);
}
