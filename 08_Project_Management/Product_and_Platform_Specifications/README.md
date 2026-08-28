# MySAIYa Digital Hub — Platform Specifications

This folder holds planning decisions for the hub. The implementation sources of truth live in `10_Source_Code/webapp/apps/web/docs/`.

## Working order

1. Stabilise public UI modules from `19-component-inventory.md`.
2. Confirm authentication and permissions against `01-user-roles.md`, `09-permissions-matrix.md`, and `20-authentication-and-permissions.md`.
3. Execute role-by-role tests before expanding dashboard or committee functions.

## Authority

- Routes and navigation: `10_Source_Code/webapp/apps/web/docs/10-sitemap.md`
- Data collections: `10_Source_Code/webapp/apps/web/docs/09-database-schema.md`
- Visual rules and tokens: `01_Brand_Identity/readme.md` and `01_Brand_Identity/tokens/`
- Firestore and Storage enforcement: `10_Source_Code/webapp/firestore.rules` and `10_Source_Code/webapp/storage.rules`

Specifications marked **Decision required** are intentionally non-binding until an owner approves them.
