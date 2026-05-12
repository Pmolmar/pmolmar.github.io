import { useTranslation } from 'react-i18next';
import { ExternalLink } from 'lucide-react';
import type { Job, Bullet } from '../types/cv';

function isBullet(value: string | Bullet): value is Bullet {
  return typeof value === 'object';
}

function BulletContent({ bullet }: { bullet: Bullet }) {
  return (
    <>
      {bullet.text}
      {bullet.links && bullet.links.length > 0 && (
        <>
          {' ('}
          {bullet.links.map((link, j) => (
            <span key={link.href}>
              {j > 0 && ', '}
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="inline-flex items-center gap-0.5 text-blue-600 underline decoration-blue-300 hover:text-blue-800 dark:text-blue-400 dark:decoration-blue-700 dark:hover:text-blue-300"
              >
                {link.text}
                <ExternalLink size={11} aria-hidden="true" />
              </a>
            </span>
          ))}
          {')'}
        </>
      )}
    </>
  );
}

export default function ExperienceSection() {
  const { t } = useTranslation('cv');
  const jobs = t('experience', { returnObjects: true }) as Job[];

  return (
    <section className="py-8 sm:py-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 sm:text-3xl">
          {t('headings.experience')}
        </h2>
        <div className="mt-6 border-l-2 border-blue-600 pl-6 dark:border-blue-400">
          {jobs.map((job, i) => (
            <article key={job.title} className={i === 0 ? 'relative' : 'relative mt-6'}>
              <div className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-blue-600 dark:bg-blue-400" />
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                  {job.title}
                </h3>
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  {job.period}
                </span>
              </div>
              <p className="mt-0.5 text-sm font-medium text-blue-600 dark:text-blue-400">
                {job.company}
              </p>
              <ul className="mt-2 space-y-1">
                {job.bullets.map((bullet, i) => (
                  <li key={i} className="text-slate-600 dark:text-slate-300">
                    <span className="mr-2 text-slate-400 dark:text-slate-500" aria-hidden="true">•</span>
                    {isBullet(bullet) ? <BulletContent bullet={bullet} /> : bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}