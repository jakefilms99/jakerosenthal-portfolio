# Jake Rosenthal — Portfolio

Personal portfolio built with **Next.js (App Router)**, React 19, and TypeScript. Light editorial direction: airy spacing, quiet type hierarchy, story-led home page.

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

- `src/app` — routes (`/`, `/cassidy`, `/chat-with-ai-jake`, 404)
- `src/components` — header, footer, shared primitives, `home/` sections
- `src/lib` — site info, assets, Cassidy content
- `public/media` — photography and social share image
- `public/assets` — legacy CDN assets
- `legacy-static/` — reference copy of the original Webflow site
