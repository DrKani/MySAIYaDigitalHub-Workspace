# MySAIYa Digital Hub — SEO and Search Console Implementation

## Working Canonical Origin

`https://mysaiya.com`

Before deployment, confirm whether the final production host is `https://mysaiya.com` or a different host such as a `www` variant. Use one origin consistently in:
- canonical tags
- XML sitemap URLs
- structured-data URLs
- internal links
- Search Console property verification
- redirects

## Canonical Tags

Place an absolute canonical link in the HTML `<head>` of each public canonical page:

```html
<link rel="canonical" href="https://mysaiya.com/resources/blog/example-post" />
```

Rules:
- Use the root URL `https://mysaiya.com/` as the canonical homepage.
- Redirect `/home` to `/`.
- Do not place filtered URL combinations in the XML sitemap.
- Pure filter combinations such as `?region=selangor` should normally canonicalise to the stable listing page unless they are promoted into a unique, editorially maintained path page.
- Use same-language canonicals when translated routes are introduced.
- Add `noindex,nofollow` to account, search-result, dashboard, committee, registration, submission, and privacy-action pages.

Example:

```html
<meta name="robots" content="noindex,nofollow" />
```

## Visible Breadcrumbs

Display breadcrumbs on deeper pages using an accessible navigation landmark:

```html
<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/about">MySAIYa 101</a></li>
    <li><a href="/about/ssiom-sssio">SSIOM and SSSIO</a></li>
    <li><a href="/about/ssiom-sssio/centres">Sai Centres</a></li>
    <li aria-current="page">Sri Muda</li>
  </ol>
</nav>
```

## Structured Data Placement

Use JSON-LD in the `<head>` or body of the page. The included TypeScript helper module generates:
- `BreadcrumbList`
- `Organization`
- `Event`
- `BlogPosting`

### Organization
- Add MySAIYa organization data to the homepage.
- Add the SSIOM organization entity on the SSIOM page where appropriate.
- Represent SSIOM as the parent organization of MySAIYa.

### BreadcrumbList
- Add to pages deeper than a section landing page.
- Keep the JSON-LD trail aligned with the visible breadcrumb trail.

### Event
- Add only to an individual public event landing page.
- Use `/events/[event-slug]` as the canonical page.
- Do not use the registration form as the canonical event page.
- Include accurate dates, status, attendance mode, location, image, description, and organiser.

### BlogPosting
- Add to individual public blog or reflection posts.
- Include headline, images, author, publication date, modification date, publisher, and canonical page URL.

## Sitemap

Deploy the included file at:

`https://mysaiya.com/sitemap.xml`

The supplied draft contains known public canonical routes and the submitted Sai Centre directory routes. It intentionally excludes:
- account routes
- `/search`
- dashboard pages
- committee pages
- event registration forms
- submission forms
- filter combinations
- private downloads
- draft dynamic records
- dynamic route patterns without a concrete published slug

The included generator adds public programmes, events, blog posts, stories, and book-club pages when the CMS export marks them as published and indexable.

## robots.txt

Deploy the included file at:

`https://mysaiya.com/robots.txt`

Authentication and server-side authorisation protect private content. `robots.txt` is not treated as a privacy control.

## Validation Sequence

1. Check every canonical URL returns HTTP 200.
2. Validate JSON-LD using Google Rich Results Test.
3. Validate general schema using Schema.org Validator.
4. Verify that no protected route is present in `sitemap.xml`.
5. Confirm that action pages include `noindex,nofollow`.
6. Confirm `/home` redirects permanently to `/`.
7. Confirm the sitemap is available publicly at `/sitemap.xml`.
8. Confirm `robots.txt` contains the sitemap line.
9. Submit the sitemap in Google Search Console.
10. Inspect the homepage, one event, one blog post, and one centre page using URL Inspection.

## Search Console Submission

1. Add a **Domain property** for the final domain in Google Search Console.
2. Verify domain ownership using the DNS TXT record provided by Search Console.
3. Deploy `/sitemap.xml` and `/robots.txt`.
4. In Search Console, open **Sitemaps**.
5. Enter `sitemap.xml` and submit it.
6. Review processing status and any reported errors.
7. Use **URL Inspection** to request indexing for the homepage and a small number of representative launch pages.
8. Monitor index coverage and structured-data reports after launch.

Submitting a sitemap is a discovery hint; it does not guarantee indexing.
