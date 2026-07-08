file_path = "/Users/kanichelvan/Library/Mobile Documents/com~apple~CloudDocs/MySAIYaDigitalHub/01_Brand_Identity/visual_design_system.md"

new_content = """# MySAIYa Digital Hub — Complete Design & Visual System

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

### 5.6 Readability Rule for Gradients

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
"""

with open(file_path, 'r') as f:
    lines = f.readlines()

idx = -1
for i, line in enumerate(lines):
    if "### 7.4 Typography Examples from Screenshots" in line:
        idx = i
        break

if idx != -1:
    remaining_lines = lines[idx:]
    with open(file_path, 'w') as f:
        f.write(new_content)
        f.write("\n")
        f.writelines(remaining_lines)
    print("Successfully replaced.")
else:
    print("Could not find line '### 7.4 Typography Examples from Screenshots'")
