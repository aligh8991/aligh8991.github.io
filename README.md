# Ali Ghanbarzadeh Portfolio

Mobile-first portfolio for an audio engineer and sound designer. TypeScript, object-oriented React, deployed to GitHub Pages with GitHub Actions. Design system: "Resonant Burgundy" (`public/brand-book.html`).

## Pages
| Route | Purpose |
|---|---|
| `/` | Minimal intro, live SVG sound animation, site index |
| `/portfolio` | SoundCloud player (tap to load), service lines, studio projects |
| `/brand` | Logo, colour, type, icons and voice |
| `/cv` | HTML CV built from the same data, with PDF download and print styles |
| `/contact` | Contact details and a brief form that opens the visitor's mail app |

## Edit content
- All copy, CV data, tracks and projects: `src/data/content.ts`
- To feature a single track or playlist, add a `new Track({ ... })` with its public SoundCloud URL to `tracks`.
- Brand colours and typography are tokens at the top of `src/styles/global.css`.
- The CV PDF is `public/Ali_Ghanbarzadeh_CV.pdf`. Replace it when the CV changes.

## Home screen and favicon
`public/` holds `favicon.svg`, `favicon.ico`, `apple-touch-icon.png`, `icon-192/512.png`, a maskable icon and `manifest.webmanifest`. Adding the site to a phone home screen shows the "A" logo.

## Deploy to https://aligh8991.github.io
1. Repository named `aligh8991.github.io`, branch `main`.
2. Settings, Pages, Source: **GitHub Actions**.
3. Every push to `main` runs the "Deploy to GitHub Pages" workflow.

## Develop
```
npm install
npm run dev
npm run build
```

## Structure
- `src/models`: `Profile`, `Experience`, `Project`, `Track` classes
- `src/components`: `Header`, `Footer`, `Button`, `Icon`, `Logo`, `Reveal`, `SoundWave`, `TrackCard`
- `src/pages`: `Home`, `Portfolio`, `Brand`, `CV`, `Contact`
- `src/lib/page.ts`: page title, colour surface and helpers
