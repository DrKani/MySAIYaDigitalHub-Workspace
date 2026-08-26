# MySAIYa Digital Hub — Design System

**Prepared for:** MySAIYa Digital Hub by SSIOM / MySAIYa of SSIOM

**Status:** Canonical brand package · **Updated:** 26 August 2026

A single, implementation-ready design reference for the **MySAIYa Digital Hub** — the digital platform of the Malaysian Sai Young Adults (MySAIYa), a young adult wing under SSIOM (Sathya Sai International Organisation, Malaysia) developed especially for SSIOM members ages 18-40 years old. The Hub is a member-facing web/PWA product for spiritual growth, learning, service, gamified progress and community across Malaysia.

## What this platform is

MySAIYa Digital Hub serves as a central hub for MySAIYa, providing information, updates, resources and opportunities for engagement. It is designed to:

- Inform members and the public about MySAIYa's mission, activities and events.

- Provide a platform for sharing news, articles, and inspirational content.

- Facilitate interaction and community building among Sai Young Adults.

- Offer resources for personal and spiritual growth.

- Streamline administrative tasks for the MySAIYa committee.

The site blends devotional content with a modern learning experience: dashboards, streaks, levels, badges and guided journeys, alongside bhajans, a book club (Ramakatha Rasa Vahini), reflective journaling, events, quote sliders and interactive quizzes ("Play It"). The audience is young adults, so the product must feel **sacred, modern, warm, trustworthy and gamified without becoming childish.**

## Authority and sources

Use this package as the visual source of truth for new site work. The files have distinct roles:

1. `tokens/` defines colour, type, spacing, radius, shadow and motion values.
2. `components/` defines reusable component behaviour and variants.
3. `guidelines/` shows approved foundation examples.
4. `styles.css` loads the token system for prototypes.
5. `assets/` contains approved logos and visual references.

The live implementation sits in `10_Source_Code/webapp/apps/web/`. Treat this package as the migration target for `src/app/globals.css` and shared UI code. Some production aliases still preserve the July token scale. Migrate those aliases through a reviewed UI change, then verify affected screens. Do not change production token values during a documentation cleanup.

Client-supplied logos include the MySAIYa emblem, horizontal lockups and SSIOM emblem. Client-supplied imagery includes community photography, devotional portraits of Bhagawan Sri Sathya Sai Baba and the Sai illustration.

# **Design Direction**

MySAIYa Digital Hub should feel sacred, modern, warm, trustworthy, and gamified without becoming childish. Visually, the identity centres on:

- Deep navy anchors.

- Vibrant purple folds and dividers. 

- White/ off‑white backgrounds. 

- Elegant, luxurious and rounded, bento-style components, grids, content cards, carousels, slides, cue cards etc.

- Radiant, metallic feel, exquisite gradient category block heading folds.

- Shiny, metallic, hyper-real gold accents.

- A clean, Poppins‑led interface.

- Elegant Playfair Display font semi-bold headings in metallic 3D regal gold texture. 

The interface should communicate:

- Devotion: deep navy, gold, calm spacing, spiritually uplifting typography.

- Elegance, modernity and clarity: simple cards, readable text, clear CTAs.

- Vibrant and youthful: colourful, radiant and metallic gradient galleries and content cards. 

- Modern spirituality: inspiring gradients, rounded cards, subtle elevation, friendly microcopy.

- Uplifting and motivating progress: customised and personalised dashboards, streaks, levels, badges, milestones, guided journeys.

- Community: reflecting SSIOM branding, Malaysian in cultural nuance language and tone, emphasising fellowships and shared offerings and exciting upcoming events.

---

## CONTENT FUNDAMENTALS

**Voice:** calm, warm, sincere, devotional-but-modern. Friendly microcopy, never preachy or corporate. Speak *to* the member ("you", "your journey"), warmly and inclusively.

**Greetings & devotional framing.** Devotional openings are part of the voice — "Om Sai Ram, {name}" is the standard hero greeting. Quotes from Sathya Sai Baba are attributed as "Bhagawan Sri Sathya Sai Baba" or "Sri Sathya Sai Baba" and treated reverently (Playfair Display italic, contemplative — never promotional).

**Casing.**

- **Sentence case is the default** for headings, card titles, body, blog titles. e.g. *"How service builds leadership"*, *"This week's wisdom"*.
- **Title Case** only for H1 hero headlines / major banners, used sparingly. e.g. *"Awakening the Spirit of Service"*.
- **ALL CAPS** restricted to buttons, badges and labels of ≤3 words, always with wide tracking (`0.08em`). e.g. *"JOIN NOW"*, *"REGISTER"*, *"LEVEL 1"*. Never all-caps paragraphs.

**Tone by context.**

