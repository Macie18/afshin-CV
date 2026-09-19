# Afshin Elahi (福星) — Resume & Portfolio

Bilingual (EN / 中文) single-page resume & portfolio site for **Afshin Elahi**, PE Educator & Head of Department (HOD).

- **Default language: English** (content verbatim from the CV); top-right toggle switches to 中文.
- Pure static site — **zero external CDN / font dependencies**, loads reliably in mainland China network environments.
- Animated aurora background, particle constellation, scroll-reveal, timeline, count-up stats, marquee, cursor glow.
- Portfolio section ships with placeholder slots, ready for future projects.

## Files

| File | Purpose |
|---|---|
| `index.html` | Page shell (background layers, language toggle, `#app` mount point) |
| `style.css` | All styling & animations |
| `app.js` | Rendering, i18n toggle, particles, scroll effects |
| `content.js` | **All bilingual content** — edit this file to update text or add portfolio projects |

## Add a portfolio project

In `content.js`, copy a slot inside `portfolio.slots` (under both `en` and `zh`), fill in
`title` / `desc` / `tags` / `link`, and set `placeholder: false`.

## Run locally

```bash
python3 -m http.server 8080
# open http://127.0.0.1:8080
```

## Deploy

Any static host works (GitHub Pages, Nginx, object storage…). Just upload the four files.
