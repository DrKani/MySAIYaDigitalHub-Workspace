# Information architecture

```mermaid
flowchart TD
  Public[Public website] --> Discover[About, programmes, resources, updates]
  Public --> Connect[Contact, join, directory, feedback]
  Account[Account] --> Onboarding[Verification, profile, consent]
  Account --> Hub[Member dashboard]
  Hub --> Personal[Learning, events, journal, achievements, profile]
  Hub --> Committee[Committee Hub: authorised users only]
```

The public site must work without an account. The dashboard is personal; Committee Hub is a separate privileged surface. The route register/sitemap governs labels and URLs.
