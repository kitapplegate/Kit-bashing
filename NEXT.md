# Next

**Action:** Remove Kit's unannounced business name from the public repo. It's in `.claude/session-log.md`, the 2026-09-15 entry ("going independent (...)", from `cfca6c1`), which reached `origin/main` on 2026-09-16.
**Why now:** `kitapplegate/Kit-bashing` is PUBLIC, so the name is readable on GitHub right now.
**Start here:** Kit picks one: (a) reword that line and push a normal commit (the name stays in git history), or (b) rewrite history and force-push `main` (destructive, needs his explicit OK).
**Verify with:** `git show origin/main:.claude/session-log.md`, then check by eye that the 2026-09-15 entry no longer names the business. For (b), `git log --all -S"<name>"` should also be empty.
**Watch out for:** Don't type the name into any tracked file, including handoff notes. Before any push, check staged diffs for it.
