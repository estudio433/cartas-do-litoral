# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Contains the "Cartas do Litoral" editorial landing page + blog, plus a shared API server.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5 (api-server)
- **Database**: PostgreSQL + Drizzle ORM (lib/db)
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle) for api-server; Vite for frontend
- **Frontend**: React + TypeScript + Vite + Tailwind CSS + Framer Motion + Wouter

## Artifacts

### cartas-do-litoral (Preview Path: /)
Coastal editorial brand landing page + blog. Static, no backend required.

- **Stack**: React + Vite + TypeScript + Tailwind CSS + Framer Motion + Wouter
- **Routes**:
  - `/` — Landing page (hero, narrator teaser, email capture, subscription, blog preview)
  - `/diario` — Blog index "Diário do Litoral" (3-column magazine grid)
  - `/diario/:slug` — Individual blog post (clean reading layout, drop cap, 680px max-width)
- **Design**: Playfair Display / Lora / Caveat fonts; palette #F5F1EA / #1F3A44 / #6F8A7E / #A67C52
- **Key files**:
  - `artifacts/cartas-do-litoral/src/App.tsx` — Router setup
  - `artifacts/cartas-do-litoral/src/pages/` — LandingPage, DiarioIndex, DiarioPost
  - `artifacts/cartas-do-litoral/src/data/posts.ts` — 3 seed blog posts
  - `artifacts/cartas-do-litoral/src/components/` — Navbar, Footer, etc.
  - `artifacts/cartas-do-litoral/src/index.css` — Brand CSS variables + Tailwind
  - `artifacts/cartas-do-litoral/index.html` — Google Fonts preconnect links
- **Hero image**: `attached_assets/Reflexões_(2)_1775376027096.png` (aliased as `@assets/`)
- **SVG decoratives**: Vintage stamp + postal wave lines built inline as SVG

### api-server (Preview Path: /api)
Shared Express API server. Currently only has /healthz. No database required for cartas-do-litoral.

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally
- `pnpm --filter @workspace/cartas-do-litoral run dev` — run frontend locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
