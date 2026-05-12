# Implementation Plan — pmolmar.github.io

## 1. Objective
Build a clean, minimalist, single-page React portfolio site hosted on GitHub Pages. The site must be bilingual (English / Spanish), support dark/light theme toggle, and display the CV content found in `CV.md` in a responsive, mobile-first layout.

## 2. Tech Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Build Tool | Vite | Fast dev server, small bundle, static export (`vite build`) ideal for GitHub Pages |
| Framework | React 18 | Component-based, mature ecosystem |
| Routing | None (single page) | No need for client-side router |
| Styling | Tailwind CSS | Utility-first, rapid responsive design, built-in dark mode support |
| i18n | react-i18next | Industry standard, easy JSON/TS translation files |
| Icons | lucide-react | Lightweight, consistent, tree-shakeable SVG icons |
| Font | Inter (Google Fonts) | Clean, modern, excellent readability |
| Static Export | `vite build` output | Deploy `/dist` folder directly to GitHub Pages |

## 3. Project Structure

```
pmolmar.github.io/
├── index.html              # Vite entry point (single HTML file)
├── vite.config.ts          # Vite configuration (base path for GitHub Pages)
├── tailwind.config.js      # Tailwind config with darkMode: 'class'
├── postcss.config.js       # PostCSS setup for Tailwind
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies & scripts
├── public/
│   └── (empty for now — favicon, profile photo can be added later)
└── src/
    ├── main.tsx            # React root render
    ├── App.tsx             # Top-level app (theme provider, layout)
    ├── index.css           # Global styles + Tailwind directives + Inter font import
    │
    ├── components/
    │   ├── TopBar.tsx      # Sticky header: language toggle, theme toggle, social links
    │   ├── HeroSection.tsx # Name, title, location, brief tagline
    │   ├── AboutSection.tsx # Summary paragraph
    │   ├── SkillsSection.tsx # Technical & soft skills grid/lists
    │   ├── ExperienceSection.tsx # Timeline of roles
    │   ├── EducationSection.tsx # Degrees & certificates
    │   ├── ProjectsSection.tsx # GitHub projects link / placeholder
    │   └── Footer.tsx      # Simple footer with copyright
    │
    ├── hooks/
    │   └── useTheme.ts     # Manages dark/light class on <html>, persists to localStorage
    │
    ├── i18n/
    │   ├── index.ts        # i18n initialization (react-i18next setup)
    │   ├── CV_en.ts        # All English copy (structured object matching CV.md)
    │   └── CV_es.ts        # All Spanish copy (direct translation of CV_en.ts)
    │
    └── types/
        └── cv.ts           # TypeScript interfaces for CV data structures
```

## 4. Data Architecture

All CV content lives in typed TS objects inside `src/i18n/CV_en.ts` and `src/i18n/CV_es.ts`. This avoids JSON parsing overhead and gives full TypeScript inference.

### Proposed Type Definitions (`src/types/cv.ts`)

```typescript
export interface PersonalInfo {
  name: string;
  status: string;
  location: string;
  fields: string[];
  email: string;
  github: string;
  linkedin: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Job {
  title: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface CVData {
  personal: PersonalInfo;
  summary: string;
  technicalSkills: SkillCategory[];
  softSkills: string[];
  experience: Job[];
  education: Education[];
  projectsLabel: string;
  projectsDescription: string;
}
```

### Translation Keys

The i18n namespace will be `cv`. Example usage:
```tsx
const { t } = useTranslation('cv');
<h1>{t('personal.name')}</h1>
```

## 5. Component Specification

### 5.1 TopBar (`src/components/TopBar.tsx`)
- **Position**: `sticky top-0 z-50`
- **Background**: `bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm`
- **Left**: Language toggle (EN / ES buttons or segmented control)
- **Right**: Theme toggle (sun/moon icon button), social icons (GitHub, LinkedIn, Mail) as icon-only buttons with `aria-label`
- **Responsive**: On mobile, social links may collapse into a hamburger menu or remain as compact icons

### 5.2 HeroSection (`src/components/HeroSection.tsx`)
- **Content**: Large name heading, status/subtitle, location, field tags (pill badges)
- **Styling**: Generous vertical padding (`py-20`), centered or left-aligned on desktop
- **Typography**: `text-4xl md:text-5xl font-bold` for name, `text-lg text-slate-600 dark:text-slate-400` for subtitle

### 5.3 AboutSection (`src/components/AboutSection.tsx`)
- **Content**: Single paragraph from `summary`
- **Styling**: Max-width container (`max-w-3xl`), readable line height (`leading-relaxed`)

### 5.4 SkillsSection (`src/components/SkillsSection.tsx`)
- **Layout**: Two subsections — Technical Skills and Soft Skills
- **Technical**: Grid of cards or category blocks (e.g., Languages, Blockchain, Frontend, Backend, Tools, Methodologies)
- **Soft**: Horizontal wrap of pill badges
- **Responsive**: 1 column mobile, 2 columns tablet, 3 columns desktop

### 5.5 ExperienceSection (`src/components/ExperienceSection.tsx`)
- **Layout**: Vertical timeline or stacked cards
- **Each job**: Title + company + period on one line, bullet points below
- **Styling**: Subtle left border or dot marker for timeline feel

### 5.6 EducationSection (`src/components/EducationSection.tsx`)
- **Layout**: Similar card/list style as Experience but more compact
- **Content**: Degree, institution, period, optional details

### 5.7 ProjectsSection (`src/components/ProjectsSection.tsx`)
- **Content**: Brief text linking to GitHub profile for now ("View all public projects on GitHub")
- **Extensibility**: Easy to add individual project cards later

