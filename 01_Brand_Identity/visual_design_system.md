# MySAIYa Digital Hub — Complete Design & Visual System

**Prepared for:** MySAIYa Digital Hub by SSIOM / MySAIYa of SSIOM  
**Year:** 2026  
**Version:** 1.0  

**Purpose:**  
A single, implementation-ready design reference for developers, designers, and content creators working on the MySAIYa Digital Hub platform.

***

## 1. Design Direction

MySAIYa Digital Hub should feel **sacred, modern, warm, trustworthy, and gamified without becoming childish**.  

Visually, the identity centres on:

- Deep navy anchors.  
- White and off‑white content cards.  
- Radiant gradient category blocks.  
- Rounded, bento-style components.  
- Gold spiritual accents.  
- A clean, Poppins‑led interface.

The interface should communicate:

- **Devotion:** deep navy, gold, calm spacing, respectful typography.  
- **Clarity:** simple cards, readable text, clear CTAs.  
- **Progress:** dashboards, streaks, levels, badges, milestones, guided journeys.  
- **Community:** SSIOM branding, national language and tone, shared offerings, upcoming events.  
- **Modern spirituality:** soft gradients, rounded cards, subtle elevation, friendly microcopy.

***

## 2. Visual Principles

### 2.1 Sacred but Not Old‑Fashioned

Use deep navy and gold as the spiritual base, but always pair them with modern card layouts, gradients, soft shadows, and clean iconography. Avoid ornate frames, heavy textures, or “temple brochure” aesthetics.

### 2.2 Calm First, Excitement Second

The default experience should be calm and breathable.  
High‑energy colours are reserved for:

- Feature categories (e.g. Play It, Book Club).  
- Progress moments (streaks, level‑ups, badges).  
- Game areas and achievement states.

### 2.3 White Space Is Part of the Brand

Generous spacing around cards and sections is non‑negotiable:

- Avoid cramped layouts.  
- Avoid long, dense text blocks.  
- Avoid screens with more than 2 primary CTAs visible at once.

### 2.4 Rounded, Gentle, Human

- Most components use **large border radii** (rounded cards, chips, banners).  
- Sharp rectangles are reserved only for full‑width structural bars (e.g. nav, status bars).  
- No harsh outlines; rely on soft shadows and subtle borders.

### 2.5 Every Page Shows the Journey

Where possible, show **where the user is**:

- Week number, level, streak, target.  
- Reading progress, sadhana count, reflection history.  
- Next milestone badge or “upcoming unlock”.

***

## 3. Brand Personality

| Trait           | Visual Expression                                                                 |
| :-------------- | :-------------------------------------------------------------------------------- |
| Devotional      | Deep navy, gold accents, respectful typography, calm spacing                     |
| Welcoming       | Rounded cards, friendly greetings, soft gradients                                |
| Organised       | Clear hierarchy, consistent card systems, predictable navigation                 |
| Gamified        | Levels, progress badges, Play It cards, streaks, icon badges                     |
| National        | SSIOM emblem, Malaysia‑wide language, shared offerings                           |
| Youth‑friendly  | Bright accents, simple microcopy, responsive interactive cards                   |

***

## 4. Core Colour System

Primary brand colours:

1. **Anchor Navy:** `#002E5B`  
2. **Energy Purple:** `#7B2482`  
3. **Signature Gold Gradient:**  
   `linear-gradient(90deg, #D2AC47 5%, #F7EF8A 45%, #AE8625 85%)`

Typography families:

1. **Playfair Display** — sacred display use.  
2. **Open Sans** — long‑form readability if needed.  
3. **Poppins** — interface, navigation, buttons, labels, badges (preferred for UI).

***

### 4.1 Primary Navy Scale

**Rule:** `--navy-900` and `--navy-800` are the spiritual anchors. Use them for header, footer, hero surfaces, and dark panels.

| Token        | Hex       | Usage                                             |
| :----------- | :-------- | :------------------------------------------------ |
| `--navy-950` | `#06162F` | Deep overlays, drawer shadows, dark footer base   |
| `--navy-900` | `#0A1E3E` | Main header, footer, dark app surfaces           |
| `--navy-850` | `#0B2545` | Alternative deep header navy                     |
| `--navy-800` | `#0D2F5C` | Hero background, strong cards                    |
| `--navy-700` | `#14366D` | Content panels, quiz containers                  |
| `--navy-600` | `#1B4568` | Update banner start, hover surfaces              |
| `--navy-500` | `#1E5A8E` | Borders, interactive hover accents               |
| `--navy-300` | `#4B7399` | Muted borders, subtle text on dark               |
| `--navy-100` | `#EAF2FA` | Light navy tint backgrounds                      |

