# alex-portfolio

Personal site for Alex Mwaura — Next.js 15 + TypeScript, hand-written CSS, no UI dependencies.

## Run

```bash
npm install
npm run dev        # http://localhost:3210
```

## Edit content

Everything (bio, experience, projects, skills, links) lives in `data/profile.ts`.
Update `resumeUrl` to point at a public copy of your latest resume.

## Deploy

Push to GitHub and import the repo in Vercel — no configuration needed.

## Features

- Animated fintech "system map" + illustrative live ledger feed in the hero
- ⌘K / Ctrl+K command menu (navigate, copy email, open links, toggle theme)
- Dark / light theme with no flash on load, respects system preference
- Scroll reveals, count-up stats, cursor-spotlight project cards
- Fully responsive, respects `prefers-reduced-motion`
