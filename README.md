# Ali Ghanbarzadeh Portfolio

TypeScript, object oriented React, mobile first. Deployed to GitHub Pages with GitHub Actions.

## Deploy to https://aligh8991.github.io
1. On GitHub, create a **public** repository named exactly `aligh8991.github.io` (this name makes it your user site, served at the root address).
2. Push this folder to the `main` branch:
```
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/aligh8991/aligh8991.github.io.git
git push -u origin main
```
3. In the repository open Settings, then Pages, and set Source to **GitHub Actions**. Do this before or right after the first push.
4. Open the Actions tab. The "Deploy to GitHub Pages" workflow runs on every push to `main`. If the first run failed because Pages was not yet enabled, click Re-run all jobs.

## Develop
```
npm install
npm run dev
npm run build
```

## Edit content
All text, skills, certifications and projects are in `src/data/content.ts`.
Brand colors and typography are tokens at the top of `src/styles/global.css`.

## Structure
- `src/models`: `Profile` and `Project` classes
- `src/components`: `Header`, `Footer`, `Button`, `Icon` class components
- `src/pages`: `Home`, `Portfolio`
