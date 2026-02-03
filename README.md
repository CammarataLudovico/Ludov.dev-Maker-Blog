# Ludov.dev-Maker-Blog

A simple, responsive React portfolio & blog starter used for Ludov.dev.

**Project:** A lightweight Vite + React site with multiple pages (Home, About, Blog, Portfolio, Projects, Skills, Contacts), theme/palette controls, and local post data for easy customization and deployment.

**Quick Start:**
- **Prerequisites:** Node.js and npm or yarn.
- **Install:**

```bash
npm install
```

- **Run (development):**

```bash
npm run dev
```

- **Build (production):**

```bash
npm run build
```

- **Preview build:**

```bash
npm run preview
```

**Scripts:**
- **dev:** Start Vite dev server.
- **build:** Produce production build.
- **preview:** Preview the production build locally.

**Project Structure:**
- `index.html`: App entry.
- `package.json`: Project metadata and scripts.
- `src/` : Source files and components.
	- `src/App.jsx` — Main application component.
	- `src/main.jsx` — Client entry and router mounting.
	- `src/assets/` — Styles and theme helpers.
	- `src/components/` — Reusable components (`Nav.jsx`, `PaletteButton.jsx`).
	- `src/pages/` — Page components (Home, About, Blog, BlogPost, Contacts, Portfolio, Projects, Skills).
	- `src/data/posts.js` — Local blog post data used by the `Blog` and `BlogPost` pages.

**Customization:**
- Update site content by editing the components and page files in `src/pages` and `src/data/posts.js`.
- Tweak theme and styles in `src/assets/style.css` and `src/assets/theme.js`.

**Deployment:**
- Build with `npm run build` and deploy the `dist` output to any static host (GitHub Pages, Netlify, Vercel, etc.).

**Contributing:**
- Open issues or PRs for fixes, accessibility, or feature suggestions.
- Keep changes small and focused; prefer clear commits and descriptive PR titles.

This README is a brief starter; tell me if you want a longer developer guide, CI config, or a deployment workflow added.