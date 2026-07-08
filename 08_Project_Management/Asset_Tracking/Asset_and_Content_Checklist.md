# MySAIYa Digital Hub — Asset & Content Checklist v1.3
Last Updated: 2026-07-09
Cross-checked against: `10_Source_Code/webapp/apps/web/docs/10-sitemap.md` (Sitemap v3.0), Route Register v5, and the built route tree in `10_Source_Code/webapp/apps/web/src/app`.

> **Changes in v1.3 (Sitemap v3.0 navigation revision, 9 Jul 2026):** FunZone module naming adopted (Blog it · Play it = games arcade · Story it = His Story chapters · Read it · Sing it · Talk it · Meditate it · Eat it). Play it gains a 5th game (**Adventure**). NEW assets/copy: Eat it modules, My Briefcase + My Journal dashboard pages, Talk it podcast branding (Chai with Sai · InSAIde Scoop), Sweet is Thy Name playlist module. **B3 programme list fully replaced** by the new taxonomy (3 merged categories, ≈19 programmes); SHAKTHI · STAR · ABC · SAI RAM MONSOON become flagship past-event recaps. Header assets updated (search-first centre, hamburger megamenu).

Priority key: **P1** = needed for Phase 1 public launch · **P2** = member phase · **P3** = engagement/gamification · **P4** = committee · **P5** = later.

> **Changes in v1.1 (sitemap cross-check):** B5 blog series corrected to the locked 11-series taxonomy · Gallery assets/copy added (A4, B5) · Connect new-form copy added (committee application, report-a-concern, newsletter preferences) (B6) · Blog pitch form copy added (B5) · icons for new routes added (A2) · access-denied illustration added (A7).
>
> **Changes in v1.2 (both open questions resolved, 8 Jul 2026):**
> 1. **Downloads DROPPED.** No `/resources/downloads` section will be built — downloadable files attach to their owning pages; committee materials live in `/committee/toolkit`. The four downloads routes (C-064–C-067) were removed from the Route Register (now **v4**; v3 archived in `09_Backup/`), from `public/sitemap.xml`, from `src/data/sitemap-route-manifest.json`, and from the navigation docs. Downloads asset/copy items removed below.
> 2. **Route count RECONCILED against Route Register v4:** 135 registered routes · **88 publicly indexable routes** (the previously quoted "94" was the Zone C route count, not indexability) · draft XML sitemap = **145 URLs** (78 core + 67 centre-directory profiles; dynamic content URLs are added by the generator at publish). B12/B13 updated with these figures.

---

# PART A — VISUAL ASSETS

## A1. Logo & Brand Identity (P1)

| # | Asset | Spec | Notes |
|---|---|---|---|
| 1 | Primary full horizontal lockup | Master SVG + PNG (1x/2x/3x) | Desktop header, documents, covers |
| 2 | Logo + "MySAIYa Digital Hub" brand block | SVG + PNG | Site header, dashboard, sign-in |
| 3 | Vertical/stacked lockup | SVG + PNG | Footer, mobile |
| 4 | Standalone "ya" emblem | SVG + PNG, min 28px legible | Mobile header, loading screen, sidebar |
| 5 | White/reversed versions of all above | SVG + PNG | For navy, gradients, photo overlays |
| 6 | Gold premium logo | SVG + PNG | Celebrations, certificates, centenary ONLY |
| 7 | Monochrome (black + white) versions | SVG + PNG | Print, watermark |
| 8 | SSIOM emblem (approved footer version) | SVG + PNG | Footer attribution only |
| 9 | Favicon set | 16, 32, 48px PNG + .ico + Apple touch 180px | Browser tabs |
| 10 | PWA app icon | 192×192, 512×512 PNG + maskable variant | Simplified emblem |
| 11 | PWA splash screen | Per-device sizes, navy hero gradient | With emblem |
| 12 | Multi-logo lockup (MySAIYa + SSIOM) | Formal certificate version | 1X spacing rule |

*Inventory note: primary, white/reversed, and gold PNGs already exist in `01_Brand_Identity/Logo/` — master SVGs, monochrome set, favicon/PWA exports, and the multi-logo lockup are still outstanding.*

