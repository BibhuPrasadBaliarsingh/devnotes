# DevNotes — Developer Learning & Notes Platform

A study platform for developers: pick a technology, read structured notes, track your
progress. Built with **React + Vite**, **JavaScript** (no TypeScript), **Tailwind CSS**,
and **React Router's data-router API**.

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build      # production build to dist/
npm run preview    # preview the production build locally
```

## Architecture

- **Data-driven courses** — every course lives as plain JS data under
  `src/data/courses/<id>/index.js` (chapters → topics → content blocks). The UI never
  hardcodes course content; it renders whatever data is registered in `src/data/index.js`.
  Adding a new course = one new data file + one line in the registry, no new pages or
  components.
- **Content blocks** — a topic's `content` array is a list of typed blocks
  (`paragraph`, `heading`, `list`, `code`, `table`, `callout`, `keypoints`).
  `src/components/notes/NoteContent.jsx` maps each block type to a component, so new
  block types only need to be taught to that one file.
- **Routing** — `createBrowserRouter` + `RouterProvider` (`src/router/index.jsx`).
  Course/topic pages use their own `CourseLayout` (with the chapter sidebar); every other
  page uses `MainLayout`.
- **State** — three React Context providers, each with a single responsibility and
  localStorage persistence: `ThemeContext` (light/dark), `ProgressContext` (completed +
  recently viewed topics), `BookmarksContext` (saved topics).
- **Services** — `src/services/*` is the only place that touches local data /
  localStorage today. Swapping local data for a real backend later means changing these
  files, not the UI.

## Project structure

```
src/
├── components/     # common, layout, navigation, notes, search, ui
├── contexts/        # ThemeContext, ProgressContext, BookmarksContext
├── data/             # course content (data-driven, see above)
├── layouts/          # MainLayout, CourseLayout
├── pages/            # Home, Learn, Course, Topic, Search, Bookmarks, Progress, About, NotFound
├── router/            # createBrowserRouter config
├── services/           # courseService, searchService, progressService
├── constants/           # route + storage-key constants (no magic strings)
├── utils/                 # storage helpers, icon-name → component map
└── styles/                 # globals.css (Tailwind v4) + variables.css (design tokens)
```

## Currently covered

React, CSS, Node.js, and Git & GitHub (44 topics total). Planned next: HTML,
JavaScript, Express, MongoDB, TypeScript, Next.js, and DSA — all addable as new
`src/data/courses/*` files without touching the UI.