- *Action* (buttons, nav): short, decisive, verb-led — "Register now", "Explore", "Get involved".
- *Learning* (articles): calm conversation, not a lecture; emphasis via weight, not italics.
- *Legal* (PDPA, Terms): neutral and honest, never defensive; no colour-highlighted clauses.
- *Alerts*: one clear human message + an action-oriented next step. Calm, never blame-based. e.g. *"Registration submitted. We have sent a confirmation to your email."*

**Emoji:** not used in the interface. Meaning is carried by Lucide icons + text, never emoji or colour alone.

**Punctuation:** avoid exclamation overload; em dashes sparingly; consistent list endings.

**Approved brand text (do not vary across pages):**

- Main: `MySAIYa Digital Hub`
- Subtitle: `The vibrant digital heartbeat of Malaysia's Sai Young Adult community by SSIOM.`
- Quote hashtag: `#saiquotesallmysaiyashouldknow`
- Core Brand Expression: MySAIYa — Malaysian Sai Young Adults
- Signature Expression:  Service • Adoration • Illumination
- Other expressions: 
  - **Empowering Malaysian young adults to live with purpose.**
  - **Transformation begins within.**
  - **Grow within. Give beyond.**
  - **Transform yourself. Grow together. Serve the world.**
  - **Not just growing up. Growing within.**
  - **Find your people. Find your purpose.**
  - **Let love become actions.**
  - **Malaysian Roots. Sai Wings.**
  - **Discover your potential. Deepen your purpose.**
  - **Discover what your journey can become.**
- Primary Brand Promise: Empowering Malaysian young adults to live with purpose.
- Extended Brand Promise: Empowering Malaysian young adults to live with purpose through spiritual growth, selfless service and human values.
- Sai-Explicit Version: Empowering Malaysian young adults to live with purpose, inspired by the universal teachings of Bhagawan Sri Sathya Sai Baba.
- Core Brand Idea: From Within, Into the World. MySAIYa believes that meaningful change begins within.

  Through opportunities for spiritual growth, selfless service, learning, leadership, fellowship and reflection, young adults are encouraged to discover their potential, strengthen their character and translate human values into everyday life.
- Messaging by Website Section
  - HOME: Discover a life of greater purpose.
  - ABOUT MySAIYa: More than a name. A journey of identity, purpose and transformation.
  - BHAGAWAN SRI SATHYA SAI BABA: A life of love. A message for humanity.
  - ACTIVITIES: Experience. Connect. Grow.
  - LEARN: End of Education is Character
  - GROW: Transformation begins within.
  - SERVE: Let love become action.

    Focus: selfless service.
  - CONNECT: Find your people. Find your place.

    Focus: belonging, Sai Centres and community.
  - STORIES / NEWS: Stories worth sharing. Lives worth inspiring.
- Official One-Line Description: MySAIYa is the Malaysian Sai Young Adults community within SSIOM, bringing together young adults aged 18 to 40 to grow spiritually, serve selflessly and live with greater purpose.
- Formal: The Malaysian Sai Young Adults (MySAIYa) is the Young Adults wing of the Sathya Sai International Organisation of Malaysia (SSIOM), providing opportunities for members aged 18 to 40 to pursue spiritual growth, selfless service, personal development and meaningful contribution to society.
- Short Boilerplate: Malaysian Sai Young Adults (MySAIYa) is the Young Adults wing of SSIOM, bringing together young adults aged 18 to 40 through spiritual growth, selfless service, fellowship and opportunities to live lives of greater purpose.
- Standard Boilerplate: Malaysian Sai Young Adults (MySAIYa) is the Young Adults wing of the Sathya Sai International Organisation of Malaysia (SSIOM), bringing together members aged 18 to 40 from Malaysia’s diverse communities. Inspired by the universal teachings of Bhagawan Sri Sathya Sai Baba, MySAIYa creates opportunities for spiritual growth, selfless service, learning, leadership and fellowship. Through these experiences, young adults are encouraged to strengthen character, practise human values and contribute meaningfully to their communities and society.
- Full Organisational Boilerplate: Malaysian Sai Young Adults (MySAIYa) is the Young Adults wing of the Sathya Sai International Organisation of Malaysia (SSIOM), serving members aged 18 to 40 within its diverse, multiracial, multireligious and multicultural community. Inspired by the life, message and universal teachings of Bhagawan Sri Sathya Sai Baba, MySAIYa provides opportunities for young adults to develop their spiritual, service, educational, cultural and leadership potential. Through selfless service, devotion, self-reflection, learning, fellowship and community engagement, MySAIYa encourages young adults to strengthen character, practise human values and integrate spirituality meaningfully into everyday life. At its heart, MySAIYa is a journey of self-transformation — empowering young adults to live with greater purpose while contributing positively to their communities, the nation and the wider world.

---

