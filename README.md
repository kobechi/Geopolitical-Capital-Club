# GCC Website Framework

This is a local React + TypeScript + Vite site for the Geopolitical Capital Club. The build is intentionally informational and does not publish any GCC content to a public domain.

## Local development

```bash
cd /Users/kobe/gcc-website
npm install
npm run dev -- --host 0.0.0.0
```

Then open the local Vite preview URL printed in the terminal, usually http://localhost:5173/.

## Production build

```bash
cd /Users/kobe/gcc-website
npm run build
npm run preview -- --host 0.0.0.0
```

## TypeScript check

```bash
cd /Users/kobe/gcc-website
npx tsc --noEmit
```

## Content updates

Key content is organized in the src/content folder. Update copy and links there instead of rewriting individual page components when possible.

- src/content/site.ts: organization info, forms, and navigation
- src/content/tracks.ts: Analyst and Studio track summaries
- src/content/program.ts: stages and program milestone content
- src/content/leadership.ts: board structure and team lead wording

## Missing inputs

The site is built to remain honest when some GCC inputs are not yet confirmed:

- If a form URL is missing, the page shows an informational state instead of a live application button.
- If names, bios, or photos are not verified, role-only cards are shown.
- If contact links are not confirmed, the site lists them as coming soon.

## Deployment requirements

Before publishing to a live domain, confirm the following items:

- GCC logo and branding approval
- verified application and membership links
- approved board member identities and photos
- final meeting information and contact channels
- hosting destination and SPA fallback configuration
- metadata and social preview image for the production domain

Do not deploy or publish without explicit approval.
