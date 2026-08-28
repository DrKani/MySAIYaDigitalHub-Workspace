# Design system

Use the canonical package at `01_Brand_Identity/`:

- `readme.md` defines brand intent and usage rules.
- `tokens/` defines machine-readable values.
- `components/` contains reusable reference components.
- `guidelines/` and `ui_kits/` show approved applications.

`10_Source_Code/webapp/apps/web/docs/05-comprehensive-visual-design-system.md` explains how the live app consumes the package. It does not define a second set of tokens.

Modules must use semantic tokens, keyboard-accessible interactions, visible focus states, 44px touch targets where practical, responsive layouts and plain-language status copy. Do not introduce ad-hoc colours, spacing scales or route-specific component variants when a shared primitive is appropriate.

Component readiness is tracked in `19-component-inventory.md`.
