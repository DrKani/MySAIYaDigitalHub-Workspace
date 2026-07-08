# MySAIYa Digital Hub — Navigation Menu Structure
Version 2.0 — 2026-07-09. Matches Sitemap v3.0 (`10_Source_Code/webapp/apps/web/docs/10-sitemap.md`), which is the single source of truth for label → route mapping.

## Desktop Header

### Persistent Header

| Area | Guest / visitor | After login |
|---|---|---|
| Left | MySAIYa logo; site title: **MySAIYa Digital Hub** | (unchanged) |
| Centre | Global **search form field** (submits to `/search`) · **Sign up** button · **Sign in** button | Search form field · **Sign out** button |
| Right | **Language selector** · **notification icon** · **hamburger icon** (opens primary navigation megamenu) | Language selector · notification icon · hamburger icon · **profile avatar** · **My Dashboard** button |
| Role-aware addition | — | **Committee Hub** button for approved committee roles only |

Notes:
- The notification icon targets `/dashboard/notifications`; for guests it prompts sign-in.
- The hamburger is present at ALL breakpoints — primary navigation lives behind it on desktop too.
- "My Dashboard" inside the menu is **non-clickable and muted for guests/visitors**.

### Hamburger → Primary Navigation (collapsed)

1. My Dashboard *(muted, non-clickable for guests)*
2. MySAIYa 101
3. MySAIYa in Action
4. MySAIYa FunZone
5. MySAIYa Connects
6. FAQ

### Desktop Megamenu (expanded tree)

#### My Dashboard *(members only; muted for guests)*
- My Profile
- My Briefcase
- My Badges and Certificates
- My Journal
- My Events
- My Progress

#### MySAIYa 101
- **Bhagawan Sri Sathya Sai Baba**
  - His Life
  - His Message
  - His Work
- **SSSIO, SSIOM**
  - SSIOM Wings
  - Sai Centre Directory
- **MySAIYa**
  - What, Why, and How of MySAIYa
  - Guidelines and Codes
  - MySAIYa Leaders

#### MySAIYa in Action
- **Leadership & Youth Development**
  - YYLP/SSILP · MSYLP · Youth Vikas · Parent's Appreciation Day · RISE FOR VIP · DARTS · SSEHV
- **Spiritual and Cultural**
  - Bhajans · Vedic Renaissance · Temple Adoption
- **Community Service**
  - FGIS · Community Adoption Program · HOPE · Walk for Values · Community Cleaning Club · Tree Planting · Feed the Homeless · Stray No More · Medical Camps and Blood Donations
- **Upcoming Events, Updates and Announcements**
- **Past Events**
  - ABC · SHAKTHI · STAR · SAI RAM MONSOON

#### MySAIYa FunZone
- MySAIYa Blog it
- MySAIYa Play it — Quotescapes · Crosswords · Word Search · Trivia · Adventure
- MySAIYa Story it *(member-only story learning modules)* — nine His Story chapters
- MySAIYa Read it (Book Club) — 2026: Ramakatha Rasavahini
- MySAIYa Sing it — Sweet is Thy Name (YouTube playlist) · Learn the Sai Music *(member-only gamified module, nine chapters)*
- MySAIYa Talk it — Chai with Sai · InSAIde Scoop
- MySAIYa Meditate it — guided meditation resources
- MySAIYa Eat it — gamified "Diet the Sai Way" modules

#### MySAIYa Connects
- MySAIYa Dashboard — gamified leaderboard, forums, polls *(members only)*
- MySAIYa Spotlight
- Get Involved
  - Join / sign up (registration wizard link)
  - Volunteer opportunities / general interest form
  - Stay Updated — newsletter subscription + social platform links
  - Hangouts — virtual event schedule
- Contact and Feedback
  - General inquiries
  - Feedback — website and programme feedback
  - Contacts — approved MySAIYa committee, SSIOM public contacts, centre-directory links
- Submissions
  - Testimonial submission and consent
  - Programme report or write-up submission
  - Blog contribution submission

#### FAQ
- Getting Started
- Bhagawan Sri Sathya Sai Baba
- SSIOM and SSSIO
- Membership
- Events
- Resources
- Privacy and Account

## Mobile Header

| Area | Elements |
|---|---|
| Left | MySAIYa logo |
| Right | Language selector, notification icon, hamburger menu |
| Drawer top | Search field · **Sign up** and **Sign in** buttons; after login show avatar, **My Dashboard**, **Sign out** |
| Drawer body | Accordion sections matching the six primary menu items (My Dashboard muted for guests) |
| Drawer footer | Contact, newsletter, accessibility, privacy, social-media links |
| Approved committee user | Show Committee Hub as a separate role-aware entry after login |

## Interaction Rules

- The hamburger menu is the single navigation entry point at all breakpoints; do not rely on hover-only behaviour.
- Open submenus by click/tap using accordion or flyout controls with visible expanded state.
- Keep touch targets comfortably sized.
- Preserve the user's current location when opening and closing the menu.
- Use a visible focus state for keyboard users; menu must be fully keyboard-operable (Esc closes).
- Include a "Skip to main content" link.
- Muted "My Dashboard" for guests must expose `aria-disabled="true"` with a sign-in hint.

## Contextual Navigation

### Breadcrumbs
Show visible breadcrumbs immediately below the header on all pages deeper than the section landing page.

Example:

`Home > MySAIYa 101 > SSSIO, SSIOM > Sai Centres > Selangor > Sri Muda`

### Dashboard Navigation
Use a dashboard-specific side navigation:
- Overview
- My Profile
- My Briefcase
- My Journal
- My Events
- My Badges and Certificates
- My Progress
- Community
- Notifications
- Security
- Privacy

### Committee Navigation
Use a separate committee side navigation:
- Strategy
- Toolkit
- Content
- Submissions
- Applications
- Reports of Concern *(restricted roles only)*
- Events
- Centres
- Members
- Newsletter
- Analytics
- Audit Log
