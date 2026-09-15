# City-aware corporate planning

Shipped to https://urbansafari.app/ September14,2026, Cloudflare Pages deployment1041d1cd. Mike explicitly authorized production shipping of the evening's website and portal work. Further changes should target the live website unless he requests previews.

The homepage uses Cloudflare request.cf.city and regionCode. Missing or invalid geography keeps the general homepage. No GPS prompt, third-party geolocation lookup, paid AI call or IP retention. Personalized HTML is private/no-store; only / invokes the middleware through public/_routes.json. Explicit /cities/<slug>/ pages preserve the requested city.

Primary links say Plan <city> and show Plan any city on hover/focus. /plan/?city= carries a real editable value, with a pencil that focuses/selects it. Any city is accepted; the twenty featured city names are suggestions. Feedback confirms the city for the inquiry without claiming a route has already been mapped. Continue to email composes a draft to mike@urbansafari.app for the visitor to send; the site does not directly submit the inquiry. Copyable fallback is available.

Three packages: Scout and Remote Expedition use green styling; Guided Expedition and Urban Safari are one combined in-person signature package, with both Most booked and Signature labels. Former guided/premium inclusions are combined and FAQ wording agrees.

Thirteen approved edited photographs: Strunk9874 in the hero, twelve in the gallery. Credit identifies Woo Town, Woodward and Mike/Strunk. The gallery says photos from recent hunts will be added. Footer mobile order: Get in touch, Featured cities, Safari, reviews. Featured cities is not an exclusive service area; Plan in another city opens free entry. Review links use the existing Google review URL and Mike's exact Yelp business URL, with local official brand icons and scannable QR links. Asset provenance is in review-assets.md.

Build with pnpm build; deploy the build through the existing urbansafari-site Cloudflare Pages project, production branch main. Two pre-existing local commits (6e143be and6211dd1) clean public build artifacts and improve metadata/alt text; this release preserves them.

Actual game map/feed/leaderboard marketing screenshots remain pending a player session Mike opens in Safari. Do not extract team login credentials from the operator session.
