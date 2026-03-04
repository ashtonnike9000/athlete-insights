# Athlete Insights

A web application for capturing, browsing, and synthesizing insights from athlete visits at Nike Campus. Built for innovators who need to quickly find what athletes think about specific products, compare across athletes on topics, and access raw quotes for presentations.

## Quick Start

```bash
npm install
npx prisma db push
npx prisma generate
npx tsx prisma/seed.ts   # seeds with Fischer, Hocker, Hicks data
npm run dev              # http://localhost:3000
```

## Tech Stack

- **Next.js 16** (App Router, Server Components, Server Actions)
- **SQLite via Prisma v5** — single-file database, zero infrastructure
- **Tailwind CSS + shadcn/ui** — modern component library
- **TypeScript**

## Pages

| Route | Description |
|-------|-------------|
| `/` | Dashboard with stats, athlete cards, themes, recent quotes |
| `/athletes` | Athlete grid with visit/quote/FW note counts |
| `/athletes/[id]` | Athlete profile with tabbed FW rotation, quotes, protocols, visits |
| `/products` | Product grid aggregating all athlete feedback by shoe |
| `/products/[name]` | Per-product detail with all athlete feedback and related quotes |
| `/quotes` | Searchable, filterable quote explorer |
| `/themes` | Cross-athlete synthesis themes |
| `/admin` | Admin hub for adding athletes and logging visits |
| `/admin/athletes/new` | New athlete form |
| `/admin/visits/new` | Visit logging form with repeatable FW notes, quotes, protocols |

## Data Model

- **Athlete** — name, event focus, shoe size, volume, coach
- **Visit** — linked to athlete, date, location, session notes
- **FootwearNote** — shoe name, use case, frequency, sentiment, notes (linked to athlete + visit)
- **Quote** — text, topic tag, context (linked to athlete + visit)
- **Protocol** — category (altitude/heat/recovery/etc), description (linked to athlete + visit)
- **Theme** — curated cross-athlete insights