***

### 4.2 Purple Scale

Primary purple `#7B2482` is a **signal colour**, not a full surface palette: use it for notification banners, popup headers, urgent highlights, and celebratory overlays.

| Token         | Hex     | Usage                                                              |
| :------------ | :------ | :----------------------------------------------------------------- |
| `--purple-950`| `#210326` | Deep shadow edge, popup top border shadow, darkest glow fallback |
| `--purple-900`| `#36083D` | Dark notification shell, modal depth base                        |
| `--purple-850`| `#4A0F55` | Popup header edge, darker banner band                            |
| `--purple-800`| `#5F176C` | Strong header purple, alert banner depth layer                   |
| `--purple-700`| `#7B2482` | Core brand purple, primary notification anchor                   |
| `--purple-600`| `#9837A1` | Hover sheen, brighter popup header midtone                       |
| `--purple-500`| `#B44DBE` | Highlight band, bright notification accent                       |
| `--purple-400`| `#CF79D6` | Soft reflective streak, inner metallic glow                      |
| `--purple-300`| `#E7B7EB` | Light shine stop, glossy top reflection                          |
| `--purple-100`| `#F8EBFA` | Pale tint background for light notification containers           |

***

### 4.3 Gold Scale

| Token         | Hex       | Usage                                             |
| :------------ | :-------- | :------------------------------------------------ |
| `--gold-600`  | `#B88A24` | Pressed states, darker gold text on light        |
| `--gold-500`  | `#D4AF37` | Primary accent, section headings, FAB, key CTA   |
| `--gold-400`  | `#DAB757` | Hover states                                     |
| `--gold-300`  | `#E5C158` | Soft highlights, disabled gold buttons           |
| `--gold-100`  | `#FFF7D6` | Light achievement backgrounds                    |

***

### 4.4 Accent Colours

**Gold Gradient**

```css
--gradient-gold: linear-gradient(135deg, #F1C40F 0%, #D4AF37 100%);
```

Usage: milestones, completion badges, certificates, high‑value achievements, sacred celebrations. Do not use for ordinary cards.

**Purple Gradients**

```css
--gradient-purple-notification: linear-gradient(
  135deg,
  var(--purple-950) 0%,
  var(--purple-850) 18%,
  var(--purple-700) 36%,
  var(--purple-400) 49%,
  var(--purple-500) 58%,
  var(--purple-800) 76%,
  var(--purple-900) 100%
);

--gradient-purple-metallic: linear-gradient(
  180deg,
  #f3d8f6 0%,
  #cf79d6 10%,
  #9837a1 24%,
  #7b2482 42%,
  #e7b7eb 50%,
  #b44dbe 58%,
  #5f176c 78%,
  #36083d 100%
);

--gradient-purple-shine: linear-gradient(
  180deg,
  rgba(255,255,255,0.34) 0%,
  rgba(255,255,255,0.12) 18%,
  rgba(255,255,255,0.00) 45%
);
```

**Usage:**

```css
.notification-banner {
  background: var(--gradient-purple-metallic);
  color: #fff;
  border: 1px solid rgba(255,255,255,0.18);
  box-shadow:
    0 10px 24px rgba(54, 8, 61, 0.28),
    inset 0 1px 0 rgba(255,255,255,0.22);
  position: relative;
  overflow: hidden;
}

.notification-banner::before {
  content: "";
  position: absolute;
  inset: 0;
  background: var(--gradient-purple-shine);
  pointer-events: none;
}

.popup-header {
  background: var(--gradient-purple-notification);
  color: #fff;
  border-bottom: 1px solid rgba(255,255,255,0.16);
}
```

**Practical direction**

Use **metallic purple** only for:

- Notification banners.  
- Success / announcement strips.  
- Modal or popup headers.  
- Very limited hero callouts.

Do **not** use these metallic gradients for general buttons, everyday cards, or full-page backgrounds.

**Other Accent Tokens**

