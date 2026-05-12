import { useTranslation } from "react-i18next";
import { MapPin, Mail, Download } from "lucide-react";

export default function HeroSection() {
  const { t, i18n } = useTranslation("cv");
  const cvFile =
    i18n.language === "es"
      ? "/cv-es-pablomolina.pdf"
      : "/cv-en-pablomolina.pdf";

  return (
    <section id="hero" className="py-10 sm:py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl text-pretty">
          {t("personal.name")}
        </h1>
        <p className="mt-3 text-xl text-blue-600 dark:text-blue-400 sm:mt-4 sm:text-2xl">
          {t("personal.status")}
        </p>
        <p className="mt-2 flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
          <MapPin size={16} aria-hidden="true" />
          <span>{t("personal.location")}</span>
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {(t("personal.fields", { returnObjects: true }) as string[]).map(
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
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={`mailto:${t("personal.email")}`}
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-blue-500 dark:hover:bg-blue-400"
          >
            <Mail size={16} aria-hidden="true" />
            {t("headings.contact")}
          </a>
          <a
            href={cvFile}
            download
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-colors duration-200 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
          >
            <Download size={16} aria-hidden="true" />
            {t("downloadCV")}
          </a>
        </div>
      </div>
    </section>
  );
}
