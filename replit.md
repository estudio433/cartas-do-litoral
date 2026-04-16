# Cartas do Litoral

A coastal editorial brand website for "Cartas do Litoral" — a monthly physical letter subscription service that explores the coast of Santa Catarina, Brazil.

## Architecture

**The active production app is `CartasdoLitoral/nextapp/`** — a standalone Next.js 15 app (App Router).

The original Vite + React app lives in `CartasdoLitoral/artifacts/cartas-do-litoral/` and is kept as reference only.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI**: React 19 + TypeScript
- **Styling**: Tailwind CSS v4 via `@tailwindcss/postcss`
- **Animations**: Framer Motion 12
- **Icons**: Lucide React
- **Fonts**: Caveat, Lora, Playfair Display (Google Fonts via `<link>`)

## Project Structure

```
CartasdoLitoral/nextapp/
  app/
    layout.tsx              ← Root layout (html, body, fonts, global CSS)
    globals.css             ← Tailwind v4 + HSL color tokens
    (main)/
      layout.tsx            ← Adds Navbar + Footer
      page.tsx              ← / (home/landing)
      diario/
        page.tsx            ← /diario
        [slug]/page.tsx     ← /diario/:slug
      cartas/page.tsx       ← /cartas
      lugares/page.tsx      ← /lugares
      comunidade/page.tsx   ← /comunidade
      presente/page.tsx     ← /presente (gift subscriptions)
    (standalone)/
      layout.tsx            ← Bare layout (no nav/footer)
      feira/page.tsx        ← /feira (QR code signup page)
      presente-ola/page.tsx ← /presente-ola (gift recipient landing)
    api/
      subscribe/route.ts    ← POST /api/subscribe (stub — wire to email service)
  components/
    layout/Navbar.tsx
    layout/Footer.tsx
    WaitlistModal.tsx
  data/posts.ts             ← 3 blog posts data
  lib/utils.ts              ← cn() helper
  public/images/            ← All 19 brand images
  public/                   ← gift-card-cartas-do-litoral.pdf
```

## Routes

| Path | Description |
|------|-------------|
| `/` | Landing page with hero, email capture, waitlist modal |
| `/diario` | Blog index (3 posts) |
| `/diario/:slug` | Individual blog post with drop-cap |
| `/cartas` | Subscription sales page |
| `/lugares` | Curated places with filter |
| `/comunidade` | Community waitlist |
| `/presente` | Gift subscription page |
| `/feira` | Standalone QR-code market signup (no nav) |
| `/presente-ola` | Standalone gift recipient landing (no nav) |

## API Routes

- `POST /api/subscribe` — Currently a stub that logs and returns 200. Connect to ConvertKit, Mailchimp, or similar email service to activate.

## Deployment (Vercel)

Set **Root Directory** to `CartasdoLitoral/nextapp` in Vercel project settings. Framework is auto-detected as Next.js.

Or use the included `CartasdoLitoral/nextapp/vercel.json`:
```json
{ "framework": "nextjs" }
```

## Development

```bash
cd CartasdoLitoral/nextapp && pnpm dev
```

Runs on port 5000.
