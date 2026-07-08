# MySAIYa Digital Hub — Implementation Pack

This package translates the approved information architecture into a developer-ready starting point.

## Files

### Documentation
- `docs/01-authentication-flow.md`
- `docs/02-navigation-menu.md`
- `docs/03-consent-integration-strategy.md`
- `docs/04-seo-and-search-console-implementation.md`

### Deployable public assets
- `public/sitemap.xml`
- `public/robots.txt`

### Reusable implementation helpers
- `src/seo-config.ts`
- `src/structured-data.ts`
- `src/breadcrumb-rules.ts`
- `src/consent-model.ts`
- `src/sitemap-generator.mjs`
- `src/content-export.example.json`

### Data exports
- `data/sitemap-route-manifest.json`
- `data/centre-directory-route-manifest.json`

### HTML reference
- `templates/seo-head-example.html`

## Working Assumption

The pack uses `https://mysaiya.com` as the canonical origin. Change `SITE_ORIGIN` in `src/seo-config.ts` before launch if the final production hostname differs.

## Sitemap Publication Gate

The supplied `public/sitemap.xml` is a deployment draft. Publish URLs only after the corresponding pages exist publicly and return HTTP 200. Centre profile pages should be published after SSIOM verifies names, classifications, addresses, schedules, and approved public contact details.

## Platform Notes

The SEO templates are platform-neutral TypeScript. A developer can adapt them to a React application, server-rendered application, Firebase-hosted application, or CMS integration. If WordPress is used, the same canonical, sitemap, breadcrumb, and structured-data rules remain applicable even if implemented through a plugin or theme layer.