| Token          | Hex       | Meaning                       | Usage                                                |
| :------------- | :-------- | :---------------------------- | :--------------------------------------------------- |
| `--teal-500`   | `#1DC9A0` | Success, selection, confirm   | Correct answers, selected quiz options, checkmarks   |
| `--teal-400`   | `#2DD4BF` | Lighter success               | Hover success, subtle highlights                     |
| `--magenta-600`| `#D91C5C` | Energy, reading, alert        | Book Club, destructive states (sparingly)           |
| `--magenta-500`| `#E91E63` | High‑energy hover             | Hover states, accent chips                           |
| `--purple-lite-700` | `#6D28D9` | Deep personal journey      | Journal surfaces, reflection areas                   |
| `--purple-lite-600` | `#8B5CF6` | Personal progress         | Dashboard progress, gamification                     |
| `--purple-lite-500` | `#9333EA` | Luminous purple           | Card gradients, hovers                               |
| `--orange-500` | `#FF7F3F` | Activity, offering, engagement| Namasmarana, live/active features                    |
| `--orange-400` | `#FF9A3D` | Warm hover                   | Play It, active CTA highlight                        |
| `--red-500`    | `#EF4444` | Notification / error          | Badges, unread count, destructive alerts             |

***

### 4.5 Neutrals

| Token          | Hex       | Usage                                     |
| :------------- | :-------- | :---------------------------------------- |
| `--white`      | `#FFFFFF` | Card backgrounds, text on dark           |
| `--off-white`  | `#FBFAF7` | Main page background                     |
| `--cream`      | `#F7F3EA` | Warm spiritual sections                  |
| `--gray-100`   | `#F3F4F6` | Light section surfaces                   |
| `--gray-200`   | `#E5E7EB` | Dividers                                 |
| `--gray-300`   | `#D1D5DB` | Borders, disabled strokes                |
| `--gray-400`   | `#9CA3AF` | Muted text                               |
| `--gray-500`   | `#6B7280` | Placeholder, secondary text              |
| `--gray-700`   | `#374151` | Body text on light                       |
| `--black-soft` | `#111827` | High-emphasis text on light              |

***

## 5. Approved Gradients

### 5.1 Top Updates Banner Gradients

```css
:root {
  --gradient-updates:         linear-gradient(90deg, #1B4568 0%, #4A1E6B 100%);
  --gradient-updates-hover:   linear-gradient(90deg, #24547E 0%, #5C2784 100%);
  --gradient-updates-active:  linear-gradient(90deg, #153653 0%, #391654 100%);
  --gradient-purple-metallic: linear-gradient(135deg, #36083D 0%, #7B2482 32%, #E7B7EB 50%, #B44DBE 64%, #4A0F55 100%);
  --gradient-purple-glow:     linear-gradient(90deg, #5F176C 0%, #9837A1 45%, #CF79D6 100%);
}
```

| Token                      | Gradient                                                                                 | Usage                                                                   |
| :------------------------- | :--------------------------------------------------------------------------------------- | :--------------------------------------------------------------------- |
| `--gradient-updates`       | `linear-gradient(90deg, #1B4568 0%, #4A1E6B 100%)`                                       | Main announcement ticker, top updates strip                            |
| `--gradient-updates-hover` | `linear-gradient(90deg, #24547E 0%, #5C2784 100%)`                                       | Hover state for clickable ticker, interactive banner links             |
| `--gradient-updates-active`| `linear-gradient(90deg, #153653 0%, #391654 100%)`                                       | Pressed state for ticker controls, chips                               |
| `--gradient-purple-metallic`| `linear-gradient(135deg, #36083D 0%, #7B2482 32%, #E7B7EB 50%, #B44DBE 64%, #4A0F55 100%)` | Premium popup headers, featured alerts, milestone notices              |
| `--gradient-purple-glow`   | `linear-gradient(90deg, #5F176C 0%, #9837A1 45%, #CF79D6 100%)`                          | Notification CTAs, badges, interactive pills inside alerts             |

**Interaction mapping:**

- Normal banner: `--gradient-updates`  
- Hoverable banner: `--gradient-updates-hover`  
- Active banner / pressed chip: `--gradient-updates-active`  
- Premium popup header: `--gradient-purple-metallic`  
- CTA button / pill inside alerts: `--gradient-purple-glow`

### 5.2 Hero Top Accent Stroke

