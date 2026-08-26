Gradient module tile that routes into a major Hub area. One per feature; keep the descriptor to two lines.

```jsx
<FeatureCard feature="play-it" title="Play It" description="Quizzes & games that grow your wisdom." icon={<Gamepad2 />} />
<FeatureCard feature="book-club" title="Book Club" description="Ramakatha Rasa Vahini, week by week." />
```

`feature`: `bhajan` / `book-club` / `journal` / `play-it` / `events` / `dashboard` — each maps to its approved gradient. Pass a 24px white icon node. Children render below the descriptor (e.g. a progress chip).
