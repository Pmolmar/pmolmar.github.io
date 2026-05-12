import { useTranslation } from 'react-i18next';
import { MapPin } from 'lucide-react';

export default function HeroSection() {
  const { t } = useTranslation('cv');

  return (
    <section className="py-10 sm:py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl text-pretty">
          {t('personal.name')}
        </h1>
        <p className="mt-3 text-xl text-blue-600 dark:text-blue-400 sm:mt-4 sm:text-2xl">
          {t('personal.status')}
        </p>
        <p className="mt-2 flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
          <MapPin size={16} aria-hidden="true" />
          <span>{t('personal.location')}</span>
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {(t('personal.fields', { returnObjects: true }) as string[]).map(
            (field: string) => (
              <span
                key={field}
                className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
              >
                {field}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}