A thin multicolour gradient accent for selected buttons, toggles, or as the top accent of hero containers.

```css
--gradient-hero-stroke: linear-gradient(90deg, #8B5CF6 0%, #E91E63 50%, #FF7F3F 100%);
```

Usage: thin top border, dividers, or small “active tab” strips — **never** full hero background.

### 5.3 Dashboard Feature Gradients

```css
--gradient-bhajan-of-the-month: linear-gradient(135deg, #9B5CF6 0%, #5B21B6 100%);
--gradient-book-club:           linear-gradient(135deg, #22C55E 0%, #166534 100%);
--gradient-dashboard:           linear-gradient(135deg, #FF5A5F 0%, #991B1B 100%);
--gradient-journal:             linear-gradient(135deg, #581C87 0%, #C026D3 65%, #F5D0FE 100%);
--gradient-play-it:             linear-gradient(135deg, #FB923C 0%, #F97316 100%);
--gradient-events:              linear-gradient(135deg, #0F4C81 0%, #003B70 100%);
```

Semantic roles:
- Purple: reflective / spiritual content, bhajans, journaling.  
- Green: growth, learning, Book Club.  
- Orange: activity, Play It, offerings.  
- Red: intensity, dashboard alerts (used sparingly).  
- Navy: structure, events, schedules.

### 5.4 Game Level Gradients

```css
--gradient-level-1:  linear-gradient(135deg, #22C55E 0%, #15803D 100%);
--gradient-level-2:  linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%);
--gradient-level-3:  linear-gradient(135deg, #06B6D4 0%, #0891B2 100%);
--gradient-level-4:  linear-gradient(135deg, #F97316 0%, #C2410C 100%);
--gradient-level-5:  linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%);
--gradient-level-6:  linear-gradient(135deg, #EC4899 0%, #BE185D 100%);
--gradient-level-7:  linear-gradient(135deg, #14B8A6 0%, #0F766E 100%);
--gradient-level-8:  linear-gradient(135deg, #F59E0B 0%, #D97706 45%, #92400E 100%);
--gradient-level-9:  linear-gradient(135deg, #A855F7 0%, #7E22CE 45%, #4C1D95 100%);
--gradient-level-10: linear-gradient(135deg, #FDE68A 0%, #F59E0B 30%, #B45309 65%, #78350F 100%);
```

Reading:

- Levels 1–3: growth, clarity, learning.  
- Levels 4–7: challenge, energy, mastery.  
- Levels 8–10: achievement, prestige, “epic unlock”.

### 5.5 Special Release Gradients

```css
--gradient-release-divine-dawn: linear-gradient(135deg, #F8E7B5 0%, #E9B949 28%, #B87400 60%, #6B3E00 100%);
--gradient-release-cosmic-violet: linear-gradient(135deg, #310E34 0%, #7B2482 42%, #A56AAA 72%, #E9D5FF 100%);
--gradient-release-oceanic-glow:  linear-gradient(135deg, #001224 0%, #002E5B 38%, #0F4C81 68%, #8096AD 100%);
--gradient-release-emerald-flame: linear-gradient(135deg, #14532D 0%, #16A34A 35%, #CA8A04 70%, #FACC15 100%);
--gradient-release-rose-royal:    linear-gradient(135deg, #5A0017 0%, #9D002A 32%, #E0325B 65%, #F4B4C7 100%);
```

Use for:

- Seasonal releases.  
- Festival / event unlocks.  
- Founders’ or anniversary drops.  
- Rare quote cards or featured modules.  
- Special edition dashboard panels.

### 5.6 Quote Slider Gradients

