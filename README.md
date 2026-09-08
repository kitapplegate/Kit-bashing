# Kit Bashing

**Live site:** [kitapplegate.github.io/Kit-bashing](https://kitapplegate.github.io/Kit-bashing/)

A public field log of AI, networking, and building in the open — one retired Coast Guard hazmat specialist’s path into network engineering (CCNA in progress), home lab work, and practical AI systems.

## Why this exists

Clients and hiring managers rarely see the messy middle of a career shift. This site documents real projects, decisions, and labs as they happen — not a polished after-the-fact portfolio rewrite.

## What’s in the stack

- [Astro](https://astro.build) static site
- Markdown content + GitHub Actions deploy to GitHub Pages
- Designed to ship weekly posts without a CMS

## Skills shown

Technical writing, static site / JAMstack basics, GitHub Actions CI/CD, networking and AI learning in public.

---

## Writing a new post

1. Copy `src/content/blog/.template.md` to a new file in `src/content/blog/`, e.g. `2026-07-16-first-boot.md` (no leading dot — dotfiles are ignored).
2. Fill in the frontmatter (`title`, `description`, `pubDate`, optional `heroImage`) and write the post in Markdown below it.
3. Run `npm run dev` and check it at `localhost:4321/blog/`.
4. Commit and push to `main` — the GitHub Actions workflow builds and deploys automatically.

## Commands

| Command | Action |
| :------ | :----- |
| `npm install` | Install dependencies |
| `npm run dev` | Local dev server at `localhost:4321` |
| `npm run build` | Production build to `./dist/` |
| `npm run preview` | Preview the production build |

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml` (GitHub Pages via Actions). Repo Pages source should be **GitHub Actions**. `astro.config.mjs` sets `base: '/Kit-bashing/'` so links work under that subpath.
