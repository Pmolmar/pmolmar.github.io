import type { CVData } from '../types/cv';

const CV_es: CVData = {
  personal: {
    name: 'Pablo Molina Martínez',
    status: 'Ingeniero Web3 / Full Stack',
    location: 'Canarias, España',
    fields: ['Identidad Soberana', 'Blockchain', 'Web3', 'Scrum', 'Desarrollo Web'],
    email: 'pablomm.informa@gmail.com',
    github: 'https://github.com/Pmolmar',
    githubLabel: 'GitHub',
    linkedin: 'https://www.linkedin.com/in/pmolmar/',
  },
  summary:
    'Ingeniero Informático con más de 4 años de experiencia diseñando y construyendo sistemas basados en blockchain, con un fuerte enfoque en Identidad Soberana (SSI) y arquitecturas descentralizadas. Experimentado en entornos de investigación y producción, desarrollando aplicaciones Web3 utilizando JavaScript, Rust, Ethereum y tecnologías web modernas. Capacidad demostrada para construir APIs escalables, integrar redes blockchain y contribuir a soluciones innovadoras de identidad y trazabilidad. Disponible para trabajo remoto e entornos internacionales.',
  technicalSkills: [
    { category: 'Lenguajes', items: ['Rust', 'JavaScript', 'TypeScript', 'Python', 'C++'] },
    {
      category: 'Blockchain',
      items: ['Ethereum', 'Hyperledger Besu', 'Micro DLTs', 'SSI', 'DID', 'Credenciales Verificables'],
    },
    { category: 'Frontend', items: ['React', 'Svelte', 'Usabilidad'] },
    { category: 'Backend', items: ['Node.js', 'APIs REST', 'Sistemas Distribuidos', 'Microservicios'] },
    { category: 'Herramientas y DevOps', items: ['Linux', 'Docker', 'Git', 'Postman', 'VS Code', 'Zed'] },
    { category: 'Metodologías', items: ['Agile', 'Scrum', 'Trabajo Remoto'] },
  ],
  softSkills: ['Trabajo en equipo', 'Resolución de problemas', 'Iniciativa', 'Adaptabilidad'],
  experience: [
    {
      title: 'Investigador / Desarrollador Blockchain',
      company: 'Proyecto GAVIN — Universidad de Vigo',
      period: 'Ene 2024 – Oct 2025',
      bullets: [
        { text: 'Investigación sobre interoperabilidad blockchain, diseñando y probando conexiones entre múltiples redes blockchain', links: [{ text: 'Proyecto GAVIN', href: 'https://gavin.webs.uvigo.gal/', label: 'Sitio web del Proyecto GAVIN' }] },
        { text: 'Diseño y desarrollo de APIs REST para sistemas basados en Ethereum utilizados en aplicaciones web', links: [{ text: 'Código fuente', href: 'https://github.com/gavin-research/GavinProject', label: 'Repositorio GavinProject' }] },
        'Aplicación de tecnología blockchain a sistemas de identidad y datos educativos conforme al RGPD',
        'Colaboración en un entorno de investigación, contribuyendo a decisiones de arquitectura e implementación',
      ],
    },
    {
      title: 'R+D+I en Web3',
      company: 'Open Canarias S.L',
      period: 'Sept 2021 – Ene 2024',
      bullets: [
        'Desarrollo y mantenimiento de soluciones SSI, incluyendo sistemas de gestión de identidad y wallets',
        'Diseño y desarrollo de un wallet SSI basado en Alastria ID',
        { text: 'Desarrollo de aplicación web blockchain para control de asistencia de empleados utilizando Alastria ID para gestión de identidad', links: [{ text: 'Alastria', href: 'https://alastria.io/sistema-de-registro-de-horas-de-trabajo-de-empleados/', label: 'Alastria control de asistencia' }] },
        { text: 'Desarrollo y mantenimiento de un gestor de transacciones Ethereum, mejorando la fiabilidad y manejo de transacciones', links: [{ text: 'BeInCrypto', href: 'https://es.beincrypto.com/espana-empresa-open-canarias-lanza-solucion-eth-crear-sistemas-trazabilidad/', label: 'Artículo de BeInCrypto' }, { text: 'Gobierno de Canarias', href: 'https://www3.gobiernodecanarias.org/noticias/tecnologia-blockchain-para-la-eficiencia-empresarial/', label: 'Artículo del Gobierno de Canarias' }] },
        { text: 'Desarrollo de componentes multiplataforma para el SDK de Taple (iOS y Android)', links: [{ text: 'GitHub', href: 'https://github.com/opencanarias/taple-ffi', label: 'Repositorio taple-ffi' }] },
        { text: 'Participación en proyecto R&D industrial centrado en SSI e integración IoT (proyecto SecBluRed)', links: [{ text: 'SecBluRed', href: 'https://www.mtp.es/innovacion/secblured/', label: 'Proyecto SecBluRed' }] },
        'Trabajo en equipos Agile, contribuyendo en backend, frontend, blockchain y diseño de sistemas',
      ],
    },
  ],
  education: [
    {
      degree: 'Máster en Ingeniería Informática',
      institution: 'Universidad de La Laguna',
      period: '2021 – En curso',
      details:
        'Ampliando habilidades de ingeniería y estudiando campos no cubiertos por el grado, como computación en la nube, inteligencia de negocio, SEO, herramientas web y gestión de proyectos.',
    },
    {
      degree: 'Grado en Ingeniería Informática',
      institution: 'Universidad de La Laguna',
      period: '2017 – 2021',
      details:
        'Proyecto fin de grado basado en la investigación e implementación de Identidad Soberana con KERI.',
      detailsLink: 'https://riull.ull.es/xmlui/handle/915/24754',
      detailsLinkLabel: 'Ver proyecto',
    },
    {
      degree: 'Certificado de Aptitud en Inglés B2',
      institution: 'Escuela Oficial de Idiomas',
      period: '2015 – 2017',
    },
  ],
  projectsLabel: 'Proyectos',
  projectsDescription:
    'Ver todos los proyectos públicos en mi perfil de GitHub.',
  headings: {
    about: 'Sobre mí',
    skills: 'Habilidades',
    softSkills: 'Habilidades Blandas',
    experience: 'Experiencia',
    education: 'Educación',
    projects: 'Proyectos',
  },
};

export default CV_es;