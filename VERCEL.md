# Deploy the portfolio to Vercel

The portfolio exports static HTML, JavaScript, CSS, and public images. The minimal page contains four project links, a short introduction, an about section, and email contact. No database or server function is required.

## Publish from this folder

1. Install dependencies: `npm ci`.
2. Sign in: `npx vercel login`.
3. Publish: `npx vercel --prod`.

The checked-in `vercel.json` selects the Other framework preset, runs `npm run build:vercel`, and serves `dist/client`.

For a Git repository import, select the repository containing this folder. Vercel reads these same settings automatically.

## Verify locally

Run `npm run build:vercel`. The script validates that the export contains the homepage, favicon, and social-preview image.

Social-preview URLs use Vercel's `VERCEL_PROJECT_PRODUCTION_URL` or `VERCEL_URL`. For other hosts or local preview, set `SITE_ORIGIN` to an absolute origin. Keep Vercel's system environment variables enabled.

The existing `npm run dev` and `npm run build` commands retain the original Sites development and deployment workflow. Only `build:vercel` selects the static export.

See [Vercel CLI deployment](https://vercel.com/docs/cli/deploy) and [system environment variables](https://vercel.com/docs/environment-variables/system-environment-variables).