```css
--gradient-quote-01: linear-gradient(135deg, #22C55E 0%, #15803D 100%);
--gradient-quote-02: linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%);
--gradient-quote-03: linear-gradient(135deg, #A855F7 0%, #7E22CE 100%);
--gradient-quote-04: linear-gradient(135deg, #FACC15 0%, #F59E0B 100%);
--gradient-quote-05: linear-gradient(135deg, #06B6D4 0%, #0891B2 100%);
--gradient-quote-06: linear-gradient(135deg, #EC4899 0%, #E11D48 100%);
--gradient-quote-07: linear-gradient(135deg, #16A34A 0%, #CA8A04 100%);
--gradient-quote-08: linear-gradient(135deg, #2563EB 0%, #1E40AF 100%);
--gradient-quote-09: linear-gradient(135deg, #F97316 0%, #DC2626 100%);
--gradient-quote-10: linear-gradient(135deg, #F59E0B 0%, #D97706 100%);
--gradient-quote-11: linear-gradient(135deg, #D946EF 0%, #A21CAF 100%);
--gradient-quote-12: linear-gradient(135deg, #22C55E 0%, #15803D 100%);
--gradient-quote-13: linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%);
--gradient-quote-14: linear-gradient(135deg, #06B6D4 0%, #0891B2 100%);
--gradient-quote-15: linear-gradient(135deg, #F97316 0%, #C2410C 100%);
--gradient-quote-16: linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%);
--gradient-quote-17: linear-gradient(135deg, #EC4899 0%, #BE185D 100%);
--gradient-quote-18: linear-gradient(135deg, #14B8A6 0%, #0F766E 100%);
--gradient-quote-19: linear-gradient(135deg, #F59E0B 0%, #D97706 100%);
--gradient-quote-20: linear-gradient(135deg, #A855F7 0%, #7E22CE 100%);
```


### 5.7 Readability Rule for Gradients

- Always test contrast at the **brightest** point under white text or **darkest** point under dark text.  
- Aim for WCAG AA contrast (at least 4.5:1 for normal text).  
- When in doubt, add a subtle overlay:

```css
.level-card,
.quote-card {
  position: relative;
  overflow: hidden;
}

.level-card::before,
.quote-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.18);
  pointer-events: none;
}
```

This preserves the gradient while stabilising the text.

***

## 6. Colour Combination Rules

### 6.1 Approved Pairings

| Background   | Text      | Status                                   |
| :----------- | :-------- | :--------------------------------------- |
| Navy‑900     | White     | Excellent                                |
| Navy‑900     | Gold‑500  | Excellent for headings                   |
| Navy‑700     | White     | Excellent                                |
| Gold‑500     | Navy‑900  | Excellent                                |
| Teal‑500     | White     | Good                                     |
| Purple‑600   | White     | Excellent                                |
| Magenta‑600  | White     | Excellent                                |
| Orange‑500   | White     | Good (prefer bold text)                  |
| White        | Navy‑900  | Excellent                                |
| Off‑white    | Navy‑900  | Excellent                                |

### 6.2 Avoid

| Combination                      | Reason                                |
| :------------------------------- | :------------------------------------ |
| Gold text on white              | Weak readability                      |
| Navy‑900 text on Navy‑700       | Insufficient contrast                 |
| Teal‑500 beside Orange‑500 tight| Visual clash, noisy                   |
| Many gradients in one viewport  | Feels noisy, less spiritual           |
| Large red panels + red badges   | Confusing hierarchy, alert overload   |

***

## 7. Typography System

### 7.1 Font Families

```css
--font-serif: 'Playfair Display', Georgia, serif;
--font-sans:  'Poppins', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
```

### 7.2 Typography Roles

| Role            | Font            | Weight | Usage                                           |
| :-------------- | :-------------- | :----- | :---------------------------------------------- |
| Sacred display  | Playfair Display| 700    | Hero greeting, major devotional titles          |
| Page title      | Playfair Display| 700    | Main page titles                                |
| UI heading      | Poppins         | 700    | Card titles, section headings, key labels       |
| Body            | Poppins         | 400–500| Paragraphs, general UI copy                     |
| Label           | Poppins         | 700–900| Uppercase category labels, metadata             |
| Microcopy       | Poppins         | 500–700| Week numbers, question counts, streak labels    |

### 7.3 Type Scale (Guideline)

| Token       | Desktop | Mobile | Line Height | Weight | Usage                          |
| :---------- | :------ | :----- | :---------- | :----- | :----------------------------- |
| `display-xl`| 60px    | 40px   | 1.1         | 700    | Very rare landing page title   |
| `display-lg`| 48px    | 34px   | 1.15        | 700    | Hero greeting                  |
| `h1`        | 36px    | 28px   | 1.2         | 700    | Page title                     |
| `h2`        | 28px    | 24px   | 1.25        | 700    | Major section title            |
| `h3`        | 24px    | 21px   | 1.3         | 600–700| Card titles                    |
| `h4`        | 20px    | 18px   | 1.35        | 600    | Sub‑section titles             |
| `body-lg`   | 18px    | 16px   | 1.65        | 400    | Hero descriptions, long reading|
| `body-md`   | 16px    | 15px   | 1.55        | 400–500| Standard UI text               |
| `body-sm`   | 14px    | 13px   | 1.5         | 400–500| Card descriptions, hints       |
| `caption`   | 12px    | 12px   | 1.4         | 500–600| Tiny labels, metadata          |

