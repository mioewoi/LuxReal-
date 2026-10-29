# LuxReal Mobile Review

Local interactive prototype based on the supplied mobile design exports.

## Preview

Run `node server.cjs` in this folder and open http://127.0.0.1:4173.
Set the `PORT` environment variable to use a different port.

The layout uses a 440 x 956 design canvas and scales proportionally to fit the browser.

## GitHub Pages

This project is a plain static site (HTML, CSS, JavaScript, and `assets/`), with no framework, bundler, or npm dependencies. No `package.json` or Vite `base` is needed.

Run `node scripts/build-pages.cjs` to validate JavaScript syntax and literal asset paths, then copy `index.html`, `app.js`, `styles.css`, and all existing `assets/` into `_site/`. This does not transform or modify the original UI files. `_site/` is generated output and is excluded from Git. Local logs, environment files, development scripts, and documentation are not published as website files.

The GitHub Actions workflow in `.github/workflows/deploy.yml` runs this build and deploys `_site/` whenever changes are pushed to `main`; it also supports a manual **Run workflow** trigger.

For the project site URL `https://mioewoi.github.io/LuxReal-/`, the app uses relative `./styles.css`, `./app.js`, and `./assets/` paths, so files resolve beneath the repository path without a Vite `base` setting. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. Push the `main` branch to start deployment; no deployment is run from this local setup.

The page switches screens in JavaScript without changing the URL path. Reload the site root `/LuxReal-/`; no server-side router or SPA path fallback is required. Share URLs retain the current project path and use a hash fragment.

### First publication with GitHub Desktop

1. Add this existing local folder through **File → Add local repository**.
2. Confirm the branch is `main` and **Repository settings → Remote** points to `https://github.com/mioewoi/LuxReal-.git`.
3. Review the changes and create the first commit. Push `main` to the existing repository; do not create a second repository. If Desktop offers to publish a new repository instead, check the existing remote first.
4. In GitHub repository **Settings → Pages**, choose **GitHub Actions** as the source. If an earlier run failed before Pages was enabled, rerun it from **Actions**.
5. Wait for **Deploy static site to GitHub Pages** to complete, then open `https://mioewoi.github.io/LuxReal-/`. Later pushes to `main` deploy automatically.

Local preview remains `node server.cjs`; the development server and API/link settings are unchanged.

## Included

- Swipeable script templates and script details.
- One-to-one cast replacement from a sample library or a local image.
- Model, aspect ratio, resolution, duration, and style settings.
- Conversation-based creation progress, smart preview choices for videos of at least 30 seconds, and confirmation for shorter videos.
- Simulated rendering, result preview, poster download, and share entry points.
- Theatre, profile, professional Agent, and 3D entry screens.

## Prototype Boundaries

AI generation, account services, billing, real video playback/export, and social publishing are not connected. Images selected locally stay in the browser. Download currently exports the poster image. Social buttons open the corresponding platform upload pages.

The supplied home, detail, asset picker, and creation CSS exports guide the dimensions and colors. Theatre and profile remain preliminary and need further comparison against their individual Figma frames. Exact font rendering depends on installed fonts; PingFang SC is used where available.

`AGENT_WEB_URL` in `app.js` can be set once the official Web entry is available.
