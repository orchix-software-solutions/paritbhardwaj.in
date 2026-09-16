# paritbhardwaj.in

Personal portfolio — a single scrolling page plus a detail page per project.

Next.js 16 · React 19 · TypeScript · Tailwind CSS v4

```bash
npm install
npm run dev     # http://localhost:3000
```

## Projects

| Project | What it is | Stack |
| --- | --- | --- |
| [MeetMind](https://paritbhardwaj.in/projects/meetmind) | AI meeting assistant — a bot joins the call, transcribes it, and turns the transcript into summaries, action items and a RAG chat over your history | Next.js · Express · Prisma · PostgreSQL · ChromaDB · Groq · Stripe |
| [Bazark](https://paritbhardwaj.in/projects/bazark) | Arabic-first multi-vendor marketplace — RTL storefront, live auctions, AI-assisted listings, escrow checkout | Next.js · Express · MongoDB · Redis · Elasticsearch · Azure |
| [WareFlow](https://paritbhardwaj.in/projects/wareflow) | Multi-warehouse inventory — stock, purchasing, BOM manufacturing, WhatsApp alerts | Next.js · Bun · Fastify · Drizzle · PostgreSQL |
| [Sherly Jewels](https://paritbhardwaj.in/projects/sherly-jewels) | Jewellery ERP — orders, CAD approvals, allocation, factory job cards | Next.js · Bun · Fastify · MongoDB · S3 · Firebase |
| [NextView KAVACH](https://paritbhardwaj.in/projects/nextview-kavach) | Dealer portal for license activation, renewals and expiry tracking | React · Vite · Express · MongoDB |

## Structure

```
src/app/page.tsx              homepage — intro, experience, projects, contact
src/app/projects/<slug>/      one file per project, data only
src/components/project-page   shared layout every project page renders through
public/<slug>/                screenshots
```

Adding a project means one folder under `src/app/projects/` exporting
`<ProjectPage />` with its copy, stack and shots — no layout work.

## Notes

- Content lives in plain arrays at the top of each file; there is no CMS.
- `public/resume.pdf` is generated from a standalone HTML resume, so its
  project links point back at the detail pages above.
