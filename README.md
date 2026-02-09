# Engineering Updates (GitHub Pages + Jekyll Collections)
This repository publishes public-facing engineering updates (releases, hotfixes, configuration changes, and incident summaries) as a static site using GitHub Pages and Jekyll.

## Local development

Prerequisites:
- Ruby 3.0+ (`ruby -v` to check)
- Bundler (`gem install bundler` if not installed)

First time setup:
```
bundle install
```

Run the local server:
```
bundle exec jekyll serve
```

Then open `http://localhost:4000/tst-notices/` in your browser.

## Adding an update
1. Create a new Markdown file in `_updates/` with frontmatter.
2. Use a filename that is stable and sortable, e.g. `YYYY-MM-DD-HHMM-short-title.md`.
3. Include:
   - `title`
   - `timestamp` (with timezone offset)
   - `type` (`release`, `hotfix`, `config`, `incident`)
   - `summary`

Updates appear automatically at `/updates/`.

## Publishing on GitHub Pages

In GitHub:
1. Go to Settings → Pages
2. Set Source to deploy from the `master` branch and `/ (root)`
3. Save

GitHub Pages will build the Jekyll site automatically on every push to `master`.
