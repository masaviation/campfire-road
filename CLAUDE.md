# Campfire Road

Camping reservation and information platform for a private campground property near Buena Vista, Colorado.
Started from the Digitaley golden template (Next.js 14 + Tailwind + Supabase). Deploys to Vercel
(repo homepage: https://campfire-road.vercel.app).

## Architecture (planned)

Two halves in one repo, one deployment:

- **Marketing site:** plain static HTML pages (home, sites, plan your visit, contact). Fast, SEO-friendly,
  editable without a build step.
- **Booking platform:** Next.js app and API routes backed by Supabase (Postgres) for campsites,
  availability, and reservations.

The repo is still the bare template scaffold. The structure above has been agreed but not built. Before
building it, confirm the open decisions with the owner:

- One deployment, or a separate marketing site with booking on a subdomain
- Payments (likely Stripe), confirmation emails, admin dashboard with login, cancellation/refund rules

## Stack

- Next.js 14 (App Router), React 18, TypeScript (strict), Tailwind CSS 3
- Supabase (`@supabase/supabase-js`). Client in `lib/supabase.ts`
- Path alias: `@/*` maps to the repo root

Commands: `npm install`, `npm run dev`, `npm run build`, `npm run lint`.

## Styling

Brand tokens live in `tailwind.config.ts`. Use them rather than hard-coded values, and keep any
plain CSS for static pages in sync with them.

- Colors: `brand` #69727d, `brand-accent` #5bc0de, `ink` #69727d, `surface` #ffffff
- Fonts: Montserrat for headings (`font-heading`), Open Sans for body (`font-body`)

## Secrets and environment

- Supabase settings go in `.env.local` (see `.env.local.example`). Never commit `.env*.local` or any keys.
- Cloud sessions get env vars from the claude.ai environment settings, not from the repo.
- Never expose a Supabase service role key to the browser. Only `NEXT_PUBLIC_*` vars reach client code.

## Working across laptop and cloud sessions

Work happens both in VS Code on a laptop and in Claude Code cloud sessions. GitHub is the only sync point.

- Pull before starting work. Commit and push before stopping or switching machines.
- Don't edit the same branch in two places at once.
- Shared rules belong in this file, not in personal `~/.claude/CLAUDE.md` or machine-local memory.
  If something should be remembered across sessions, add it here.
- Finished work merges into `main` through a pull request.

## Working with the owner

- When the owner asks a question ("is this good?", "should we...?"), answer it. Don't start building
  until they ask for changes.
- Don't invent business facts (prices, site counts, address, policies, phone numbers). Use clearly
  marked placeholders and ask.
