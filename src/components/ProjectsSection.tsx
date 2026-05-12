import { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Github, ExternalLink, Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  archived: boolean;
  homepage: string | null;
  updated_at: string;
}

const GITHUB_USERNAME = 'Pmolmar';
const EXCLUDED_REPOS = ['pmolmar.github.io', 'Pmolmar'];

let reposCache: GitHubRepo[] | null = null;
let reposPromise: Promise<GitHubRepo[]> | null = null;

function fetchRepos(): Promise<GitHubRepo[]> {
  if (reposCache) return Promise.resolve(reposCache);
  if (reposPromise) return reposPromise;

  reposPromise = fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`)
    .then((res) => res.json())
    .then((data: GitHubRepo[]) => {
      const filtered = data
        .filter((r) => !r.fork && !r.archived && !EXCLUDED_REPOS.includes(r.name))
        .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
      reposCache = filtered;
      return filtered;
    })
    .catch(() => {
      return [] as GitHubRepo[];
    });

  return reposPromise;
}

export default function ProjectsSection() {
  const { t, i18n } = useTranslation('cv');
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    fetchRepos().then((data) => {
      if (!cancelled) {
        setRepos(data);
        setLoading(false);
      }
    }).catch(() => {
      if (!cancelled) {
        setError(true);
        setLoading(false);
      }
    });
    return () => { cancelled = true; };
  }, []);

  const prefersReducedMotion = useRef(
    typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false,
  );

  const scroll = useCallback((direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.7;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: prefersReducedMotion.current ? 'auto' : 'smooth',
    });
  }, []);

  return (
    <section id="projects" className="py-8 sm:py-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 sm:text-3xl text-pretty">
            {t('headings.projects')}
          </h2>
          <a
            href={t('personal.github')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <Github size={16} aria-hidden="true" />
            {t('personal.githubLabel')}
            <ExternalLink size={12} aria-hidden="true" />
          </a>
        </div>

        {loading ? (
          <p className="mt-6 text-sm text-slate-500 dark:text-slate-400" role="status" aria-live="polite">{t('projectsDescription')}…</p>
        ) : error ? (
          <p className="mt-6 text-sm text-slate-500 dark:text-slate-400" role="alert">
            {i18n.language === 'en' ? 'Could not load projects. ' : 'No se pudieron cargar los proyectos. '}
            <a
              href={t('personal.github')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              {t('personal.githubLabel')}
            </a>
          </p>
        ) : repos.length === 0 ? (
          <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">{t('projectsDescription')}</p>
        ) : (
          <div className="relative mt-6" role="region" aria-label={t('headings.projects')}>
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll projects left"
              className="absolute -left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-1.5 shadow-md ring-1 ring-slate-200 transition-colors hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-slate-800 dark:ring-slate-700 dark:hover:bg-slate-700 sm:block hidden"
            >
              <ChevronLeft size={18} className="text-slate-600 dark:text-slate-300" aria-hidden="true" />
            </button>
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto pb-2 scroll-smooth snap-x snap-mandatory scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {repos.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-shrink-0 snap-start rounded-lg border border-slate-200 bg-slate-50 p-4 transition-colors duration-200 hover:border-blue-300 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-blue-600 dark:hover:bg-slate-700/50 w-64"
                >
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 truncate">
                    {repo.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 line-clamp-2 min-h-[2.5rem]">
                    {repo.description || '\u2014'}
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                    {repo.language && (
                      <span className="rounded bg-slate-200 px-1.5 py-0.5 text-slate-700 dark:bg-slate-700 dark:text-slate-200">
                        {repo.language}
                      </span>
                    )}
                    {repo.stargazers_count > 0 && (
                      <span className="inline-flex items-center gap-0.5">
                        <Star size={12} aria-hidden="true" />
                        {repo.stargazers_count}
                      </span>
                    )}
                  </div>
                </a>
              ))}
            </div>
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll projects right"
              className="absolute -right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-1.5 shadow-md ring-1 ring-slate-200 transition-colors hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-slate-800 dark:ring-slate-700 dark:hover:bg-slate-700 sm:block hidden"
            >
              <ChevronRight size={18} className="text-slate-600 dark:text-slate-300" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}