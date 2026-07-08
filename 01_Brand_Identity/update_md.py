file_path = "/Users/kanichelvan/Library/Mobile Documents/com~apple~CloudDocs/MySAIYaDigitalHub/01_Brand_Identity/visual_design_system.md"

with open(file_path, 'r') as f:
    content = f.read()

# Replace 5.6 Readability Rule with 5.7 Readability Rule
content = content.replace("### 5.6 Readability Rule for Gradients", "### 5.7 Readability Rule for Gradients")

# Insert 5.6 Quote Slider Gradients before 5.7
quote_gradients = """### 5.6 Quote Slider Gradients

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
```

Suggested use:
- 01–03: uplifting, devotional, calm.
- 04–07: energy, celebration, teaching moments.
- 08–11: stronger emotional or featured quote states.

"""

content = content.replace("### 5.7 Readability Rule for Gradients", quote_gradients + "### 5.7 Readability Rule for Gradients")

# Replace everything from "## 8. Layout System" to the end with the new content
new_sections = """## 8. Implementation Cheat Sheet

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
.quote-card:nth-child(11n+1)  { background: var(--gradient-quote-01); }
.quote-card:nth-child(11n+2)  { background: var(--gradient-quote-02); }
.quote-card:nth-child(11n+3)  { background: var(--gradient-quote-03); }
.quote-card:nth-child(11n+4)  { background: var(--gradient-quote-04); color: var(--navy-900); }
.quote-card:nth-child(11n+5)  { background: var(--gradient-quote-05); }
.quote-card:nth-child(11n+6)  { background: var(--gradient-quote-06); }
.quote-card:nth-child(11n+7)  { background: var(--gradient-quote-07); color: var(--navy-900); }
.quote-card:nth-child(11n+8)  { background: var(--gradient-quote-08); }
.quote-card:nth-child(11n+9)  { background: var(--gradient-quote-09); }
.quote-card:nth-child(11n+10) { background: var(--gradient-quote-10); color: var(--navy-900); }
.quote-card:nth-child(11n+11) { background: var(--gradient-quote-11); }
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
Purpose: devotional inspiration, reflective pause, emotional warmth.  
Style:
- Use `--gradient-quote-01` to `--gradient-quote-11`
- White text with overlay when needed
- Large quotation mark, compact attribution if present
- Avoid long paragraphs; keep quotes concise
- Rotate gradients predictably or randomly with controlled contrast checks

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
"""

import re
content = re.sub(r'## 8\. Layout System.*', new_sections, content, flags=re.DOTALL)

with open(file_path, 'w') as f:
    f.write(content)
