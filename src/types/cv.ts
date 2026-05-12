export interface PersonalInfo {
  name: string;
  status: string;
  location: string;
  fields: string[];
  email: string;
  github: string;
  githubLabel: string;
  linkedin: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface BulletLink {
  text: string;
  href: string;
  label?: string;
}

export interface Bullet {
  text: string;
  links?: BulletLink[];
}

export interface Job {
  title: string;
  company: string;
  period: string;
  bullets: (string | Bullet)[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details?: string;
  detailsLink?: string;
  detailsLinkLabel?: string;
}

export interface SectionHeadings {
  about: string;
  skills: string;
  softSkills: string;
  experience: string;
  education: string;
  projects: string;
  contact: string;
}

export interface CVData {
  personal: PersonalInfo;
  summary: string;
  technicalSkills: SkillCategory[];
  softSkills: string[];
  experience: Job[];
  education: Education[];
  projectsLabel: string;
  projectsDescription: string;
  downloadCV: string;
  contactTagline: string;
  headings: SectionHeadings;
}