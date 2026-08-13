# Google Workspace integration

Google Workspace integrations are for the authorised Admin/Committee Hub, not a separate parent or guardian account flow.

**Decision required:** confirm the approved administrative services, data owners and retention policies before implementation. Likely uses include administrative Calendar links, Drive-hosted committee resources and organisational email/notifications. Google Identity sign-in is separate from this administrative scope and should be introduced only if explicitly approved.

Use approved service accounts or OAuth clients only; apply least-privilege scopes; never place credentials in source control; document data movement and user consent. All access must remain subject to the existing role and permission model.
