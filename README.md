# xo-arena-pages

Public legal/support pages for **XO Arena: Grid Rivals** — privacy policy, terms of
service, and support contact. Referenced directly from the App Store listing and from the
app's own Settings screen.

Live at: https://iamzayn19.github.io/xo-arena-pages/

## Stack

Plain static HTML pages (readable and correct with JavaScript disabled), styled with a
single shared stylesheet, built with Vite + TypeScript for the one small progressive
enhancement (an auto-updating copyright year). No framework, no client-side routing.

## Develop

```bash
npm install
npm run dev
```

## Deploy

Pushing to `main` builds and deploys to GitHub Pages automatically via
`.github/workflows/deploy.yml`. GitHub Pages must be set to the "GitHub Actions" source in
the repo settings (Settings → Pages → Build and deployment → Source).

## Pages

- `/` — landing/index
- `/privacy.html` — Privacy Policy
- `/terms.html` — Terms of Service
- `/support.html` — Support contact
