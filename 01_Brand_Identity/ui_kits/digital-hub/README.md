# Digital Hub — UI kit

A high-fidelity recreation of the **MySAIYa Digital Hub** member homepage, composed entirely from the design-system components.

## Files
- `index.html` — interactive entry point. Renders the homepage; click the **Play It** feature card to open an interactive quiz screen, then **Back to Home**.
- `hub-screens.jsx` — all screen sections, exported to `window.HubApp`:
  - `UpdatesTicker` — top announcement strip (`--gradient-updates`)
  - `HubHeader` — navy sticky header with brand block, search, bell, avatar; gold-dot active nav state
  - `HeroWelcome` — navy-800 hero with gradient top stroke and a single gold CTA
  - `FeatureGrid` — gradient `FeatureCard` module tiles
  - `ProgressPanel` — streak / points / badges stats + level progress + achievement alert
  - `QuoteSlider` — auto-rotating crossfade `QuoteCard` with save/share + dots
  - `PlayItScreen` — quiz container with teal-correct / magenta-incorrect answer states

## Notes
- Icons are [Lucide](https://lucide.dev) via the UMD CDN (`lucide.createIcons()`), matching the locked semantic icon set in the README.
- This is a cosmetic recreation: navigation and quiz logic are illustrative, not production behaviour.
