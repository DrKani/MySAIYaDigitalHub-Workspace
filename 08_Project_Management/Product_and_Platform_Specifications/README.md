# MySAIYa Digital Hub — Platform Specifications

This folder is the planning index for the hub. It complements, but does not replace, the implementation sources of truth in `10_Source_Code/webapp/apps/web/docs/`.

## Working order

1. Stabilise public UI modules from `19-component-inventory.md`.
2. Confirm authentication and permissions against `01-user-roles.md`, `09-permissions-matrix.md`, and `20-authentication-and-permissions.md`.
3. Execute role-by-role tests before expanding dashboard or committee functions.

## Authority

- Routes and navigation: `apps/web/docs/10-sitemap.md`
- Data collections: `apps/web/docs/09-database-schema.md`
- Visual tokens: `apps/web/docs/05-comprehensive-visual-design-system.md`
- Firestore and Storage enforcement: `firestore.rules`, `storage.rules`

Specifications marked **Decision required** are intentionally non-binding until an owner approves them.
