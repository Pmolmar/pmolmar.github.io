import { useTranslation } from 'react-i18next';
import type { SkillCategory } from '../types/cv';

export default function SkillsSection() {
  const { t } = useTranslation('cv');

  const technicalSkills = t('technicalSkills', { returnObjects: true }) as SkillCategory[];
  const softSkills = t('softSkills', { returnObjects: true }) as string[];

  return (
    <section className="py-8 sm:py-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 sm:text-3xl">
          {t('headings.skills')}
        </h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technicalSkills.map((cat) => (
            <div
              key={cat.category}
              className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800"
            >
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                {cat.category}
              </h3>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="rounded bg-white px-2 py-0.5 text-sm text-slate-700 dark:bg-slate-900 dark:text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <h3 className="font-semibold text-slate-900 dark:text-slate-100">
            {t('headings.softSkills')}
          </h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}