## VISUAL FOUNDATIONS

**Overall vibe:** sacred but not old-fashioned. Deep navy + gold as the spiritual base, paired with modern bento-style rounded cards, soft gradients, gentle elevation and clean iconography. No ornate frames, heavy textures or "temple brochure" aesthetics. **Calm first, excitement second** — high-energy colour is reserved for feature categories, progress moments and game areas. White space is a brand asset.

## **Visual Hierarchy Principles**

Before finalizing any screen design, verify it against these 7 non-negotiable rules:

1. **Meaning before decoration:** Every element must serve a functional or emotional purpose.

2. **Content before effects:** Prioritize crisp typography over background blurs and shadows.

3. **Action before information:** Highlight the single next step clearly.

4. **Spiritual message before gamification:** Keep progress counters subtle and contextual.

5. **One primary CTA per viewport:** Do not split user focus with competing high-contrast buttons.

6. **One visual focal point per section:** Ensure the eye lands naturally on a clear anchor.

7. **No competing accent colors:** Restrict color usage to its defined semantic meaning.

**Colour.** Three brand cores: **Anchor Navy `#002E5B`**, **Energy Purple `#7B2482`**, **Signature Gold** (Linear-gradient(90deg, #D2AC47  5%, #F7EF8A 45%, #AE8625 85%). Navy is structure (headers, footers, dark heroes, panels). Purple is a *signal* colour — notifications, popups, celebratory overlays — never a full surface palette. Gold is the sacred accent (CTAs, headings, milestones) and is **prohibited as body text on light backgrounds** (borders/icons/dark surfaces only). Accents carry meaning: teal = success/completion, magenta = reading/alert, orange = activity/live, purple-lite = personal progress, red = error. Use colour for *meaning*, navy + neutrals for *structure*. Limit gradients per viewport — many gradients feels noisy and less spiritual.

**Gradients** are highlights, never default surfaces, and each has a locked role: gold (CTA/milestones), updates banner (top ticker only), purple-metallic (premium popup/notification headers only), feature gradients (dashboard module tiles), level gradients (level chips/achievement surfaces), quote gradients (20 rotating devotional themes), special-release gradients (festival/anniversary unlocks). Bright gradients carrying text get a subtle `rgba(0,0,0,0.18)` overlay to stabilise contrast.

**Type.** A locked trio: **Playfair Display** (serif — sacred display, hero greetings, divine quotes), **Open Sans** (humanist sans — long-form reading, legal), **Poppins** (geometric sans — the preferred UI face for nav, buttons, badges, labels, most headings). Desktop scale runs a Major-Third feel from `display-lg` 48px down to `caption` 12px; line-heights tighten for headings (`1.1–1.3`) and relax for body (`1.6–1.65`). Decorative/script fonts are prohibited.

**Spacing & layout.** 4/8pt system. Max content width 1200px (1320–1400px for dashboards/wide). 12-column desktop grid / 8 tablet / 4 mobile, with generous, breathable margins. No more than 3 major cards per row; never more than 2 primary CTAs in a viewport.

**Shape & elevation.** Rounded, gentle, human — large radii everywhere (cards `--radius-2xl` 32px, bento `--radius-3xl` 40px, pills for chips/search/profile). Sharp rectangles only for full-width structural bars (nav, status). Shadows are soft and modern (never harsh black); gold/purple-tinted shadows are reserved for FAB and achievement/notification emphasis. Cards: white surface, 1px `--gray-200` border, soft navy-tinted shadow (`0 8px 24px rgba(10,30,62,0.06)`), large radius. A "shiny" card variant is navy with a gold-gradient border (quotes/divine messages). Glass cards use `rgba(255,255,255,0.9)` + `blur(10px)`.

**Motion.** Subtle over dramatic, fast over slow. Durations 100–600ms (300ms standard); default easing `cubic-bezier(0.22, 0.61, 0.36, 1)` (natural deceleration). Hover: brighten/lift (cards rise 4px, buttons scale 1.02 with a max-0.3-opacity glow). Press: darken slightly, move down 1px. Focus: visible 2px purple (or gold) ring, 2px offset. Quote transitions are calm crossfades only (no aggressive slides/bounce/zoom). All animation respects `prefers-reduced-motion`.

**Backgrounds & imagery.** Main app background is warm `--off-white #FBFAF7`; warm spiritual sections use `--cream`. Photography is real, candid, community-centred Malaysian MySAIYa/SSIOM moments — warm-toned, dignified, never glossy stock or exploitative. Hero photos get a 45–65% navy overlay so text stays readable; busy images sit in a solid/blurred container. Illustration is minimal, modern and gentle (sacred-geometry/lotus/light/path motifs), never childish mascots or ornate temple frames.

---

## ICONOGRAPHY

- **Library:** [Lucide](https://lucide.dev) outline icons (Heroicons outline is the acceptable alternative). Loaded from the Lucide UMD CDN in UI kits (`lucide.createIcons()`); production should use `lucide-react` or inline SVGs.
- **Style rules:** outline only, 2px stroke, calm/rounded/modern. Default 20px; 16px small UI; 24px card feature; 32px hero. Do **not** mix filled/duotone/outline in one area. Colour inherits from text or an approved semantic token.
- **Semantic mapping is locked** — one icon per concept (e.g. Home→`home`, Play It→`dice-5`, Book Club→`book-open`, Streak→`flame`, Points→`coins`, Achievements→`trophy`, Notifications→`bell`, Success→`circle-check`, Warning→`triangle-alert`, Error→`circle-x`). Once assigned, an icon is not casually swapped. See spec §8.11 for the full table.
- **No emoji** as iconography. Accessibility: decorative icons `aria-hidden="true"`; functional icons need an accessible label.
- **Logos** live in `assets/`. Primary identity is MySAIYa: use the transparent emblem (`mysaiya-emblem.png`) in compact/header contexts and the horizontal lockup (`mysaiya-lockup.png`, plus `-navy`/`-gold`/`-mono` reversed variants) where space allows. SSIOM (`ssiom-emblem.png`) is supporting/attribution only and never replaces MySAIYa. Respect clearspace (≥16px header, 24px desktop neighbours), minimum sizes, and the misuse rules in spec §4.9 (no stretch/rotate/recolour/effects).
- **Imagery** lives in `assets/`: warm, candid community photography (`photo-youth-group.jpg`, `photo-service.jpg`) for heroes/recaps under a 45–65% navy overlay; reverent devotional portraits (`sai-portrait-1..3.png`, transparent cut-outs) for "His Message" surfaces; and a vector illustration (`sai-illustration.png`).

---

## INDEX — what's in this system

**Entry point**

- `styles.css` — the one file consumers link; `@import`s every token + font file below.

**Tokens** (`tokens/`)

- `fonts.css` (Playfair Display / Open Sans / Poppins via Google Fonts) · `colors.css` · `gradients.css` · `typography.css` · `spacing.css` · `radii.css` · `shadows.css` · `motion.css` · `base.css` (body defaults, focus ring, reduced-motion).

**Components** (`components/`) — reusable React primitives, exported on `window.MySAIYaDesignSystem_*`:

- `buttons/Button` — primary (gold) / secondary / tertiary / destructive / purple.
- `data-display/Badge`, `data-display/Chip` — status badges & meaning-bearing chips (incl. level gradients).
- `surfaces/Card`, `surfaces/FeatureCard`, `surfaces/QuoteCard` — surfaces, gradient module tiles, devotional quote card (lockup, quote glyph, portrait bleed, gold Baba signature).
- `feedback/Alert` — semantic alerts (success/info/warning/error/devotional/achievement).
- `forms/Input` — labelled field with helper + validation states.
- `media/GalleryGrid` — album grid for Events, Seva and In Action; captions reveal on hover.
- `content/PostCard` — blog post card in three layouts: feature, stacked, horizontal.
- `learning/StudyModule` — chapter progress list for Book Club and MySAIYa 101.
- `learning/QuizQuestion` — the Play It answer card, with locked states and explanation.
- `games/Crossword` — data-driven puzzle board; grid and clue numbering are derived.
- `navigation/Tabs` — single-select tabs (underline / elevated / section), plus `SegmentedControl` and `FilterPills`.
- `navigation/Breadcrumbs` — trails for level three and deeper, plus `BackLink`.
- `navigation/Pagination` — numbered pages, plus `LoadMore` and `PrevNext`.
- `navigation/Sidebar` — member hub sidebar, 264px expanded / 76px collapsed.
- `navigation/BottomTabBar` — mobile bottom bar, plus `Drawer` and `ActionBar`.
- `surfaces/CategoryCard` — Programme Directory tile; one gradient and icon per category family.
- `feedback/Modal` — five locked popup patterns (locked / consent / achievement / welcome / plain).

**Foundation cards** (`guidelines/`) — specimen cards shown in the Design System tab (Colors, Type, Spacing, Brand groups).

**UI kit** (`ui_kits/digital-hub/`) — interactive recreation of the Hub homepage (photo hero, feature grid, progress panel, quote slider, devotional banner) + a Play It quiz screen. See its `README.md`.

**Templates** (`templates/`) — `hub-page/HubPage.dc.html`: a reusable, directly-editable Hub homepage starting point that consuming projects can copy. Tweaks: show/hide ticker, photo vs navy hero, show/hide quote.

**Other:** `SKILL.md` (downloadable Agent Skill), `assets/` (logos, lockups, photography, portraits).