## A2. Icon Sets (P1 core, P3 gamification)

**Navigation & semantic set — Lucide/Heroicons outline, 2px stroke, 16/20/24/32px exports, locked mapping:**
Home · Landmark (MySAIYa 101) · Sparkles (Bhagawan) · Timeline (His Life) · MessageCircleHeart (His Message) · HandHeart (His Work) · Building2 + Globe2 (SSIOM/SSSIO) · MapPinned (Centres) · BookOpen (Story/Book Club) · Target (Mission) · ShieldCheck (Guidelines/Privacy) · UsersRound (Leadership) · Zap (In Action) · GraduationCap (Youth Development) · Handshake (Mentorship) · Flower2 (Spiritual & Cultural) · Music (Bhajans) · AudioLines (Chanting) · HeartHandshake (Service) · Stethoscope (Medical) · Crown (Leadership programmes) · CalendarDays / CalendarClock / Images (Events) · ClipboardPenLine (Registration) · Library (Resources) · PenLine (Blog) · Heart (Reflections) · UserRoundHeart (Stories) · Star (Spotlight) · BookMarked (Ramakatha) · Gamepad2 (Interactive) · Dice5 (Play It) · Mic2 (Sing It) · Lotus (Meditation) · Coffee (Café) · Download · CircleHelp (FAQ) · Mail (Contact) · MessageSquarePlus (Feedback) · Send (Newsletter) · Share2 (Social) · MessagesSquare (Forums) · BarChart3 (Polls) · UploadCloud (Submissions) · LayoutDashboard · UserRound (Profile) · Trophy (Achievements) · Flame (Streak) · Coins (Points) · Award (Certificates) · Bell (Notifications) · LockKeyhole (Security) · BriefcaseBusiness (Committee) · Map (Strategy) · Wrench (Toolkit) · ChartNoAxesCombined (Analytics) · ListChecks (Audit) · CircleCheck / Info / TriangleAlert / CircleX (states)

**ADDED v1.1 — icons for new sitemap routes:**
GalleryHorizontalEnd (Gallery `/resources/gallery`) · ShieldAlert (Report a Concern `/connect/report-concern` — must be visually distinct from Feedback) · ClipboardList (Committee Applications `/connect/join/committee`, `/committee/applications`) · MailMinus or Settings2 (Newsletter Preferences `/connect/updates/preferences`) · Lightbulb (Blog Pitch `/resources/blog/pitch`)

**ADDED v1.3 — icons for the v3.0 navigation:**
Menu (hamburger, all breakpoints) · Search (header centre form field) · Gamepad2 (Play it — games arcade) · BookOpenText (Story it) · BookMarked (Read it / Book Club) · Mic2 (Sing it) · Podcast (Talk it) · Lotus (Meditate it) · Salad or Apple (Eat it — NEW) · Compass or MapPinned (Adventure game) · Briefcase (My Briefcase) · NotebookPen (My Journal — NEW) · muted-state treatment for the guest "My Dashboard" menu item

**Additional sets:**
- [ ] Social platform icons (Instagram, Facebook, YouTube, WhatsApp, TikTok, X, LinkedIn) — brand-matched line style (P1)
- [ ] Programme category icons ×4 (Youth Development, Spiritual & Cultural, Community Service, Leadership) with category accent colours (P1)
- [ ] File-type icons (PDF, DOC, MP3, MP4, ZIP) (P1)
- [ ] Action icons (download, share, favourite/save-to-briefcase, print, copy link, play, pause) (P1)
- [ ] Badge/achievement icon set (P3 — see A8)

## A3. Hero Banners (P1) — 1920×1080 JPG/WebP + mobile crop 1080×1350, navy overlay 45–65%

1. Homepage main hero (3–4 options to choose from)
2. MySAIYa 101 section hero
3. MySAIYa In Action hero
4. Resources hero
5. Connect hero
6. FAQ hero
7. Committee Hub hero (P4, internal)

## A4. Section Header Images (P1) — 1200×400 JPG/WebP, consistent treatment

