# Session Log

## 2026-07-17 15:00

**Summary:** Wrote Kit's real About page bio (hazmat/inspector years, Yorktown A-school instructor years, pivot into IT/networking/AI), replacing the starter draft. Wrote and iterated the first blog post, `src/content/blog/why-the-jump.md` ("Why the Jump"), covering the DAV job-fair moment, the "20 years experience vs. a degree" frustration, why cloud/networking and AI specifically, and the posterity/journaling reason for the blog — landed on a voice pattern of dry/deadpan opening pivoting via "...but in all seriousness..." into an earnest close. Added a dictionary-style "kitbashing" definition to the homepage tying the model-building term to repurposing Coast Guard experience into IT. Tracked down Kit's old 2008–2011 Blogspot blog, *The Marzipan Incident* (https://themarzipanincident.blogspot.com/, byline "3rdshoe", starring a wooden mannequin named "Pan"/W.A.M.), via a background agent using the Wayback CDX API, and pulled a voice profile from it (absurd premise played straight, mock-journalistic sign-off, pun-heavy titles, photo/caption-driven brevity) to inform Kit Bashing's tone going forward. Drafted and delivered a project-brief file for Kit's assistant "Z4nn" summarizing the blog's purpose, Kit's background, project state, and the Marzipan voice reference. Committed all content changes (ce64d50).

**Open tasks:**
- [ ] `gh auth login` still not completed — GitHub CLI not authenticated
- [ ] Create the `kitapplegate.github.io` repo on GitHub and push local commits
- [ ] Enable GitHub Pages in repo settings (source = GitHub Actions) after first push
- [ ] Figure out how Kit will actually hand the Z4nn brief file off to Z4nn (paused mid-discussion — unclear if Z4nn is another AI app, an assistant tool, or a person)
- [ ] Kit to pick and write the second blog post
- [ ] Separate/later: clean up Kit's GitHub profile presentation (pinned repos, bio, etc.)
- [ ] Longer-term: migrate hosting to Kit's home lab (or friend Justin's) once built

## 2026-07-16 21:39

**Summary:** Kicked off Kit's new blog project. Interviewed Kit (retired USCG hazmat/MST, transitioning into network engineering via CCNA, new to AI/homelab) to nail down voice (story-first/campfire style), name ("Kit Bashing"), and tagline ("A field log of AI, networking, and questionable decisions"). Scaffolded an Astro blog at `D:\AI\blog` using the official blog template, rebranded it (site title/description, about page draft, header/footer social links, removed placeholder posts/images, added `src/content/blog/.template.md` for future posts), and added a GitHub Actions workflow (`withastro/action` + `actions/deploy-pages`) to auto-deploy to GitHub Pages on push to `main`. Verified the build and dev server both work. Committed locally (b0ed468). Decided to host at `kitapplegate.github.io` (user-site repo, not a project-repo subpath).

**Open tasks:**
- [ ] `gh auth login` was in progress (backgrounded, browser flow) — confirm it completed
- [ ] Create the `kitapplegate.github.io` repo on GitHub and push the local commits
- [ ] Enable GitHub Pages in repo settings (source = GitHub Actions) after first push
- [ ] Kit to write his real About page bio (currently a starter draft with a TODO comment)
- [ ] Kit to write his first real post from `src/content/blog/.template.md`
- [ ] Separate/later: clean up Kit's GitHub profile presentation (pinned repos, bio, etc.)
- [ ] Longer-term: migrate hosting to Kit's home lab (or friend Justin's) once built
