import { useTranslation } from 'react-i18next';
import { ExternalLink } from 'lucide-react';
import type { Education } from '../types/cv';

export default function EducationSection() {
  const { t } = useTranslation('cv');
  const education = t('education', { returnObjects: true }) as Education[];

  return (
    <section className="py-8 sm:py-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 sm:text-3xl">
          {t('headings.education')}
        </h2>
        <div className="mt-6 space-y-6">
          {education.map((edu) => (
            <article
              key={edu.degree}
              className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                  {edu.degree}
                </h3>
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  {edu.period}
                </span>
              </div>
              <p className="mt-0.5 text-sm font-medium text-blue-600 dark:text-blue-400">
                {edu.institution}
              </p>
              {edu.details && (
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {edu.details}
                  {edu.detailsLink && (
                    <a
                      href={edu.detailsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={edu.detailsLinkLabel}
                      className="ml-1 inline-flex items-center gap-0.5 text-blue-600 underline decoration-blue-300 hover:text-blue-800 dark:text-blue-400 dark:decoration-blue-700 dark:hover:text-blue-300"
                    >
                      {edu.detailsLinkLabel}
                      <ExternalLink size={11} aria-hidden="true" />
                    </a>
                  )}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}