1. Bhagawan Sri Sathya Sai Baba (respectful, approved imagery)
2. His Life · 3. His Message · 4. His Work
5. SSIOM & SSSIO · 6. Sai Centre Directory
7. About MySAIYa (story/name/mission/guidelines/leadership/snippets shared or individual)
8. Programmes directory + 4 category headers
9. Events (upcoming/past)
10. Blog & Reflections
11. Stories & Spotlights
12. Book Club / Ramakatha Rasa Vahini
13. Interactive Learning (Play It, Sing It, Games Arcade, Meditation)
14. Soul & Culture Café
15. ~~Downloads~~ — **DROPPED v1.2 (no downloads section will be built)**
16. Connect / Join / Volunteer / Contact
17. **ADDED v1.1:** Gallery (`/resources/gallery`)
18. **ADDED v1.1:** Updates/News archive (`/updates`)

## A5. Photography Collections (rolling; consent-cleared, consistent warm edit)

| Collection | Priority | Use |
|---|---|---|
| Service activity photos (ROSE, DARTS, RISE, medical camps) | P1 | Heroes, programme pages, recaps |
| Bhajan/satsang/spiritual practice scenes | P1 | Devotional pages, café |
| Youth leadership & training (MSYLP, YYLP) | P1 | Programme pages |
| Event photo sets (categorised per event) | P1 rolling | Event recaps, galleries |
| Member spotlight portraits | P2 | Spotlights (consent form on file) |
| Committee portraits (individual + group) | P1 | Leadership page |
| Cultural celebration photos (Malaysian festivals) | P2 | Heritage content |
| Sai Centre location photos | P5 | Centre directory |
| Historical/archive photos (digitised, restored) | P2 | Story, Throwback Thursdays |
| **ADDED v1.1:** Launch seed set for public Gallery (consent-vetted, from photo submissions pipeline) | P2 | `/resources/gallery` cannot launch empty |

## A6. Quote Card System (P1) — extends the existing purple series

