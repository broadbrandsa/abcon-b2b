# Deployment

This is a standard Next.js (App Router) app deployed to **Vercel**. It is fully
self-contained — no monorepo, no workspace, no external folders.

## 1. GitHub repo setup

From the project root (`sandton-gate-proposal/`):

```bash
git add -A
git commit -m "Sandton Gate proposal site"
gh repo create sandton-gate-proposal --private --source=. --remote=origin --push
# or, manually:
# git remote add origin git@github.com:<org>/sandton-gate-proposal.git
# git push -u origin main
```

> The project root **is** the repo root. Do not nest it inside another repo.

## 2. Vercel project setup

Option A — Dashboard:

1. **Add New → Project** and import the GitHub repo.
2. Vercel auto-detects **Next.js**. Confirm the settings below.
3. **Deploy.**

Option B — CLI:

```bash
pnpm dlx vercel        # first run: link/create the project
pnpm dlx vercel --prod # promote a production deployment
```

## 3. Project settings

| Setting | Value |
|---------|-------|
| Framework preset | **Next.js** |
| Root directory | **project root** (repo root) |
| Build command | `pnpm build` (default) |
| Install command | `pnpm install` |
| Output directory | **leave blank** (Next.js managed) |
| Node.js version | 20.x or later |

A `vercel.json` is **not** required — do not add one unless a specific override
is needed. pnpm is detected automatically from `pnpm-lock.yaml`.

## 4. Environment variables

No environment variables are required to build or run today. When
instrumentation is added (see [`TRACKING_PLAN.md`](./TRACKING_PLAN.md)),
configure them in **Vercel → Project → Settings → Environment Variables**:

| Variable | Purpose | Scope |
|----------|---------|-------|
| `NEXT_PUBLIC_GA_ID` | GA4 measurement ID (optional) | Production (+ Preview) |

- Prefix browser-exposed values with `NEXT_PUBLIC_`.
- Keep any secrets (form provider API keys, etc.) **without** that prefix and
  reference them only from server code / route handlers.
- Never commit secrets; use the Vercel dashboard or `vercel env`.

## 5. How to redeploy

- **Automatic:** every push to `main` triggers a production deployment; every
  push to another branch / PR creates a Preview deployment with its own URL.
- **Manual (dashboard):** Project → Deployments → ⋯ → **Redeploy**.
- **Manual (CLI):** `pnpm dlx vercel --prod`.
- **Rollback:** Deployments → pick a previous successful build → **Promote to
  Production**.

## 6. Local parity

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # production build (must pass before pushing)
pnpm start    # serve the production build locally
```
