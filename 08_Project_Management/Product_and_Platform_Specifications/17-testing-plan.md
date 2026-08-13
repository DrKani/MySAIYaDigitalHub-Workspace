# Testing plan

## Required test layers

1. Unit: validation, role resolution, state transitions and formatting.
2. Integration: Firebase rules, protected API/route handling, account recovery and consent records.
3. End-to-end: public journeys, responsive navigation, first login and every role.
4. Non-functional: keyboard/screen-reader review, mobile breakpoints, performance and security checks.

## Release gates

No critical accessibility, security or data-loss defect; role matrix scenarios pass; production environment/secrets validated; rollback owner and monitoring path documented.