### 5.8 Footer (`src/components/Footer.tsx`)
- **Content**: Simple copyright line, maybe year auto-generated
- **Styling**: Minimal, subtle color (`text-slate-500`)

## 6. Theme System

### Approach: CSS Class Strategy
- Tailwind configured with `darkMode: 'class'`
- Parent `<html>` element gets `dark` class when dark mode is active
- Toggle button switches class and persists choice to `localStorage`
- On initial load, check `localStorage` then `prefers-color-scheme` as fallback

### Color Palette (Minimalist)
| Purpose | Light | Dark |
|---------|-------|------|
| Background | `bg-white` | `bg-slate-900` |
| Surface | `bg-slate-50` | `bg-slate-800` |
| Text Primary | `text-slate-900` | `text-slate-100` |
| Text Secondary | `text-slate-600` | `text-slate-400` |
| Accent | `text-blue-600` / `bg-blue-600` | `text-blue-400` / `bg-blue-500` |
| Border | `border-slate-200` | `border-slate-700` |

## 7. i18n Setup

### File: `src/i18n/index.ts`
```typescript
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import CV_en from './CV_en';
import CV_es from './CV_es';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { cv: CV_en },
      es: { cv: CV_es },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;
```

### Translation Files
- `CV_en.ts`: Direct mapping of `CV.md` content into the `CVData` structure
- `CV_es.ts`: Complete Spanish translation of all strings

## 8. Responsive Breakpoints

Using Tailwind defaults:
- **Mobile** (`<640px`): Single column, stacked layout, compact top bar
- **Tablet** (`sm:` 640px+): 2-column grids where applicable
- **Desktop** (`lg:` 1024px+): Full layout, max-width centered container (`max-w-5xl mx-auto`)

Key responsive patterns:
- Hero text: `text-3xl sm:text-4xl lg:text-5xl`
- Skills grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- Top bar: always visible, icons may shrink on very small screens
- Section padding: `px-4 sm:px-6 lg:px-8`

## 9. Accessibility Considerations

Per Web Interface Guidelines (to be applied during implementation):
- Icon-only buttons need `aria-label`
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<header>`, `<footer>`
- Focus visible states on all interactive elements
- Language attribute on `<html>` updates with i18n language change
- Sufficient color contrast (Tailwind slate palette is safe)
- Skip-to-content link optional but recommended

## 10. Vite Configuration

### `vite.config.ts`
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // GitHub Pages root domain (pmolmar.github.io)
});
```

### `package.json` scripts
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  }
}
```

## 11. Implementation Phases

### Phase 1 — Bootstrap
1. Initialize Vite + React + TypeScript project
2. Install dependencies: `tailwindcss`, `postcss`, `autoprefixer`, `react-i18next`, `i18next`, `lucide-react`
3. Configure Tailwind, PostCSS, TypeScript, Vite
4. Set up folder structure
5. Create `src/types/cv.ts`

### Phase 2 — Content & i18n
1. Write `CV_en.ts` with all CV data
2. Write `CV_es.ts` with Spanish translations
3. Set up `src/i18n/index.ts`
4. Wire i18n into `main.tsx`

### Phase 3 — Core UI
1. Implement `useTheme` hook
2. Build `TopBar` (language + theme + socials)
3. Build `HeroSection`
4. Build `AboutSection`
5. Build `SkillsSection`

### Phase 4 — Content Sections
1. Build `ExperienceSection`
2. Build `EducationSection`
3. Build `ProjectsSection`
4. Build `Footer`

### Phase 5 — Polish
1. Add smooth scroll behavior
2. Verify all interactive elements have focus states
3. Test responsive layout on mobile viewport
4. Add `index.css` global styles (font import, smooth scroll, base transitions)
5. Verify dark mode toggle works end-to-end
6. Ensure `lang` attribute on `<html>` syncs with i18n

### Phase 6 — Build & Deploy Prep
1. Run `npm run build`
2. Verify `/dist` output
3. Update `index.html` title and meta tags
4. (Future) Configure GitHub Pages deployment

## 12. File Checklist

- [ ] `package.json`
- [ ] `vite.config.ts`
- [ ] `tsconfig.json`
- [ ] `tailwind.config.js`
- [ ] `postcss.config.js`
- [ ] `index.html`
- [ ] `src/main.tsx`
- [ ] `src/App.tsx`
- [ ] `src/index.css`
- [ ] `src/types/cv.ts`
- [ ] `src/i18n/index.ts`
- [ ] `src/i18n/CV_en.ts`
- [ ] `src/i18n/CV_es.ts`
- [ ] `src/hooks/useTheme.ts`
- [ ] `src/components/TopBar.tsx`
- [ ] `src/components/HeroSection.tsx`
- [ ] `src/components/AboutSection.tsx`
- [ ] `src/components/SkillsSection.tsx`
- [ ] `src/components/ExperienceSection.tsx`
- [ ] `src/components/EducationSection.tsx`
- [ ] `src/components/ProjectsSection.tsx`
- [ ] `src/components/Footer.tsx`

## 13. Dependencies List

```json
{
  "dependencies": {
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "i18next": "^23.0.0",
    "react-i18next": "^14.0.0",
    "lucide-react": "^0.400.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "tailwindcss": "^3.4.0",
    "typescript": "^5.4.0",
    "vite": "^5.0.0"
  }
}
```

## 14. Notes
- Keep animations minimal — no heavy motion. Subtle hover transitions (`transition-colors duration-200`) only.
- Do not add external analytics or tracking scripts yet.
- Profile photo placeholder: can be added later as `/public/profile.jpg`.
- All links open in new tab (`target="_blank" rel="noopener noreferrer"`).
- For now, the site is a single static export. No server-side rendering or API routes needed.
