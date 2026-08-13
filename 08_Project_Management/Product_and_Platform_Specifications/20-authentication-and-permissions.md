# Authentication and permissions delivery checklist

## Build/verify

- [ ] Google sign-in, linked safely to the existing account model
- [x] Member sign-in foundation (email/password implementation exists)
- [x] Role detection from Firebase custom claims
- [ ] Explicit account status UI and transitions
- [x] First-login/onboarding flow
- [x] Versioned privacy acceptance
- [x] Role-based routing and protected Committee Hub
- [x] Server/rules-based permission enforcement
- [ ] Session listing/revocation validation
- [x] Account recovery routes
- [ ] User deactivation workflow and retention handling

## Role test scenarios

Test visitor, unverified member, verified member, contributor, moderator, committee user with/without MFA, administrator, suspended account and deactivated account. For each: sign-in outcome, allowed routes/actions, direct-URL denial, API denial, Firestore rule denial and audit-log expectation.

Do not continue to new dashboard/committee capability until every scenario is automated or recorded as a manual test with evidence.
