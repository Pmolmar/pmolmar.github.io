import { useTranslation } from 'react-i18next';

export default function AboutSection() {
  const { t } = useTranslation('cv');

  return (
    <section id="about" className="py-8 sm:py-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 sm:text-3xl text-pretty">
          {t('headings.about')}
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
          {t('summary')}
        </p>
      </div>
    </section>
  );
}