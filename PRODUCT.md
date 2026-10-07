# MySAIYa Digital Hub

<!-- impeccable:product-schema 1 -->

## Platform

web

## Scope and Authority

Confirmed by the project owner on 1 October 2026: this record covers the whole Hub—public website, member experience and committee workspace—and uses the existing master vision and brand commitments as product context.

This is a durable product summary, not a replacement for detailed specifications. The [master vision](08_Project_Management/Product_and_Platform_Specifications/00-master-vision.md) governs product direction. The [workspace README](README.md) identifies canonical sources for routes, data, access, public copy and legal copy. Executable application rules define current behaviour; planned capabilities must not be presented as shipped features.

## Users

The primary audience is Malaysian Sai Young Adults aged 18–40 within the Sathya Sai International Organisation of Malaysia (SSIOM). Members need trusted resources, spiritual learning, fellowship, programmes and practical ways to serve, often through smartphones and with varying digital confidence.

The Hub also serves newcomers, SSE graduates, spiritual seekers, young professionals, volunteers, emerging leaders, contributors and prospective partners. Committee members and SSIOM leaders need secure tools for coordination and institutional knowledge. Personas describe needs; approved access roles determine permissions.

## Product Purpose

Provide a trusted digital home that connects spiritual growth, selfless service, learning, leadership and community participation. Digital activity should strengthen real relationships, spiritual practice and service in Sai Centres and Malaysian communities.

Success means people understand MySAIYa, find a useful next step, join programmes or service opportunities, access trustworthy resources and contribute meaningfully. Committee members should complete routine work without specialist technical knowledge. Measures should reflect task completion, participation, learning, content usefulness, accessibility and reliability rather than empty engagement.

## Positioning

The Hub is the digital home of MySAIYa within SSIOM, grounded in Malaysian community life and the teachings of Bhagawan Sri Sathya Sai Baba. Its guiding approach is Service, Adoration and Illumination. It connects a public gateway, personal member continuity and protected committee operations around the same community and mission.

## Operating Context

The participation journey is Discover → Learn → Participate → Connect → Grow → Serve → Lead.

- Public visitors discover MySAIYa, teachings, programmes, events, resources, stories and Sai Centres without an account.
- Members gain continuity through profiles, saved resources, learning, programme participation, progress and approved contributions as capabilities become available.
- Authorised committee users coordinate programmes, content, moderation, resources, reporting and organisational knowledge through protected workflows.

The existing application uses Next.js, React and Firebase under `10_Source_Code/webapp/`, which is a separate Git repository. Its development entry is `npm run dev` from that directory. Read its applicable agent instructions before editing application code.

## Capabilities and Constraints

- Public information must remain accessible without registration. Accounts add continuity and protected services.
- The product direction includes public information, member participation, interactive learning and committee operations. Delivery status must be checked against the application and its documentation.
- Recognition should encourage learning, consistency, service and collaboration. Do not rank devotion or turn service into a points contest.
- Collect only data needed for each feature. Standard profiles must not collect NRIC or passport numbers. Sensitive programme data needs a separately justified, consented and restricted workflow.
- Privileged roles require administrator approval and least-privilege access; profile choices or organisational email addresses cannot grant committee access. Follow canonical access specifications and executable rules for enforcement.
- Separate consent purposes where applicable. Public pages and search must not expose protected content or member information.
- English is the launch language. Architecture should support Bahasa Malaysia, Tamil and Simplified Chinese while preserving spiritual terminology and page relationships.
- Community tools require moderation, safeguarding and consent processes before launch. New features need an accountable owner and support path.

## Brand Commitments

Preserve the name MySAIYa Digital Hub, its SSIOM relationship and the approved identity and assets in [the canonical brand package](01_Brand_Identity/readme.md). That package remains the authority for visual rules; this record does not redefine them.

Voice is calm, warm, sincere and devotional while remaining contemporary, inclusive and understandable. Avoid preachy or corporate language. Respect approved organisational descriptions, devotional greetings and attribution of teachings. Present Malaysian community life and spiritual imagery with dignity.

## Evidence on Hand

- [Master vision](08_Project_Management/Product_and_Platform_Specifications/00-master-vision.md): purpose, audiences, principles and intended outcomes.
- [Platform specifications](08_Project_Management/Product_and_Platform_Specifications/README.md): planning and authority boundaries.
- [Brand package](01_Brand_Identity/readme.md): approved identity, voice and asset references.
- `03_Written_Content/`: public copy and FAQ material.
- `02_Visual_Media/` and `01_Brand_Identity/assets/`: existing visual assets; verify each asset's suitability before use.
- `06_Legal_Documents/`: legal and consent copy.
- `10_Source_Code/webapp/apps/web/docs/`: application routes, content, data and operational specifications.

Do not invent testimonials, participation statistics, success claims or implementation status. Check factual content against its canonical source.

## Product Principles

1. Keep public discovery open and give newcomers a clear next step.
2. Strengthen fellowship, service and personal growth beyond the screen.
3. Protect privacy and grant access according to approved responsibility.
4. Make core journeys inclusive, accessible and practical on mobile connections.
5. Prefer reliable, supported capabilities that answer real needs.

## Accessibility & Inclusion

Design and test against WCAG 2.2 AA, including keyboard and assistive-technology access, reduced-motion support and alternatives for media. Support varied devices, slower Malaysian mobile connections, languages and levels of digital confidence. Core journeys must be usable on smartphones and scale to tablets and desktops.

## Open Decisions

Feature readiness, release priorities, named operational owners and numerical outcome targets must be resolved in their canonical implementation and planning records. This initialization does not establish new commitments for those items.
