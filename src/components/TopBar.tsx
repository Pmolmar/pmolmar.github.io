import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Mail, Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const NAV_ITEMS = ['about', 'skills', 'experience', 'education', 'projects', 'contact'] as const;

const ThemeToggle = memo(function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="rounded-md p-2 text-slate-600 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
    >
      {theme === 'dark' ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
    </button>
  );
});

const LanguageToggle = memo(function LanguageToggle() {
  const { i18n } = useTranslation('cv');
  const toggleLanguage = useCallback(() => {
    const next = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(next);
    document.documentElement.lang = next;
  }, [i18n]);
  return (
    <button
      onClick={toggleLanguage}
      className="rounded-md px-2.5 py-1.5 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
      aria-label={i18n.language === 'en' ? 'Cambiar a español' : 'Switch to English'}
    >
      {i18n.language === 'en' ? 'ES' : 'EN'}
    </button>
  );
});

const SocialLinks = memo(function SocialLinks() {
  return (
    <div className="flex items-center gap-1">
      <a
        href="https://github.com/Pmolmar"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub profile"
        className="rounded-md p-2 text-slate-600 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
      >
        <Github size={20} aria-hidden="true" />
      </a>
      <a
        href="https://www.linkedin.com/in/pmolmar/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile"
        className="rounded-md p-2 text-slate-600 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
      >
        <Linkedin size={20} aria-hidden="true" />
      </a>
      <a
        href="mailto:pablomm.informa@gmail.com"
        aria-label="Send email"
        className="rounded-md p-2 text-slate-600 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
      >
        <Mail size={20} aria-hidden="true" />
      </a>
    </div>
  );
});

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const { t } = useTranslation('cv');
  return (
    <>
      {NAV_ITEMS.map((key) => (
        <a
          key={key}
          href={`#${key}`}
          onClick={onNavigate}
          className="rounded-md px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
        >
          {t(`headings.${key}`)}
        </a>
      ))}
    </>
  );
}

export default function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/80">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-1">
          <LanguageToggle />
          <div className="hidden md:flex items-center gap-0.5">
            <NavLinks />
          </div>
        </div>
        <div className="flex items-center gap-1">
          <SocialLinks />
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="rounded-md p-2 text-slate-600 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 md:hidden dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="border-t border-slate-200 px-4 pb-4 md:hidden dark:border-slate-700">
          <nav className="flex flex-col gap-1">
            <NavLinks onNavigate={() => setMenuOpen(false)} />
          </nav>
        </div>
      )}
    </header>
  );
}