# Security and privacy

- Enforce authorisation server-side and in Firebase rules.
- Require verified email; require MFA for privileged access.
- Use safe redirects, rate limiting, expiring recovery links and session revocation.
- Separate necessary account consent from optional communications consent; store version and timestamp.
- Minimise personal data, protect sensitive reports, and publish data-request/retention procedures.
- Threat-model all integrations before launch and resolve critical/high findings before production.

Supporting policies reside in `06_Legal_Documents/`; implementation details begin with `05_Technical_Assets/Integration_Docs/01-authentication-flow.md`.
