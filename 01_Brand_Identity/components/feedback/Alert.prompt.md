Consistent semantic messaging — inline, banner or toast. Always carries an icon plus a clear, calm, human title. Never communicate with colour alone.

```jsx
<Alert severity="success" title="Registration submitted">
  We have sent a confirmation to your email.
</Alert>
<Alert severity="devotional" title="Om Sai Ram" icon={<Sparkles/>}>
  Today's reflection is ready in your Journal.
</Alert>
```

Severities: `success`, `info`, `warning`, `error`, `devotional` (Sai quote / festival), `achievement` (badge / level up). `error` announces with `role="alert"`; the rest are polite `role="status"`. Add `onClose` for a dismiss button and `action` for a CTA row.
