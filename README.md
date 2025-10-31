# Portfolio-Website
My portfolio Website


## Publish this site via GitHub Pages

This repository contains a static React-based portfolio site under the `docs/` folder. A simple way to publish it using GitHub Pages:

1. Commit and push your changes to the `main` branch.
2. In your repository on GitHub, go to Settings → Pages.
3. Under "Source", choose the `main` branch and the `docs/` folder, then save.
4. After a minute, your site will be available at `https://<your-username>.github.io/<repo-name>/`.

Notes:
- Replace the placeholder content in `docs/data/projects.json` with your projects.
- Add your resume PDF at `docs/assets/resume.pdf` to make the resume link work.
- To preview locally, open `docs/index.html` in a browser, or run a local server from the repo root:

```powershell
# from the repo root (Windows PowerShell)
python -m http.server 8000 --directory docs
# then open http://localhost:8000 in your browser
```

If you prefer a React build pipeline (Vite / CRA), I can convert this site to an actual React project with npm scripts—tell me if you want that.
