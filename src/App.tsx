import { lazy, Suspense } from 'react';
import TopBar from './components/TopBar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ScrollToTop from './components/ScrollToTop';

const ExperienceSection = lazy(() => import('./components/ExperienceSection'));
const EducationSection = lazy(() => import('./components/EducationSection'));
const ProjectsSection = lazy(() => import('./components/ProjectsSection'));
const Footer = lazy(() => import('./components/Footer'));

function SectionFallback() {
  return (
    <div className="py-8 sm:py-10" role="status" aria-live="polite">
      <span className="sr-only">Loading…</span>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <Suspense fallback={<SectionFallback />}>
          <ExperienceSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <EducationSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ProjectsSection />
        </Suspense>
      </main>
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
      <ScrollToTop />
    </div>
  );
}