***

### 7.4 Typography Examples from Screenshots
| Screenshot Element | Recommended Style |
| :--- | :--- |
| "Om Sai Ram, Kanichelvan" | Playfair Display Bold, 48px desktop / 34px mobile, white |
| "Lineage & Dharma: The Solar Dynasty" | Poppins Bold, 28–32px, Navy-900 on white |
| "THIS WEEK’S WISDOM" | Poppins ExtraBold, 11px, uppercase, letter spacing 0.08em |
| "MySAIYa Digital Hub Book Club" | Poppins Bold, 24–28px, white |
| "LEVEL 1" | Poppins Bold, 12px, uppercase, green pill |
| "12 Words" | Poppins SemiBold, 14–16px, gray-400 |
| Drawer links | Poppins Light/Regular, 24–30px, uppercase, wide letter spacing |

## 8. Implementation Cheat Sheet

### 8.1 Token Rules
- Always use design tokens instead of raw hex values in production components.
- Prefer semantic use over colour memorisation: use “banner”, “button”, “card”, “surface”, “text”, and “accent” roles.
- Keep gradients limited to highlights, not default surfaces.
- Use navy and neutrals for structure; use colour for meaning.

### 8.2 Core Token Usage
- Header / footer / dark hero: `--navy-900`, `--navy-800`
- Main app background: `--off-white`
- Standard cards: `--white`
- Section accents: `--gold-500`, `--gold-400`
- Notification and premium emphasis: `--purple-700` family and approved purple gradients
- Success and completion: `--teal-500`
- Activity / game areas: `--orange-500`, feature gradients, level gradients

### 8.3 Gradient Rules
- Use `--gradient-updates*` only for top updates banners and clickable alert strips.
- Use `--gradient-purple-metallic` only for premium notification or popup headers.
- Use dashboard gradients only for category cards and feature modules.
- Use level gradients only for level chips, progress cards, and achievement surfaces.
- Use quote gradients only for quote slider cards and similar rotating devotional content.

### 8.4 Accessibility Rules
- Do not place long paragraphs directly on bright gradients.
- For white text on gradients, test the lightest stop.
- For dark text on gradients, test the darkest stop.
- Add a subtle overlay when contrast feels unstable.
- Avoid gradient text for buttons, links, body copy, and form labels.

### 8.5 Motion Rules
- Hover: brighten, shift, or reveal.
- Active: darken slightly, reduce shadow, move down 1px.
- Focus: match hover visibility and add clear focus ring.
- Keep transitions short and calm: 160ms to 300ms.

### 8.6 Class Patterns

