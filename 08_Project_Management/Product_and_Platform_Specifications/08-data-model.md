# Data model

Use the implemented Firestore schema as the source of truth: `apps/web/docs/09-database-schema.md` and `src/types/database.ts`.

Key domains: user profiles and consent history; learning/progress; events; submissions; role requests and invitations; notifications; content; and append-only audit logs. Every record must define owner, access rule, retention rule and audit requirement before implementation.

Never introduce a collection or sensitive field without a schema, Firestore rules change and migration/rollback note.
