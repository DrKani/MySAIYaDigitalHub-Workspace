Labelled text field with helper text and validation. Focus shows a gold border; errors show a red border + warning icon (never a red fill).

```jsx
<Input label="Email address" required hint="We'll never share your email." type="email" />
<Input label="Email address" error="Please enter a valid email address." />
```

Pass `label`, `hint`, `error`, `required`, plus any native input attribute (`type`, `placeholder`, `value`, `onChange`). Field is 48px tall and wires `aria-invalid` / `aria-describedby` automatically.
