# Forte Visions — GitHub Pages Site

A minimal, elegant photography portfolio for **Marissa Forte**.

## Quick Start (GitHub Pages)

1. **Create repo** on your GitHub account (same account that hosts tadeocabrera.com):
   - Name: `forte-visions` (or any name you like)
2. **Upload files** from this folder to the repo.
3. Go to **Settings → Pages**:
   - **Source:** `Deploy from branch`
   - **Branch:** `main` (root)
   - Custom domain: `www.fortevisions.com` (recommended) or `fortevisions.com`
   - Check **Enforce HTTPS** once the certificate is ready.

> The included `CNAME` file sets the domain to `www.fortevisions.com`. If you prefer apex only (`fortevisions.com`), either edit this file or delete it and set the domain in **Settings → Pages**.

## DNS (GoDaddy)

Choose **one** of the following setups.

### Option A — Primary `www` (simpler, recommended)
- **CNAME**: `www` → `tadeocabrera.github.io`
- (Optional) GoDaddy redirect: `fortevisions.com` → `https://www.fortevisions.com` (HTTP 301).  
  Or use A records below to serve apex too.

### Option B — Serve apex (`fortevisions.com`) via A records (no redirect)
Create **four A records** for the apex (root) `@`:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```
Plus **CNAME** for `www`:
```
www → tadeocabrera.github.io
```

> After DNS changes, wait up to a few hours for propagation.

## Replace Placeholder Content

- Put real photos (JPG, reasonable size like 1600–2400px wide) into: `assets/photos/`
- Replace the hero image: `assets/photos/hero-placeholder.jpg`
- Replace the about image: `assets/photos/about-placeholder.jpg`
- Update contact email (footer) and Instagram link in `index.html`
- Replace the Formspree endpoint in the contact form (`action="https://formspree.io/f/your-form-id"`):
  - Create a free Formspree form to get your `form-id`

## SEO & Social

- Update page `<title>` and `<meta name="description">` in `index.html`
- Replace Open Graph/Twitter image at `assets/icons/cover.jpg` with a 1200×630 image
- `sitemap.xml` and `robots.txt` are included

## Optional Enhancements

- Add galleries (new sections) or pages (e.g., `/pricing.html`)
- Connect a custom email (e.g., `hello@fortevisions.com`) via Zoho Mail (free) or Google Workspace
- Add Google Analytics (GA4) by placing the script in `index.html`

## Costs

- GitHub Pages hosting: **Free**
- SSL (HTTPS): **Free**
- Domain (GoDaddy): ~\$10–20/year
- Optional email hosting: \$0–6/month

## Troubleshooting

- If HTTPS doesn’t appear after DNS is correct, uncheck and re-check **Enforce HTTPS** in **Settings → Pages**
- Clear your browser cache or test in an incognito window
- Use `dig`, `nslookup`, or an online DNS checker to verify records