- [ ] **His Voice master templates ×3–4 layouts** (portrait-with-quote like current series; text-only devotional; landscape web version 1600×900 for homepage slider) — SSIOM logo lockup, Playfair quote text, purple/warm treatments per existing style
- [ ] **Quote bank: 20+ verified quotes** designed as cards (square 1080×1080 + story 1080×1920 + web slider format) — accurate sourcing with date/occasion, e.g. existing "royal road… Love" (07.02.1959), "Sai Organisation is set up to develop and foster Love" (21.11.1970), lion/leadership (Summer Showers 1992)
- [ ] **Thematic series templates**: leadership (lion series — already drafted in 3 variants; pick one lockup and standardise), five human values set (Sathya/Dharma/Shanti/Prema/Ahimsa), festival greetings (Deepavali, CNY, Hari Raya, Wesak, Christmas, Guru Purnima, Aradhana/Mahāsamādhi Day, Birthday celebrations)
- [ ] Devotional notice card template (site alerts — #F8F5FF/#7A2582 tokens)
- Consolidation note: the three lion variants use slightly different logo/typography treatments — approve one house style (recommend the framed variant with consistent gold script wordmark) before batch production.

## A7. Illustrations & Graphic Elements

- [ ] Empty-state line illustrations ×6 (no events, no badges, no reflections, no submissions, no search results, no notifications) — 96–160px, navy line + gold/purple accent (P2)
- [ ] Sacred geometry / lotus / light / path motif set (subtle backgrounds, section dividers, quote accents) (P1)
- [ ] Background patterns (tileable, low-contrast) ×3–4 (P1)
- [ ] Cultural motif set (Malaysian multicultural, respectful) (P2)
- [ ] Infographics ×5: SSIOM organisational structure · programme impact statistics · MySAIYa history timeline · five human values visual · membership journey flow (P1–P2, multilingual-ready)
- [ ] 404/500/maintenance page illustrations (mature line art, one CTA) (P1)
- [ ] **ADDED v1.1:** Access-denied illustration (`/account/access-denied`) — same line-art family as 404/500 (P1)
- [ ] Onboarding wizard step illustrations ×4–6 (P2)

## A8. Gamification & Learning Visuals (P3)

- [ ] Badge sets ×4 (service milestones, event participation, knowledge achievement, community contribution) — 5+ designs each, icon + label + tier, 18–24px and full-size exports
- [ ] Level card backgrounds (deep navy + gold milestone accents)
- [ ] Streak flame states (active/at-risk/broken — encouraging, never guilt-based)
- [ ] Points/Divine Briefcase icon and counter styling
- [ ] Certificate template (formal, gold accents, verified name + issue date, MySAIYa+SSIOM lockup) — digital + print PDF
- [ ] Play it games arcade art *(UPDATED v1.3)*: Quotescape, Crossword, Word Search, Trivia + **Adventure (NEW)** — 10 level tiles each (5 games × 10 levels) + Story it chapter cover art ×9 (His Story chapters 01-his-cradle → 09-his-story)
- [ ] Sing it chapter covers ×9 (01-in-the-beginning → 09-sing-his-tune; slugs 02-aummmazing / 03-early-tune per v3.0)
- [ ] **ADDED v1.3:** Eat it module art — "Diet the Sai Way" cover + module tiles (P3)
- [ ] **ADDED v1.3:** Talk it podcast branding — show cover art ×2 (Chai with Sai · InSAIde Scoop), episode thumbnail template, audio-player styling (P2)
- [ ] **ADDED v1.3:** My Journal + My Briefcase dashboard visuals — empty states, entry-card styling (P2)
- [ ] Quiz feedback state graphics (correct/incorrect with icon + explanation slot)
- [ ] Meditation room backgrounds (calming, diverse aesthetics)
- [ ] **Note v1.1:** Book Club runs on the same badge/progress engine (locked 2 Jul 2026) — badge set and progress visuals must cover Book Club weekly milestones too

## A9. UI Component Visual Library (P1) — Figma + coded

Buttons (primary gold gradient / secondary navy / tertiary outline; hover, focus, disabled) · form fields with validation states · cards (feature, programme, event, spotlight, metric) · header/mega-menu + mobile drawer · footer · breadcrumbs · accordions · modals · toasts · banners · chips/badges (semantic) · tables (desktop + mobile card mode) · pagination · tabs · loading skeletons · progress bars/rings · avatar placeholders.

## A10. Social Media & Marketing Templates (P1)

- [ ] Announcement template (square + story)
- [ ] Event promo + countdown + "registration open/closing" templates
- [ ] Event recap carousel template
- [ ] Spotlight/member feature template
- [ ] Quote-of-the-week template (matches A6)
- [ ] "New blog post" template
- [ ] Website launch campaign set (teaser, launch day, feature tours)
- [ ] Open Graph/meta share images — homepage + 6 section defaults (1200×630): MySAIYa 101 · In Action · Resources · Connect · FAQ · Updates/Events

## A11. Video & Audio (P1–P3)

- [ ] Welcome video, 1–2 min, 1080p, subtitled (script → production)
- [ ] Bhajan of the Month recordings (rolling, MP3/embed)
- [ ] Programme highlight videos: MSYLP, YYLP, DARTS, RISE (2–3 min each) (P2)
- [ ] Member testimonial videos ×5 (P2)
- [ ] Bhajan tutorial + meditation tutorial videos (P3)
- [ ] Guided meditation audio ×5 (10–15 min) · Mantras & slokas ×10 (P2–P3)
- [ ] Ambient loops for meditation room (P3)

## A12. Print & Event Collateral (P2)

Pull-up banner · A5 flyer/brochure template · event backdrop template · name tag template · presentation template (dark cover, gold accents, image-safe overlays) · report cover template — all black-and-white readable.

---

# PART B — WRITE-UPS TO BE READY

Status key: ✅ drafted (pending review) · ✍️ to draft · 📋 template needed · 🔒 blocked on inputs.

## B1. Homepage (P1) ✍️
1. Hero welcome message (100–150 words) + mission line
2. CTA labels (Join MySAIYa · Explore Programmes · View Events — 2–5 words each)
3. Announcement bar copy pattern
4. "Inspired by Bhagawan" tribute blurb (~80 words)
5. Spotlight teaser copy pattern
6. His Voice quote slider — 20+ verified, sourced quotes with attribution + date
7. Bhajan of the Month intro pattern
8. Upcoming events preview copy pattern
9. Weekly Challenge public teaser pattern
10. Quick action card copy ×4

## B2. MySAIYa 101 (P1) — ✅ all 21 pages drafted, pending team review
- Bhagawan: Introduction · His Life & Timeline · His Universal Message · His Work · FAQ
- SSIOM/SSSIO: gateway · SSSIO International · SSIOM Malaysia · History & Legal Status · Structure · Codes of Conduct & Principles · Wings overview + Spiritual, Service, Education, SCA, Ladies wing pages
- About MySAIYa: Our Story · Our Name & Symbolism · Vision, Mission & Values · Principles & Code of Practice · Snippets
- 🔒 **Leadership Overview** — blocked on committee list (name, portfolio, bio, photo per member)
- ✍️ Centre Directory intro copy + centre profile template (pending fifth-region decision)

## B3. Programmes — MySAIYa In Action (P1) ✍️ next priority *(REPLACED v1.3 — new taxonomy per Sitemap v3.0)*
1. Programme directory landing intro
2. Category intros ×3 (Leadership & Youth Development · Spiritual and Cultural · Community Service)
3. Individual programme pages, 300–500 words each (objectives, audience, format, outcomes, story, CTA), ≈19 pages; confirm acronym expansion per page:
   - **Leadership & Youth Development:** YYLP/SSILP · MSYLP · Youth Vikas · Parent's Appreciation Day · RISE FOR VIP · DARTS · SSEHV
   - **Spiritual and Cultural:** Bhajans · Vedic Renaissance · Temple Adoption
   - **Community Service:** FGIS · Community Adoption Program · HOPE · Walk for Values · Community Cleaning Club · Tree Planting · Feed the Homeless · Stray No More · Medical Camps and Blood Donations
4. Flagship past-event recap pages (v1.3 — moved from the old programme list): **ABC · SHAKTHI · STAR · SAI RAM MONSOON** (200–300 words each, under `/updates/events/past`)

## B4. Events & Updates (P1) 📋
1. Events landing intro · Upcoming intro · Past archive intro
2. Event page template copy (status labels, sections, recap structure)
3. Registration form copy: field labels, helper text, separated consent wording (participation / photo-video / communications), **parental-consent step copy (auto-triggered under 18, per locked media-consent policy)**, confirmation message
4. News/updates archive intro + update post template
5. 3–5 launch-ready event write-ups and 3–5 past recaps (200–300 words each)

## B5. Resources (P1–P3)
1. Resources gateway intro ✍️
2. **Blog** *(UPDATED v1.1 — aligned to the locked 11-series taxonomy, Sitemap v2.1 §4.1; old 15-name list superseded)*: landing intro + author bio pattern + per-series intro blurb and 3–5 launch articles each (700–900 words; spotlight-style pieces 500–700):
   - `mindful-mondays` · `tuesday-tales` · `wednesday-wisdoms` · `thursday-throwbacks` · `friday-flashbacks` (#TGIF is a social hashtag only, never the series name) · `sathwic-saturdays` · `mysaiya-updates`
   - `sunday-fundays` umbrella with sub-tag content mix: *tunes* (Bhajan Bits & Bytes) · *celebrates* (festive/religious events) · *personas* (humanitarians, saints, Volunteer Voices) · *heritage* (religious & cultural connections)
   - Mother-tongue series: `suara-kita` (BM) · `engal-kural` (Tamil — requires Noto Sans Tamil before launch) · `xinsheng` (Mandarin — requires Noto Sans SC before launch)
   - "Quotable Sai" context write-ups for the 20+ verified quotes (feeds A6/B1; published under the daily series, not a separate series)
3. **ADDED v1.1 — Blog pitch form** (`/resources/blog/pitch`): page intro, field labels, helper text distinguishing idea-stage pitch from finished-article submission, confirmation message ✍️
4. **Stories & Spotlights**: landing intro + spotlight template + 5 launch profiles (consent on file)
5. **ADDED v1.1 — Gallery** (`/resources/gallery`): landing intro, consent/moderation explainer ("all images consent-vetted"), link-through copy to photo submission flow, empty-state line ✍️ (P2)
6. **Book Club**: landing intro · Ramakatha Rasa Vahini programme overview · weekly reading page template + first 4 weekly write-ups
7. **Interactive Learning** *(UPDATED v1.3 — FunZone naming)*: Story it public overview + sign-in prompt · His Story chapter texts ×9 (01-his-cradle → 09-his-story) · Play it arcade public overview + game descriptions ×5 (Quotescape, Crossword, Word Search, Trivia, **Adventure — NEW**) · Sing it public overview (incl. Sweet is Thy Name playlist intro) + Learn the Sai Music chapter texts ×9 (01-in-the-beginning/Naadabrahma → 09-sing-his-tune/Sai bhajans) · Meditate it resources page · **Eat it (NEW)**: public overview + "Diet the Sai Way" module texts + Spiritual Advisor–reviewed content plan
8. **Talk it — podcasts** *(ADDED v1.3)*: show descriptions ×2 (Chai with Sai · InSAIde Scoop) · episode page template (title, notes, guest, transcript slot) · launch episodes plan
9. **Question banks** (P3): Sai teachings, cultural, service, values, diet/health *(Eat it added v1.3)* — 20+ questions each with explanations, Spiritual Advisor–reviewed (crossword + quiz banks already partially drafted); enough depth to cover 10 levels × 5 games
10. **Soul & Culture Café**: landing · bhajans intro · playlists intro (incl. Sweet is Thy Name cross-link) · podcasts intro (Talk it home) · bhajan lyrics library (20+ accurate transcriptions) · cross-link module copy for Sai SMS (sibling platform — NOT a subpage, locked 2 Jul 2026). *(Mantras & slokas tutorial copy lives under Sing it / Learn the Sai Music, not Café.)*
11. ~~Downloads~~ — **DROPPED v1.2**: no downloads section; file-type icons and action icons (A2) still needed for inline downloadable files on programme/event/committee pages

## B6. Connect (P1) ✍️
1. Join/Get Involved overview · Membership page (wizard link) · Volunteer opportunities (live listings pattern) · Interest form copy
2. **ADDED v1.1 — Committee application** (`/connect/join/committee`): role descriptions, term structure, application form copy, confirmation + review-timeline message (feeds `/committee/applications`)
3. Contact page (role-based contacts: info@, privacy@) · Feedback form copy · Directory intro
4. **ADDED v1.1 — Report a Concern** (`/connect/report-concern`): page copy clearly separated from general feedback, safeguarding scope explainer, **anonymous-reporting option copy**, what-happens-next/confidentiality statement, confirmation message. Tone: safe, non-judgemental. Requires safeguarding review before publish.
5. Newsletter subscription page + welcome copy
6. **ADDED v1.1 — Newsletter preferences/unsubscribe** (`/connect/updates/preferences`): preference labels, unsubscribe confirmation page copy (legally distinct from signup — Malaysian CMA 1998 compliance)
7. Social media links page · Community landing · Forums/polls/hangouts intros + login prompts · Submission gateway + 4 form copy sets (photos, testimonials, reports, articles) with consent wording — article-submission copy must state it is for **finished drafts** (idea-stage pitches go to `/resources/blog/pitch`)
8. **Locked:** no donation solicitation copy anywhere; no donate page will exist.

## B7. FAQ (P1) ✍️
Seven categories, 10–20 Q&As each (50–100-word answers): Getting Started · Bhagawan Sri Sathya Sai Baba · SSIOM & SSSIO · Membership · Events · Resources · Privacy & Account.

## B8. Legal & Compliance — Zone B (P1, legal review required) ✍️
Privacy Notice (PDPA 2010) · Terms of Use · Copyright Notice (Copyright Act 1987) · Cookie Policy + consent pop-up microcopy · Consent Preferences page · Community Standards · Submission Guidelines · Media Consent Information (**including the explicit under-18 parental-consent policy, locked 2 Jul 2026**) · Accessibility Statement · Data Request form copy · human-readable Sitemap page. Plus consent form texts: photo/video release, testimonial, minor participation, data collection. **BM translations minimum for all.**
*Inventory note: first drafts of all Zone B documents exist in `06_Legal_Documents/` — pending legal review, not yet BM-translated.*

## B9. System & UX Microcopy (P1–P2) ✍️
1. 404 / 500 / maintenance / access-denied page copy
2. Empty-state lines ×7 (supportive, one CTA, no guilt) — events, badges, reflections, submissions, search results, notifications, **gallery (added v1.1)**
3. Alert/toast copy library per semantic state (success, info, warning, error, devotional, achievement) — follows the approved examples style
4. Form validation message library
5. Onboarding wizard copy: relationship step, eligibility, centre selection, consent step, interests, completion
6. Email templates: verify email · password reset · welcome · event registration confirmation · event reminder · newsletter shell · badge/achievement notification (P3) · **committee-application received/outcome (added v1.1, P4)** · **report-of-concern acknowledgement (added v1.1 — wording needs safeguarding review)**
7. Search page copy (no results, filters)
8. Cookie banner + preference labels

## B10. Member Dashboard Copy (P2) ✍️ *(UPDATED v1.3 — v3.0 labels)*
Dashboard welcome/journey framing (fellowship & aspiration tone, not competition) · My Profile labels · **My Briefcase copy (ADDED v1.3 — saved quotes/points framing)** · **My Journal copy (ADDED v1.3 — privacy reassurance: private, never searchable, never shared)** · My Events history · My Badges and Certificates · My Progress · community activity · notifications preferences · security page copy (MFA enrolment explainer) · privacy controls copy (view/download/withdraw/delete flows).

## B11. Committee & Internal (P4) ✍️
Committee dashboard intro · moderation guidelines · submission review SOP copy · event management guide · brand guidelines (accessible committee version — approved) · meeting minute template (approved) · content review workflow · newsletter management guide · analytics glossary · audit log conventions · **committee-application review workflow copy (added v1.1)** · **reports-of-concern handling SOP — restricted-access wording, safeguarding-officer role pending (added v1.1; open decision in Sitemap Zone E)**.

## B12. SEO & Metadata Layer (P1) ✍️ *(counts reconciled v1.2 against Route Register v4)*
- Meta titles + descriptions for the **88 publicly indexable routes** (Route Register v4, `SEO Indexability = Index`)
- Draft XML sitemap = **145 URLs** (78 core + 67 centre-directory profiles); dynamic content URLs (blog posts, events, programmes) added by the generator at publish — sitemap publication gate: URL must exist publicly and return HTTP 200
- OG titles/descriptions for the 6 main sections + homepage
- Alt-text guidelines + alt text for every launch image
- Structured data copy (organisation, events, articles, FAQ)
- Noindex set per Route Register v4 (45 routes: account, dashboard, committee, forms, drafts, pitches, consent flows) + Zone F exclusions

## B13. Translation Queue (post-English approval)
**88 indexable routes** → BM, Tamil, Chinese (count now tied to Route Register v4 — keep in sync with it). Order: legal pages (BM first) → homepage + MySAIYa 101 → programmes → FAQ → resources. Maintain the translation workflow guide (roles: translator, reviewer per language). Interim mother-tongue publishing runs through the blog series `suara-kita` / `engal-kural` / `xinsheng` — full `/bm/` `/ta/` `/zh/` routing deferred ~1 year.

---

## SUGGESTED PRODUCTION SEQUENCE

**Sprint 1 (unblock launch):** Logo package + favicon/app icons → hero banners → semantic icon exports (incl. new-route icons) → quote card house style decision + first 10 quote cards → homepage + programme write-ups → legal drafts to reviewer.
**Sprint 2:** Section headers (incl. Gallery, Updates) → photography curation + consent audit → FAQ + Connect copy (incl. report-a-concern + committee application + newsletter preferences) → SEO metadata pass → social launch templates.
**Sprint 3 (P2 prep):** Onboarding/email copy → empty states → dashboard copy → spotlight profiles → infographics → gallery launch seed set.
**Sprint 4 (P3):** Badges, certificates, game art, question banks, chapter texts.
