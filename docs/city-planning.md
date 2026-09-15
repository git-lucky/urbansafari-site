# City-aware corporate planning

Production is https://urbansafari.app/ on the existing Cloudflare Pages project `urbansafari-site`, branch `main`. Mike has authorized live shipping. Build with `pnpm build`, push the reviewed source to main, and verify the GitHub Actions deployment and live HTTP response. Do not run Playwright, local servers or previews unless Mike requests them.

The homepage hero stays generic: headline, description, proof, photo caption and visible hero CTA never name a city. Cloudflare request.cf.city and regionCode personalize planning links, metadata and the later contact section. The navigation CTA may name the city. `/plan/?city=` preserves that city as an editable value, with a pencil that focuses/selects it. Explicit `/cities/<slug>/` pages preserve their requested city.

Missing or invalid geography keeps general copy. No GPS prompt, third-party geolocation lookup, paid AI call or IP retention. Personalized HTML is private/no-store; only `/` invokes the middleware through public/_routes.json.

Any city is accepted; the twenty featured cities are suggestions, not a claim that routes are already mapped. Continue to email composes a draft to mike@urbansafari.app for the visitor to send, with a copyable fallback. The site does not directly submit the inquiry.

Three packages: Scout and Remote Expedition use green styling. Guided Expedition and Urban Safari are one combined in-person package, with the Signature label only. Former guided/premium inclusions are combined and FAQ wording agrees. Process and outcome icons use green line drawings on pale sage; gold accents are muted.

Photography: Strunk IMG_9874 remains the hero. Its location/event credit belongs in the gallery, not the hero. The gallery has thirteen images including yoga submissions 8875/8876; its credit identifies Woo Town, Woodward and Mike/Strunk/the teams. More recent hunts can be added later. Photos display inline without clickable enlargement. Mike rejected IMG_1331 for marketing; do not re-add it or make further expression-based substitutions. Originals and the participant recap are preserved.

Explore packages links to the package-card grid (#packages), below its introduction, with scroll clearance for the sticky navigation.

Homepage order: hero, proof, packages, photo gallery, four steps, Pre-flight questions, contact invitation, What you get outcomes, footer. Footer order: Urban Safari coin/name, Google and Yelp review links, Get in touch / Featured cities / Safari, legal. Five decorative stars sit next to each review logo within the review CTA; they are not an aggregate rating or review count. Exact links, QR codes and official logo provenance are in review-assets.md.

Actual game map/feed/leaderboard marketing screenshots remain pending a player session Mike opens in Safari. Do not extract team login credentials from the operator session.
