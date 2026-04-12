# Deploying Urban Safari to Vercel

## Prerequisites
- Access to the `urbansafari.app` GitHub repo
- A Vercel account (vercel.com)
- Access to the domain registrar for `urbansafari.app`

---

## Step 1 — Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **Add New → Project**
3. Find and import the `urbansafari.app` GitHub repo
4. Vercel will auto-detect Next.js — leave all settings as default
5. Click **Deploy**

You'll get a live preview URL like `urbansafari-app.vercel.app` within a minute.

---

## Step 2 — Add Custom Domain

1. In your Vercel project dashboard, go to **Settings → Domains**
2. Type `urbansafari.app` and click **Add**
3. Also add `www.urbansafari.app` and set it to redirect to the root domain
4. Vercel will show you the DNS records you need to set

---

## Step 3 — Update DNS at Your Registrar

Add the following records at your domain registrar (exact values shown in Vercel):

| Type | Name | Value |
|------|------|-------|
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

> DNS changes can take a few minutes to a few hours to propagate.

---

## Step 4 — Verify

Once DNS propagates, visit [https://urbansafari.app](https://urbansafari.app) — it should load the new site with a valid SSL certificate automatically provisioned by Vercel.

---

## Future Deploys

Every push to the `main` branch automatically redeploys the site. No manual steps needed.
