Action control for MySAIYa — use the gold gradient `primary` for the single sacred CTA on a view, and lower-emphasis variants for everything else.

```jsx
<Button variant="primary" uppercase>Join Now</Button>
<Button variant="secondary">Learn More</Button>
<Button variant="tertiary">Cancel</Button>
```

Variants: `primary` (gold gradient, navy text — one per view), `secondary` (navy, hover→purple), `tertiary` (outline), `destructive` (red), `purple` (purple-glow, for CTAs inside alerts). Sizes `sm`/`md`/`lg` (all ≥40px). Set `uppercase` only for labels of ≤3 words. Never put gradient on the text. Pass `iconLeft`/`iconRight` with a 20px Lucide icon node.
