# Permissions matrix

| Capability | Visitor | Member | Contributor | Moderator | Committee | Admin |
|---|---:|---:|---:|---:|---:|---:|
| Read public content | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Manage own profile/consent | — | ✓ | ✓ | ✓ | ✓ | ✓ |
| Use member dashboard | — | ✓ | ✓ | ✓ | ✓ | ✓ |
| Submit permitted content | — | — | ✓ | ✓ | ✓ | ✓ |
| Moderate assigned content | — | — | — | ✓ | ✓ | ✓ |
| Use Committee Hub | — | — | — | scoped | scoped | ✓ |
| Manage roles/invites | — | — | — | — | — | ✓ |
| Read audit log | — | — | — | — | scoped | ✓ |

`scoped` means explicit server-side permission and least-privilege access. UI visibility is never enforcement: Firebase rules and server handlers must independently deny unauthorised reads/writes.
