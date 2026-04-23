# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands run from the `portfolio/` subdirectory (the Next.js app root — the repo has a nested `portfolio/portfolio/` layout).

- `npm run dev` — start the Next.js dev server on http://localhost:3000
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run `next lint` (ESLint via `eslint-config-next`)

There is no test runner configured.

## Required environment variables

The `/api/contact` and `/api/feedback` routes send mail via SendGrid and will fail without these set (typically in `.env.local`):

- `SENDGRID_API_KEY` — must start with `SG.`; the contact route logs an error at module load otherwise
- `EMAIL_FROM` — verified SendGrid sender
- `EMAIL_TO` — destination address for contact/feedback submissions

`@vercel/blob` is a dependency and `visit-counter.txt` exists at the repo root, but the visit-counter API (`app/api/visit/route.ts`) and its client (`components/visit-counter.tsx`) are fully commented out. Don't re-enable them without also wiring up `BLOB_READ_WRITE_TOKEN`.

## Architecture

Next.js 14 App Router + TypeScript (strict) + Tailwind + shadcn/ui (`style: new-york`, `components.json`). Path alias `@/*` maps to the app root. The app is a single-page personal portfolio — everything renders from `app/page.tsx` as a vertical stack of section components from `components/`.

### Rendering model

- `app/layout.tsx` is a Server Component that hard-forces dark mode via `next-themes` (`forcedTheme="dark"`) — theme toggling is intentionally disabled; don't add a theme switcher without changing this. It also mounts `@vercel/analytics` and the shadcn `Toaster`.
- `app/page.tsx` wraps the heavier sections (`Experience`, `Projects`, `Dashboards`, `YouTubeVideos`) in `<Suspense>` boundaries. Most individual section components are `"use client"` because they rely on `framer-motion`, scroll hooks, or local state — keep that in mind before adding server-only imports to them.
- `components/hero-background.tsx` uses `@react-three/fiber` + `three` for a WebGL hero background; treat it as a heavy client-only component.

### API routes

Route handlers live under `app/api/*/route.ts`:

- `contact/route.ts` — POST `{ name, email, message }`, sends via `@sendgrid/mail`. Has a type guard `isSendGridError` for surfacing SendGrid's nested error body.
- `feedback/route.ts` — POST `{ emoji, name, comment }` from `components/feedback-widget.tsx`; emoji is required, timestamps are formatted in `America/Phoenix`.
- `visit/route.ts` — entirely commented out; the file exports `{}` to stay a module.

### Content model

Page content (projects, experience, education, testimonials, etc.) is **hardcoded as typed arrays inside each section component** — there is no CMS, no MDX, no JSON. To add or edit a project, edit the `projects` array in `components/projects.tsx` directly; the same pattern applies to the other sections. Images referenced by those arrays live in `public/images/`.

### UI conventions

- shadcn/ui primitives are in `components/ui/` (button, card, dialog, toast, etc.). Use `cn()` from `lib/utils.ts` for class merging (`clsx` + `tailwind-merge`).
- Icons: `lucide-react` is the default icon library (per `components.json`); `react-icons` is also available. Brand glyphs not in lucide (Instagram, X, YouTube) are defined as inline SVG components at the top of `components/hero.tsx`.
- Animations use `framer-motion`; scroll-linked effects use its `useScroll`/`useTransform` hooks.
- Two Tailwind config files coexist (`tailwind.config.js` and `tailwind.config.ts`) — `components.json` points shadcn at `tailwind.config.ts`, so prefer editing that one.
