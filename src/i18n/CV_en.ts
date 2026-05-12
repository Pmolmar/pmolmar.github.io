import type { CVData } from '../types/cv';

const CV_en: CVData = {
  personal: {
    name: 'Pablo Molina Martínez',
    status: 'Web3 / Full Stack Engineer',
    location: 'Canary Islands, Spain',
    fields: ['Self-Sovereign Identity', 'Blockchain', 'Web3', 'Scrum', 'Web-Dev'],
    email: 'pablomm.informa@gmail.com',
    github: 'https://github.com/Pmolmar',
    githubLabel: 'GitHub',
    linkedin: 'https://www.linkedin.com/in/pmolmar/',
  },
  summary:
    'Computer Engineer with 4+ years of experience designing and building blockchain-based systems, with a strong focus on Self-Sovereign Identity (SSI) and decentralized architectures. Experienced in both research and production environments, developing Web3 applications using JavaScript, Rust, Ethereum and modern web technologies. Proven ability to build scalable APIs, integrate blockchain networks, and contribute to innovative identity and traceability solutions. Open to remote work and international environments.',
  technicalSkills: [
    { category: 'Languages', items: ['Rust', 'JavaScript', 'TypeScript', 'Python', 'C++'] },
    {
      category: 'Blockchain',
      items: ['Ethereum', 'Hyperledger Besu', 'Micro DLTs', 'SSI', 'DID', 'Verifiable Credentials'],
    },
    { category: 'Frontend', items: ['React', 'Svelte', 'Usability'] },
    { category: 'Backend', items: ['Node.js', 'REST APIs', 'Distributed Systems', 'Microservices'] },
    { category: 'Tools & DevOps', items: ['Linux', 'Docker', 'Git', 'Postman', 'VS Code', 'Zed'] },
    { category: 'Methodologies', items: ['Agile', 'Scrum', 'Remote Work'] },
  ],
  softSkills: ['Teamwork', 'Problem-solving', 'Initiative', 'Adaptability'],
  experience: [
    {
      title: 'Blockchain Researcher / Developer',
      company: 'GAVIN Project — University of Vigo',
      period: 'Jan 2024 – Oct 2025',
      bullets: [
        { text: 'Conducted research on blockchain interoperability, designing and testing connections between multiple blockchain networks', links: [{ text: 'GAVIN Project', href: 'https://gavin.webs.uvigo.gal/', label: 'GAVIN Project website' }] },
        { text: 'Designed and developed REST APIs for Ethereum-based systems used in web apps', links: [{ text: 'Source code', href: 'https://github.com/gavin-research/GavinProject', label: 'GavinProject GitHub' }] },
        'Applied blockchain technology to GDPR-compliant identity and education data systems',
        'Collaborated in a research-driven environment, contributing to architecture and implementation decisions',
      ],
    },
    {
      title: 'R+D+I in Web3',
      company: 'Open Canarias S.L',
      period: 'Sept 2021 – Jan 2024',
      bullets: [
        'Developed and maintained SSI solutions, including identity management systems and wallets',
        'Designed and developed an SSI wallet based on Alastria ID',
        { text: 'Developed blockchain-based web app for employee time tracking using Alastria ID for identity management', links: [{ text: 'Alastria', href: 'https://alastria.io/sistema-de-registro-de-horas-de-trabajo-de-empleados/', label: 'Alastria employee time tracking' }] },
        { text: 'Developed and maintained an Ethereum transaction manager, improving reliability and handling of transactions', links: [{ text: 'BeInCrypto', href: 'https://es.beincrypto.com/espana-empresa-open-canarias-lanza-solucion-eth-crear-sistemas-trazabilidad/', label: 'BeInCrypto article' }, { text: 'Gobierno de Canarias', href: 'https://www3.gobiernodecanarias.org/noticias/tecnologia-blockchain-para-la-eficiencia-empresarial/', label: 'Gobierno de Canarias article' }] },
        { text: 'Developed cross-platform components for the Taple SDK (iOS and Android)', links: [{ text: 'GitHub', href: 'https://github.com/opencanarias/taple-ffi', label: 'taple-ffi repository' }] },
        { text: 'Participated in industrial R&D project focused on SSI and IoT integration (SecBluRed project)', links: [{ text: 'SecBluRed', href: 'https://www.mtp.es/innovacion/secblured/', label: 'SecBluRed project' }] },
        'Worked in Agile teams, contributing across backend, frontend, blockchain and system design',
      ],
    },
  ],
  education: [
    {
      degree: "Master's Degree in Computer Engineering",
      institution: 'University of La Laguna',
      period: '2021 – Ongoing',
      details:
        'Expanding engineering skills and studying fields not covered by the degree, such as cloud computing, business intelligence, SEO, web tools and project management.',
    },
    {
      degree: "Bachelor's Degree in Computer Engineering",
      institution: 'University of La Laguna',
      period: '2017 – 2021',
      details:
        'End-of-degree project based on research and implementation of Self-Sovereign Identity with KERI.',
      detailsLink: 'https://riull.ull.es/xmlui/handle/915/24754',
      detailsLinkLabel: 'View project',
    },
    {
      degree: 'English Language Proficiency Certificate B2',
      institution: 'Official Language School',
      period: '2015 – 2017',
    },
  ],
  projectsLabel: 'Projects',
  projectsDescription:
    'View all public projects on my GitHub profile.',
  headings: {
    about: 'About',
    skills: 'Skills',
    softSkills: 'Soft Skills',
    experience: 'Experience',
    education: 'Education',
    projects: 'Projects',
  },
};

export default CV_en;