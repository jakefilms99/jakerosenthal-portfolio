# Jake Rosenthal — Portfolio

Personal portfolio built with **Next.js (App Router)**, React 19, and TypeScript. Light editorial direction: full-bleed dark hero, airy spacing, quiet type hierarchy, soft project washes.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint

## Structure

- `src/app` — routes (`/`, `/projects/[slug]`, `/chat-with-ai-jake`, 404)
- `src/components` — header, footer, shared primitives, `home/` sections
- `src/lib` — site info, projects, case-study loader
- `content/projects/*.json` — structured case-study content
- `public/assets` — images and media
- `legacy-static/` — reference copy of the original Webflow site