```css
/* Core surfaces */
.surface-app {
  background: var(--off-white);
  color: var(--navy-900);
}

.surface-card {
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: 24px;
  box-shadow: 0 8px 24px rgba(10, 30, 62, 0.06);
}

.surface-card--dark {
  background: var(--navy-800);
  color: var(--white);
}

/* Badge / chip */
.chip {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 0.75rem;
  border-radius: 999px;
  font: 700 12px/1 var(--font-sans);
}

.chip--gold {
  background: var(--gold-100);
  color: var(--gold-600);
}

.chip--level {
  color: #fff;
  background: var(--gradient-level-5);
}

/* Quote card */
.quote-card {
  position: relative;
  color: #fff;
  border-radius: 24px;
  overflow: hidden;
  padding: 1.25rem;
}

.quote-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.18);
  pointer-events: none;
}

.quote-card > * {
  position: relative;
  z-index: 1;
}

/* Quote slider rotation pattern */
.quote-card:nth-child(20n+1)  { background: var(--gradient-quote-01); }
.quote-card:nth-child(20n+2)  { background: var(--gradient-quote-02); }
.quote-card:nth-child(20n+3)  { background: var(--gradient-quote-03); }
.quote-card:nth-child(20n+4)  { background: var(--gradient-quote-04); color: var(--navy-900); }
.quote-card:nth-child(20n+5)  { background: var(--gradient-quote-05); }
.quote-card:nth-child(20n+6)  { background: var(--gradient-quote-06); }
.quote-card:nth-child(20n+7)  { background: var(--gradient-quote-07); color: var(--navy-900); }
.quote-card:nth-child(20n+8)  { background: var(--gradient-quote-08); }
.quote-card:nth-child(20n+9)  { background: var(--gradient-quote-09); }
.quote-card:nth-child(20n+10) { background: var(--gradient-quote-10); color: var(--navy-900); }
.quote-card:nth-child(20n+11) { background: var(--gradient-quote-11); }
.quote-card:nth-child(20n+12) { background: var(--gradient-quote-12); }
.quote-card:nth-child(20n+13) { background: var(--gradient-quote-13); }
.quote-card:nth-child(20n+14) { background: var(--gradient-quote-14); }
.quote-card:nth-child(20n+15) { background: var(--gradient-quote-15); }
.quote-card:nth-child(20n+16) { background: var(--gradient-quote-16); }
.quote-card:nth-child(20n+17) { background: var(--gradient-quote-17); }
.quote-card:nth-child(20n+18) { background: var(--gradient-quote-18); }
.quote-card:nth-child(20n+19) { background: var(--gradient-quote-19); color: var(--navy-900); }
.quote-card:nth-child(20n+20) { background: var(--gradient-quote-20); }
```

## 9. Component Gallery

### 9.1 Top Navigation
Purpose: orientation, identity, primary navigation.  
Style:
- Navy background (`--navy-900`)
- White text
- SSIOM / MySAIYa branding on left
- Rounded active pill or gold underline for selected item
- Sticky on desktop and mobile

### 9.2 Hero Welcome Card
Purpose: spiritual greeting and primary orientation.  
Style:
- White or navy-800 surface
- Playfair Display for sacred heading
- Poppins for supporting text
- Optional thin `--gradient-hero-stroke` accent on top edge
- One primary CTA only

### 9.3 Updates Banner
Purpose: time-sensitive announcements and campaign highlights.  
Style:
- `--gradient-updates`
- White text
- Rounded full-width strip
- Optional ticker motion or dismiss action
- Hover and active states only if clickable

### 9.4 Feature Dashboard Cards
Purpose: route user into major modules.  
Types:
- Bhajan of the Month
- Book Club
- Journal
- Play It
- Events
- Dashboard summary

Style:
- Use approved dashboard gradients only
- Large rounded corners
- Bold title + short descriptor + icon
- No more than 2 lines of text before action

### 9.5 Quote Slider Card
- **Component ID:** `homepage-quotes-slider`
- **Component Name:** Sathya Sai Baba Quotes Slider
- **Purpose:** To inspire homepage visitors through bite-sized wisdom from Bhagawan Sri Sathya Sai Baba while providing an engaging, elegant, and accessible browsing experience that encourages reflection, sharing, and future revisit.
- **Content Requirements:**
  - Contains 60 unique Sathya Sai Baba quotes.
  - No quote shall repeat until all 60 quotes have been displayed.
  - After completion of the 60-quote cycle, the sequence restarts.
  - Quote order is randomized at the start of each new cycle.
- **Layout & Structure:**
  ```
  ┌────────────────────────────────────────────────────────┐
  │ ♥ [Save]          [Facebook Share]                      │
  │                                                        │
  │                  " [Main Quote Text] "                 │
  │                                                        │
  │                 - Sri Sathya Sai Baba                  │
  │                                                        │
  │            #saiquotesallmysaiyashouldknow              │
  └────────────────────────────────────────────────────────┘
  ```
- **Typography Specifications:**
  - **Quote Body:** Playfair Display, Weight: 600, Color: `#FFFFFF`, Desktop Size: `clamp(1.8rem, 3vw, 3rem)`, Mobile Size: `clamp(1.2rem, 5vw, 1.8rem)`, Line Height: 1.4, Max Width: 70%, Center aligned. The quote body must occupy the largest visual space on the card.
  - **Author Attribution:** `-- Sri Sathya Sai Baba`, Playfair Display Italic, Weight: 400, Size: 75% of quote text size, Opacity: 90%, Center aligned.
  - **Footer Hashtag:** `#saiquotesallmysaiyashouldknow`, Open Sans, Weight: 500, Size: 0.85rem, Opacity: 80%, Center aligned, Positioned at the bottom center.
