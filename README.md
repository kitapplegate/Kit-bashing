# Kit Bashing

A field log of AI, networking, and questionable decisions. Kit's journey from 20 years of
Coast Guard hazmat work into network engineering (CCNA in progress) and building a home lab
from scratch, documented as it happens.

Built with [Astro](https://astro.build), deployed free on GitHub Pages.

## Writing a new post

1. Copy `src/content/blog/.template.md` to a new file in `src/content/blog/`, e.g.
   `2026-07-16-first-boot.md` (no leading dot — dotfiles are ignored).
2. Fill in the frontmatter (`title`, `description`, `pubDate`, optional `heroImage`) and write
   the post in Markdown below it.
3. Run `npm run dev` and check it at `localhost:4321/blog/`.
4. Commit and push to `main` — the GitHub Actions workflow builds and deploys automatically.

## Commands

All commands run from the root of the project:

| Command           | Action                                      |
| :----------------- | :------------------------------------------ |
| `npm install`       | Install dependencies                        |
| `npm run dev`       | Start local dev server at `localhost:4321`  |
| `npm run build`     | Build the production site to `./dist/`      |
| `npm run preview`   | Preview the production build locally        |

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and deploys
it to GitHub Pages. In the repo's Settings → Pages, the source needs to be set to
**GitHub Actions** (one-time setup, done when the repo is first pushed).

Site lives at `kitapplegate.github.io/Kit-bashing/` — this is a regular project repo, so
`astro.config.mjs` sets `base: '/Kit-bashing/'` and internal links use `import.meta.env.BASE_URL`
to stay correct under that subpath.
