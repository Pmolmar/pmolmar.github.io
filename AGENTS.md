# Agent Notes — pmolmar.github.io

## What this is
Single-page React portfolio hosted on GitHub Pages. Bilingual (EN/ES), dark/light theme toggle.

## Build & dev
- `npm run dev` — Vite dev server
- `npm run build` — **runs `tsc` then `vite build`** (type errors block the build)
- `npm run preview` — serve the `dist/` folder locally
- No tests, no lint, no CI — just `build`

## TypeScript quirks
- `tsconfig.json`: `strict`, `noUnusedLocals: true`, `noUnusedParameters: true`
- Unused variables/imports **will fail `npm run build`**
- `tsconfig.node.json` is only for `vite.config.ts` (composite, emits)

## Styling & theme
- Tailwind CSS with `darkMode: 'class'` in `tailwind.config.js`
- Theme is toggled by adding/removing `dark` class on `<html>` (`useTheme.ts`)
- Font: Inter (Google Fonts link in `index.html`)

## i18n
- `react-i18next`, namespace `cv`
- Translation data lives in typed TS objects: `src/i18n/CV_en.ts` and `src/i18n/CV_es.ts`
- When updating CV content, **update both files** and keep the `CVData` shape in sync
- `index.html` `<html lang>` is static; language switch happens in-app

## CV source of truth
- Human-readable canonical CV: `CV.md`
- Structured data for the site: `src/i18n/CV_en.ts` + `CV_es.ts`

## Vite config
- `base: '/'` — root domain (`pmolmar.github.io`); change only if moving to a subdirectory
