# MySAIYa Digital Hub — Consent Integration Strategy

## Governing Design Principle

Collect only the information needed for a clearly stated purpose. Present required acknowledgements and optional permissions separately. Do not pre-select optional permissions. Store a versioned record of each choice so that withdrawal and audit review remain possible.

## Consent Touchpoints

| Touchpoint | Required acknowledgement or optional consent | Recommended UI | Withdrawal or update route |
|---|---|---|---|
| Account creation | Privacy Notice acknowledgement; Terms of Use acceptance | Required checkboxes with links and version labels | `/dashboard/privacy` |
| Young-adult eligibility | Age-eligibility confirmation; minimum required profile data | Explain why the information is needed | `/dashboard/profile` |
| Newsletter signup | Optional marketing or newsletter consent | Separate unticked checkbox | `/consent-preferences` or `/dashboard/privacy` |
| Cookies and optional analytics | Optional preference by category | Consent banner with essential cookies separated from optional cookies | `/consent-preferences` |
| Event registration | Registration processing acknowledgement | Event-specific privacy summary | Event registration record |
| Event photography and video | Optional publication permission, separated from attendance | Separate unticked checkbox; allow decline without blocking ordinary registration unless operationally essential and clearly explained | `/dashboard/privacy` and event support process |
| Testimonial submission | Optional public-publication permission | Show intended channels and allow withdrawal request | `/dashboard/community` |
| Photo upload | Rights declaration and identifiable-person consent confirmation | Require uploader confirmation before upload | `/dashboard/community` |
| Article or report submission | Publication and editorial-moderation acknowledgement | Submission-specific acknowledgement | `/dashboard/community` |
| Forums, polls, and comments | Community Guidelines acknowledgement | Accept at first participation and after major guideline changes | `/dashboard/community` |
| Data request | Access, correction, consent withdrawal, or account-closure request | Dedicated request form | `/data-request` |
| Event involving a participant under 18 | Guardian consent where applicable | Separate guardian flow | Event-specific workflow |

## Consent Record Data Model

```ts
type ConsentRecord = {
  id: string;
  userId?: string;
  emailHash?: string;
  consentType:
    | "privacy_notice_acknowledgement"
    | "terms_acceptance"
    | "newsletter"
    | "optional_analytics"
    | "event_media"
    | "testimonial_publication"
    | "photo_upload_declaration"
    | "community_guidelines"
    | "guardian_consent";
  wordingVersion: string;
  purpose: string;
  scope?: string;
  relatedEntityType?: "account" | "event" | "submission" | "newsletter";
  relatedEntityId?: string;
  status: "granted" | "declined" | "withdrawn";
  capturedAt: string;
  withdrawnAt?: string;
  source: "web" | "admin_import" | "paper_form";
};
```

## UI Pattern for Event Registration

1. Show event details.
2. Collect registration details.
3. Display a short privacy summary and link to the full notice.
4. Ask for any operationally required acknowledgement.
5. Present photo and video consent separately.
6. Present newsletter consent separately.
7. Show a review screen.
8. Save the consent version and timestamp with the event registration.
9. Send a confirmation email with a link to update preferences or contact the organiser.

## Data-Minimisation Rules

- Do not collect MyKad or passport numbers for ordinary account creation.
- Keep date of birth or age-verification collection proportionate to the membership rule.
- Do not publish personal contact details in the Sai Centre directory unless SSIOM has approved the publication.
- Use role-based or shared contact channels where possible.
- Define a retention period for each form and review expired records regularly.
- Record consent withdrawal without erasing the historical fact that a lawful consent record once existed.
