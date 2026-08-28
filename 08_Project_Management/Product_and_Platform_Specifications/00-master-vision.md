# MySAIYa Digital Hub master vision

## Purpose

MySAIYa (Malaysian Sai Young Adults) serves members aged 18 to 40 within the Sathya Sai International Organisation of Malaysia (SSIOM). It brings together Malaysian identity, fellowship, spiritual growth, selfless service, cultural appreciation and leadership development. Its work follows SSIOM governance and the guiding approach of Service, Adoration and Illumination.

The MySAIYa Digital Hub is the central digital home for this work. It gives young adults and the public a trusted place to discover MySAIYa, understand its purpose, learn, participate, connect, grow, serve and lead.

The Hub supports real relationships, spiritual practice and service in Sai Centres and communities. Digital activity should lead people towards meaningful action in their lives and the world around them.

## Product vision

The Hub will grow across three connected areas:

1. **Public gateway.** Visitors can learn about Bhagawan Sri Sathya Sai Baba, SSIOM, MySAIYa, programmes, events, resources, stories and Sai Centres without creating an account.
2. **Member experience.** Young adults can join programmes, learn at their own pace, find service opportunities, save resources, contribute approved content and remain connected with the wider Malaysian Sai Young Adult community.
3. **Committee workspace.** Authorised leaders can coordinate programmes, manage content and events, moderate submissions, share resources, report outcomes and preserve institutional knowledge through secure tools.

The intended participation path is:

**Discover → Learn → Participate → Connect → Grow → Serve → Lead**

Registration adds continuity, personal progress and protected services. It must not block public information or become a condition for understanding MySAIYa.

## People we serve

The Hub must work for:

- existing members who want updates, resources and ways to participate;
- young professionals who need useful content and flexible opportunities;
- newcomers, SSE graduates and spiritual seekers who need a clear first step;
- volunteers and emerging leaders who need guidance, tools and greater responsibility;
- committee members and SSIOM leaders who need secure access to approved information and workflows; and
- contributors and prospective partners who need credible information and a clear contact route.

Personas describe needs and journeys. Access roles define system permissions. A person may fit several personas while holding one approved access role.

## Product outcomes

The Digital Hub should help MySAIYa:

- present accurate and accessible information about its identity, mission and work;
- welcome newcomers with clear language and low-friction next steps;
- connect young adults with Sai Centres, people, programmes and service opportunities;
- turn passive browsing into learning, participation and contribution;
- make spiritual teachings and human values useful at work, at home and in the community;
- recognise consistency, learning, service, collaboration and personal development;
- give members structured ways to share reflections, stories, media and programme reports;
- reduce fragmented committee processes through secure, task-focused tools; and
- preserve programmes, resources, stories and organisational learning for future leaders.

## Experience principles

### Public first

Public information stays open. Visitors can understand MySAIYa, read content, find a Sai Centre and explore an event or programme without an account.

### Fellowship before competition

Interactive experiences can use milestones, badges and progress indicators to encourage learning and participation. They must not rank devotion, turn service into a points contest or reward empty activity. Recognition should celebrate a person’s journey and contribution.

### Privacy by design

The Hub collects the minimum data required for each feature. Standard profiles must not collect NRIC or passport numbers. Programmes that need sensitive information must use a separate, justified workflow with consent, retention limits and restricted access.

### Accessible and inclusive

The experience must serve different devices, connection speeds, languages, levels of digital confidence and access needs. Teams should design and test against WCAG 2.2 AA, support keyboard and assistive technology use, respect reduced-motion preferences and provide alternatives for media.

### Mobile first

Young adults should be able to complete the main journeys on a smartphone. Pages should remain fast and clear on slower Malaysian mobile connections, then scale to tablets and desktops.

### Malaysian and grounded in Sai teachings

The Hub should feel Malaysian, youthful and contemporary while retaining the dignity expected of SSIOM. Content, human values, respectful imagery and considered design should communicate spirituality without excessive ornamentation.

### Useful over impressive

Each feature needs a clear user need, an accountable owner and a support path. The team should favour reliable journeys over novelty and introduce advanced features when demand and operating capacity support them.

## Content and participation

The public and member experience may combine:

- articles, reflections, news, programme pages and community stories;
- photographs, video, audio, galleries and downloadable resources;
- events, service opportunities, challenges and group activities;
- quizzes, word games, guided learning and values-based scenarios;
- meditation, bhajan learning and devotional resources; and
- moderated submissions, discussions, feedback and community contributions.

MySAIYa should complement its official social channels instead of recreating them without a clear need. Native community tools require defined moderation, safeguarding and consent processes before launch.

English is the launch language. The architecture should support Bahasa Malaysia, Tamil and Simplified Chinese without changing page relationships or weakening the meaning of spiritual terms.

## Access and trust

The role model progresses from Visitor to Member, Contributor, Moderator, Committee Member and Administrator. Administrators grant privileged roles according to responsibility. Users cannot grant themselves committee access through profile choices or an organisational email address.

Privileged access requires an individual verified account, administrator approval, least-privilege permissions and multi-factor authentication. Teams must protect administrative routes on the server, log privileged actions and review access when a role or project ends.

The Hub must separate consent for account processing, communications, analytics, media use and publication where those purposes apply. Public search and public pages must not expose protected content, member data, filenames or internal metadata.

## Delivery path

1. **Public Hub.** Establish the homepage, core information, programmes, events, resources, blog, Sai Centre information, search, contact paths, legal pages and multilingual readiness.
2. **Member participation.** Add authentication, profiles, consent controls, saved content, submissions, progress and the personal dashboard.
3. **Interactive learning.** Add games, quizzes, Sing It, challenges, polls, collaborative activities and suitable recognition.
4. **Committee operations.** Add role-based resources, moderation, event administration, reporting, analytics and audit controls.
5. **Advanced enhancements.** Expand multilingual content, personalisation, directory tools, live experiences and collaboration when evidence supports the investment.

Each phase needs named owners, success measures, support routes, security and privacy review, accessibility testing, and a release decision. A later phase must not delay a complete and credible public experience.

## Definition of success

The Digital Hub succeeds when it moves people from awareness to purposeful participation. The team should test whether:

- a newcomer can understand MySAIYa and find a suitable next step;
- a young adult can find and join a programme, event or service opportunity;
- members can access trustworthy spiritual and organisational resources;
- visitors can find and contact a Sai Centre;
- contributors can submit material and understand its review status;
- committee members can complete routine work without specialist technical knowledge;
- the platform protects personal information and privileged access;
- core journeys work on mobile devices and with assistive technology; and
- online participation strengthens fellowship, service and personal transformation beyond the screen.

Product measures should include public task completion, event-registration conversion, learning completion, resolved submissions, content usefulness, accessibility conformance, mobile performance and unresolved security findings. Teams should use analytics to improve the experience, not to surveil individual members or chase vanity metrics.

## Specification boundaries

This document sets the product direction. The following sources define implementation decisions:

- [User roles](01-user-roles.md) and the [permissions matrix](09-permissions-matrix.md) define access.
- [Information architecture](02-information-architecture.md), [public website pages](03-public-website-pages.md) and the [application sitemap](../../10_Source_Code/webapp/apps/web/docs/10-sitemap.md) define routes and journeys.
- [Authentication and permissions](20-authentication-and-permissions.md) and [security and privacy](16-security-and-privacy.md) define account and trust controls.
- [Courses and badges](14-courses-and-badges.md) defines learning progress and recognition rules.
- [Launch plan](18-launch-plan.md) defines release governance.

When these documents disagree, the executable application rules govern current behaviour and the team should record the product decision in the relevant specification.
