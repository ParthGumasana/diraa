# Diraa one-page brand site

A dependency-free static site built from the supplied Diraa brand guideline PDF and logo.

## Local preview

Serve `dist/` with any static server, for example:

```sh
python3 -m http.server 8080 --directory dist
```

Then open `http://localhost:8080`.

## Content and configuration

- Production files live in `dist/`.
- Brand colours are CSS custom properties at the top of `dist/styles.css`.
- Page copy, metadata, navigation, and gallery items are in `dist/index.html`.
- Image assets are in `dist/assets/images/` and were extracted from the supplied brand catalog or supplied directly as the logo.
- Canela and Helvetica Neue font files were not supplied. The site therefore uses an editorial system-serif fallback for Canela and the system Helvetica/Arial stack for Helvetica Neue; no trial fonts are shipped.

## Product catalog

The single category and product-data source is `dist/catalog.js`. Update categories there so the homepage links and `/collections` filters stay synchronized. Existing supplied imagery is mapped once per product record; unsupported categories intentionally render the coming-soon state.

## Missing launch details

The supplied material did not include a verified Instagram URL, WhatsApp number, contact email, custom domain, or licensed font files. No placeholder social/contact links were published. Once verified, add those destinations to the contact section and footer, then add confirmed social profiles to the Organization JSON-LD `sameAs` list.

If a custom domain is connected, update the canonical URL, Open Graph URL/image URL, JSON-LD URL/logo URL, `robots.txt`, and `sitemap.xml`.
