## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Blog pipeline editorial memory

Before any `/post-interview`, `/post-draft`, or `/post-review` work, read
`content-pipeline/EDITORIAL-MEMORY.md` and any relevant file in
`content-pipeline/feedback/`, in addition to `VOICE.md`/`RUBRIC.md`. After
Kit reacts to wording, structure, tone, or a review decision, record it in
`content-pipeline/feedback/<slug>.md`. Full protocol in `AGENTS.md` under
"Blog editorial memory" — this pointer exists because `AGENTS.md` isn't
auto-loaded and the pipeline skills don't reference it on their own; don't
remove this pointer without also fixing that.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
