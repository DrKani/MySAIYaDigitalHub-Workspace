# Component inventory and build sequence

| Module | Current evidence | Next action |
|---|---|---|
| Header / hero header | `Header.js`, `Hero.tsx` | Audit props, breakpoints and accessibility |
| Footer | `Footer.js` | Done; regression-test all public routes |
| Public navigation | Header/navigation docs | Consolidate active, focus and menu states |
| Hub sidebar | not yet shared | Specify and build after public UI stabilises |
| Mobile navigation | Header | Test drawer, focus trap and route changes |
| Buttons, cards, forms | mixed individual components | Create shared primitives/tokens |
| Tables and application states | no shared primitives confirmed | Specify before consuming screens |
| Modals/notifications/profile/widgets | partial feature-specific evidence | Define contracts, then build reusable modules |

Each module requires variants, responsive behaviour, loading/empty/error/success states, accessibility acceptance criteria and visual regression coverage before being declared stable.
