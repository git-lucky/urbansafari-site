# Deploying Urban Safari to Cloudflare Pages

## Prerequisites
- Access to the `urbansafari.app` GitHub repo
- A Cloudflare account with Pages access
- Access to the DNS records for `urbansafari.app`

---

## Step 1 — Connect the repo

1. In the Cloudflare dashboard, go to **Workers & Pages → Create → Pages → Connect to Git**.
2. Authorize Cloudflare to read the repo and pick `urbansafari.app`.
3. Choose the `main` branch for production.

## Step 2 — Build settings

| Field             | Value                |
|-------------------|----------------------|
| Framework preset  | Astro                |
| Build command     | `pnpm build`         |
| Build output dir  | `dist`               |
| Root directory    | `/` (project root)   |
| Node version      | `20` or newer        |

Cloudflare auto-detects the framework preset — verify the above values match before the first build.

## Step 3 — First deploy

Click **Save and Deploy**. The first build provisions a `*.pages.dev` URL you can sanity-check.

## Step 4 — Custom domain

1. In the Pages project settings, add `urbansafari.app` and `www.urbansafari.app`.
2. Cloudflare will auto-create the DNS records if the zone is already on Cloudflare; otherwise it will show the CNAME target to set at your registrar.
3. Redirect `www` → apex via a Page Rule or the Bulk Redirects UI.

## Step 5 — Verify

- [ ] `https://urbansafari.app` loads with a valid TLS cert.
- [ ] `/privacy` and `/support` both render.
- [ ] `/not-a-real-page` returns the custom 404.
- [ ] `curl -sI https://urbansafari.app | grep -i server` reports `cloudflare`.

## Future deploys

Every push to `main` triggers a production deploy. Pull requests get preview URLs automatically.
