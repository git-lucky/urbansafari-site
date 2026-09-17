// The homepage is nationwide. City content comes from a visitor's chosen city page.
// Only an explicit participant recap link reveals the event-specific invitation.
export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.pathname !== '/' || !['GET','HEAD'].includes(context.request.method)) return context.next();
  const original = await context.next();
  if (!original.ok || !original.headers.get('content-type')?.includes('text/html')) return original;
  const response = new Response(original.body,original);
  // Keep the participant invitation specific to its recap URL.
  response.headers.set('Cache-Control','private, no-store');
  response.headers.delete('ETag');response.headers.delete('Last-Modified');
  return new HTMLRewriter()
    .on('[data-recap-invitation], [data-recap-scroll-note]', {element:e=>{
      if (url.searchParams.get('recap') === 'wootown') e.removeAttribute('hidden');
    }})
    .transform(response);
}
