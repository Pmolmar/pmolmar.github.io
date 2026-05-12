import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Mail, Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export default function TopBar() {
  const { i18n } = useTranslation('cv');
  const { theme, toggleTheme } = useTheme();

  const toggleLanguage = () => {
    const next = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(next);
    document.documentElement.lang = next;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/80">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
          aria-label={i18n.language === 'en' ? 'Cambiar a español' : 'Switch to English'}
        >
          <span>{i18n.language === 'en' ? '🇬🇧' : '🇪🇸'}</span>
          <span>{i18n.language.toUpperCase()}</span>
        </button>

        <div className="flex items-center gap-1">
          <a
            href="https://github.com/Pmolmar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="rounded-md p-2 text-slate-600 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/pmolmar/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="rounded-md p-2 text-slate-600 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:pablomm.informa@gmail.com"
            aria-label="Send email"
            className="rounded-md p-2 text-slate-600 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            <Mail size={20} />
          </a>
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="rounded-md p-2 text-slate-600 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>
    </header>
  );
}