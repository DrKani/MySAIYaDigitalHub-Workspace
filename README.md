# MySAIYa Digital Hub workspace

This folder contains the live web application, approved brand system, content, legal copy and planning records for MySAIYa.

## Start here

Run the site from `10_Source_Code/webapp/`:

```bash
cd 10_Source_Code/webapp
npm install
npm run dev
```

Use `npm run lint` and `npm run build` before you publish a change.

## Source-of-truth order

| Concern | Canonical source |
|---|---|
| Routes and navigation | `10_Source_Code/webapp/apps/web/docs/10-sitemap.md` |
| Firestore collections and fields | `10_Source_Code/webapp/apps/web/docs/09-database-schema.md` and `10_Source_Code/webapp/apps/web/src/types/database.ts` |
| Access control | `10_Source_Code/webapp/firestore.rules`, `10_Source_Code/webapp/storage.rules` and `10_Source_Code/webapp/apps/web/docs/08-admin-system.md` |
| Brand rules and design tokens | `01_Brand_Identity/readme.md`, `tokens/` and `components/` |
| Public copy | `03_Written_Content/` |
| Legal copy | `06_Legal_Documents/` |
| Product planning | `08_Project_Management/Product_and_Platform_Specifications/` |

Planning documents record intent. The application docs and executable rules define current behaviour. If they disagree, update the planning document or mark the decision for review.

## Folder map

- `01_Brand_Identity/`: approved visual system, reusable components and assets.
- `02_Visual_Media/`: source photography, graphics and illustrations.
- `03_Written_Content/`: approved page copy and FAQ content.
- `04_Multimedia/`: audio, video and presentation sources.
- `05_Technical_Assets/`: integration notes and operational configuration guidance.
- `06_Legal_Documents/`: policy and consent copy.
- `07_Interactive_Elements/`: learning and game content.
- `08_Project_Management/`: planning, route register and QA records.
- `10_Source_Code/webapp/`: the Next.js and Firebase application. This folder has its own Git repository.

## Workspace rules

- Read `10_Source_Code/webapp/apps/web/AGENTS.md` before generating or changing site code.
- Keep one canonical document for each decision. Use links instead of copied specifications.
- Keep raw media in `02_Visual_Media/` and deployable copies in the app's `public/` folder. Those copies serve different jobs.
- Do not treat `.next/`, `node_modules/`, `.DS_Store` or `graphify-out/` as source files.
- Store credentials in ignored environment or service-account files. Do not place secrets in documentation.

## Git boundaries

The workspace root and `10_Source_Code/webapp/` are separate Git repositories. Check both before committing:

```bash
git status --short
git -C 10_Source_Code/webapp status --short
```
