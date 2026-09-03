## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Blog editorial memory

Before interviewing, drafting, editing, or reviewing a blog post:

1. Read `content-pipeline/VOICE.md` and `content-pipeline/RUBRIC.md`.
2. Read `content-pipeline/EDITORIAL-MEMORY.md`.
3. Read the three most recent Kit-approved posts in `src/content/blog/`.
4. Read any feedback records relevant to the current post or a pattern named in
   `EDITORIAL-MEMORY.md`.

After Kit reacts to wording, structure, tone, a review decision, or a finished
post, record that feedback in `content-pipeline/feedback/<slug>.md`. Preserve
the rejected wording, the approved replacement when there is one, and Kit's
reason in his own words.

Treat a single edit as an example, not automatically as a universal voice rule.
Promote a lesson into `EDITORIAL-MEMORY.md` only when Kit explicitly makes it a
standing preference or the same preference appears in at least two different
posts. Reviewer opinions do not become memory unless Kit accepts them.

Keep the distilled memory short. Raw history belongs in `feedback/`; standing
voice law belongs in `VOICE.md`; scoring rules belong in `RUBRIC.md`. Kit's
current explicit direction remains the final authority.
