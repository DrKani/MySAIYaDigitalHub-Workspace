Fixed-height gradient card for the homepage Sathya Sai Baba quote slider. Quote (Playfair Display) is the largest element.

```jsx
<QuoteCard index={3} quote="Love all, serve all." />
```

`index` (1-based) cycles the 20 quote gradients; consecutive cards should use different indices. Light gradients (4, 7, 10, 19) auto-switch text to navy. `attribution` and `hashtag` have devotional defaults. Crossfade between cards — never aggressive slides.
