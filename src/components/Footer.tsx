import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

export default function Footer() {
  const { t, i18n } = useTranslation('cv');
  const year = new Date().getFullYear();
  const cvFile = i18n.language === 'es' ? '/cv-es.pdf' : '/cv-en.pdf';

  return (
    <>
      <section id="contact" className="py-8 sm:py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 sm:text-3xl text-pretty">
            {t('headings.contact')}
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            {t('contactTagline')}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`mailto:${t('personal.email')}`}
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-blue-500 dark:hover:bg-blue-400"
            >
              <Mail size={16} aria-hidden="true" />
              {t('personal.email')}
            </a>
            <a
              href={cvFile}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-colors duration-200 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
            >
              <Download size={16} aria-hidden="true" />
              {t('downloadCV')}
            </a>
            <a
              href={t('personal.github')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-colors duration-200 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
            >
              <Github size={16} aria-hidden="true" />
              {t('personal.githubLabel')}
            </a>
            <a
              href={t('personal.linkedin')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-colors duration-200 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
            >
              <Linkedin size={16} aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>
      <footer className="border-t border-slate-200 py-8 dark:border-slate-700">
        <div className="mx-auto max-w-5xl px-4 text-center text-sm text-slate-500 dark:text-slate-400 sm:px-6 lg:px-8">
          <p>&copy; {year} Pablo Molina Martínez</p>
        </div>
      </footer>
    </>
  );
}