- **Card Dimensions:**
  - **Width:** 100% (Responsive: `width=device-width`).
  - **Height:** Fixed height (Recommended: Desktop: 420px, Tablet: 380px, Mobile: 340px). The height must remain constant between transitions to prevent content jumps.
- **Colour & Theme System:**
  - Uses gradients `--gradient-quote-01` to `--gradient-quote-20`.
  - The system cycles through color themes randomly, ensuring no two consecutive slides use the same background color.
- **Auto-Rotation Behaviour:**
  - Display duration is calculated at 1 second per 3 words.
  - Minimum duration: 5 seconds.
  - Maximum duration: 10 seconds.
  - *Timing Examples:* 9 words = 5 sec, 15 words = 5 sec, 24 words = 8 sec, 36 words = 10 sec, 50 words = 10 sec.
  - **Pause Rules:** Auto-rotation immediately pauses when a user hovers over the card, focuses via keyboard, or touches and holds the card on mobile.
- **Manual Navigation:**
  - Navigation arrows (←/→) remain hidden until hover.
  - Arrows fade in smoothly, feature large touch targets, pointer cursors, and WCAG-compliant contrast.
- **User Control Logic:**
  - Manual navigation immediately stops auto-rotation.
  - A discreet "Resume Auto Play" button appears to allow the user to resume automatic rotation.
- **Transition Effects:**
  - Allowed: Crossfade and soft opacity transitions with a duration of 400ms–600ms.
  - Forbidden: Aggressive horizontal slides, bounce effects, parallax, or zoom effects. Visual tone must remain calm and reflective.
- **Infinite Looping:**
  - Seamless loop with no visible reset, no flash during cycle restart, and no loading state.
  - Supporting swipe left and swipe right gestures (50px minimum threshold) on mobile without interfering with vertical page scrolling.
- **Accessibility Requirements:**
  - **Keyboard:** ← (Previous Quote), → (Next Quote), Tab (Navigate Controls), Enter/Space (Activate Control).
  - **Screen Readers:** Required `aria-label` values: `aria-label="Previous Quote"`, `aria-label="Next Quote"`, `aria-label="Save Quote"`, `aria-label="Share Quote"`. Quotes must announce correctly.
- **Interactive Features:**
  - **Save Quote Feature:** Heart icon (♥) in top-right. Logged-in users save quote to User Profile -> Saved Quotes Collection. Guest users clicking it will see a Sign In / Create Account modal with: "Om Sai Ram. Create your free MySAIYa account to save favourite quotes and revisit them later."
  - **Social Sharing:** Facebook icon beside heart icon with 60% opacity (100% on hover). Prepopulates Quote, Author, and the `mysaiya.com` URL.
- **Performance Requirements:**
  - Initial load: <100ms render, 60 FPS animation, WCAG 2.1 AA compliant, and must pass all Google Core Web Vitals benchmarks.


### 9.6 Level / Streak Card
Purpose: show user progress and momentum.  
Style:
- Use `--gradient-level-*`
- Rounded card or chip surface
- Strong numeric emphasis
- One progress metric per card
- Gold accent allowed for milestone thresholds

### 9.7 Special Release Card
Purpose: rare, ceremonial, or festival-linked content.  
Style:
- Use `--gradient-release-*`
- More decorative than standard cards
- Reserved for high-importance modules
- Avoid placing too many in one viewport

### 9.8 Popup Header
Purpose: focused task entry, reminders, premium notices.  
Style:
- Use `--gradient-purple-notification` or `--gradient-purple-metallic`
- White title text
- Neutral modal body below
- Keep gradient only in header, not full modal body

### 9.9 Buttons
Types:
- Primary navy button
- Gold spiritual CTA
- Purple alert / notification CTA
- Ghost secondary button

Style:
- Rounded, clear hover/active states
- Solid text colour, never gradient text
- Minimum 44px height
- Motion limited to subtle shift, glow, or sheen

### 9.10 Badges and Chips
Purpose: streaks, week numbers, tags, categories, state labels.  
Style:
- Pill shape
- High-contrast text
- Minimal padding
- Gold for achievements, teal for completion, purple for reflection, orange for active/live
