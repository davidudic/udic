export type ProjectDiscipline = 'Frontend' | 'Backend' | 'DB' | 'Integrations' | 'CMS';

export type ProjectArchitecture = {
  frontend: string[];
  backend: string[];
  database: string[];
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  url?: string;
  image?: string;
  disciplines: ProjectDiscipline[];
  stack: string[];
  role: string[];
  architecture: ProjectArchitecture;
  highlights: string[];
  featured?: boolean;
};

export type ExperienceItem = {
  company: string;
  role: string;
  location?: string;
  period: string;
  bullets: string[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

const projects: Project[] = [
  {
    slug: 'chirurgie-moskevska',
    title: 'Chirurgie Moskevská',
    description:
      'Web pro chirurgickou ambulanci v Liberci — online rezervace, dynamická správa ordinačních hodin a blog.',
    url: 'https://www.chirurgie-moskevska.cz/',
    image: '/project4.png',
    disciplines: ['Frontend', 'Backend', 'DB'],
    stack: ['Next.js', 'TypeScript', 'MongoDB', 'CSS Modules'],
    role: [
      'Full-stack vývoj v Next.js',
      'MongoDB pro dynamickou správu obsahu',
      'Admin panel pro editaci ordinační doby a článků',
      'Online rezervace + SEO optimalizace',
    ],
    architecture: {
      frontend: ['Next.js (App Router)', 'TypeScript', 'CSS Modules'],
      backend: ['Next.js Route Handlers', 'Admin API'],
      database: ['MongoDB (ordinace, články, rezervace)'],
    },
    highlights: [
      'Online rezervační systém',
      'Dynamická správa ordinačních hodin',
      'Blog s admin editací',
    ],
    featured: true,
  },
  {
    slug: 'restaurace-jakoby',
    title: 'Restaurace JAKOBY',
    description:
      'Web pro restauraci v Brně — menu, rezervační formulář, galerie. Čistý design, rychlé načítání.',
    url: 'https://restauracejakoby.cz/',
    image: '/project1.png',
    disciplines: ['Frontend'],
    stack: ['React', 'Next.js', 'CSS', 'JavaScript'],
    role: [
      'Responzivní layout a komponenty',
      'Rezervační formulář',
      'Optimalizace rychlosti a animace',
    ],
    architecture: {
      frontend: ['React', 'Next.js', 'CSS'],
      backend: ['—'],
      database: ['—'],
    },
    highlights: ['Bleskové načítání', 'Čisté UI bloky s typografickou hierarchií', 'SEO-ready struktura'],
    featured: true,
  },
  {
    slug: 'la-denta',
    title: 'LA DENTA',
    description:
      'Web na míru pro zubní kliniku v Holešovicích. Vlastní šablona, napojení na rezervační systém, optimalizace pro lokální SEO.',
    url: 'https://www.ladenta.cz/',
    image: '/project2.png',
    disciplines: ['CMS', 'Frontend'],
    stack: ['Custom WordPress', 'PHP', 'Bootstrap 5', 'JavaScript'],
    role: [
      'Vlastní WordPress šablona',
      'Napojení na rezervační systém',
      'Swiper slidery a interaktivita',
    ],
    architecture: {
      frontend: ['Bootstrap 5', 'Swiper.js', 'Custom CSS'],
      backend: ['WordPress (PHP)', 'Vlastní šablona'],
      database: ['MySQL'],
    },
    highlights: [
      'Žádná šablona z internetu — custom kód',
      'Lokální SEO pro Holešovice',
      'Klient si sám spravuje obsah',
    ],
    featured: true,
  },
  {
    slug: 'katerina-bendova',
    title: 'Kateřina Bendová',
    description:
      'Portfolio pro finanční poradkyni — elegantní storytelling, přehledné služby a důraz na důvěru.',
    url: 'https://katerinabendova.cz/',
    image: '/project3.png',
    disciplines: ['Frontend'],
    stack: ['React', 'Tailwind CSS', 'Framer Motion'],
    role: [
      'Komponentový layout + animace s respektem k přístupnosti',
      'Zrychlení webu pomocí optimalizace assets a typografie',
      'Jasná struktura služeb a “next step” CTA',
    ],
    architecture: {
      frontend: ['React', 'Tailwind CSS', 'Framer Motion'],
      backend: ['—'],
      database: ['—'],
    },
    highlights: ['Elegantní motion bez rušení obsahu', 'Responzivní grid a čitelnost', 'Rychlé načítání'],
  },
  {
    slug: 'portfolio-udic',
    title: 'Portfolio (udic.cz)',
    description:
      'Moderní Next.js portfolio s kontaktním API a důrazem na výkon, přístupnost a čistý design systém.',
    disciplines: ['Frontend', 'Backend'],
    stack: ['Next.js', 'TypeScript', 'Route Handlers', 'Nodemailer'],
    role: [
      'Komponentový systém + design tokeny (CSS variables)',
      'Kontaktní formulář s API endpointem a validací',
      'Optimalizace bundle, obrazů a motion pro plynulý UX',
    ],
    architecture: {
      frontend: ['Next.js', 'TypeScript', 'CSS Modules'],
      backend: ['Next.js Route Handlers', 'Email delivery (Nodemailer)'],
      database: ['—'],
    },
    highlights: ['A11y focus states + keyboard UX', 'Subtilní background FX (low CPU)', 'SEO & structured data'],
  },
  {
    slug: 'magna-intranet',
    title: 'Magna · Intranet & tooling',
    description:
      'Interní webové nástroje a integrace pro provoz — práce s daty, workflow a napojení na hardware/identifikaci.',
    disciplines: ['Frontend', 'Backend', 'DB', 'Integrations'],
    stack: ['C#', '.NET', 'TypeScript', 'PostgreSQL', '.NET MAUI', 'NFC/RFID'],
    role: [
      'Vývoj intranetových modulů (UI + backend logika) pro interní procesy',
      'Databázový návrh a práce se SQL/PostgreSQL (data, výkon, konzistence)',
      'Integrace NFC/RFID a automatizace prototypů (včetně testing mindsetu)',
    ],
    architecture: {
      frontend: ['TypeScript UI', 'Intranet web'],
      backend: ['.NET (C#) services / API'],
      database: ['PostgreSQL'],
    },
    highlights: ['Integrace s provozními zařízeními', 'Reálná data a workflow', 'Důraz na kvalitu a testování'],
  },
];

export const content = {
  person: {
    name: 'David Udič',
    title: 'Full‑stack developer',
    location: 'Liberec · Remote (CZ/EN)',
    summary:
      'Dělám weby a interní nástroje — frontend, backend, databáze. Řeším to celé, ne jen kousek.',
    principles: [
      'Termíny co dodržím',
      'Neříkám "nejde to"',
      'Dodám, co slíbím',
    ],
    stats: [
      { label: 'Praxe', value: '3+ roky', hint: 'a učím se dál' },
      { label: 'Spolupráce', value: 'Solo / tým', hint: 'end‑to‑end delivery' },
      { label: 'Stack', value: 'TS + C#', hint: 'Next.js / .NET' },
    ],
  },
  links: {
    linkedin: 'https://linkedin.com/in/david-udic',
  },
  contact: {
    email: 'davidudic06fx@gmail.com',
    phone: '+420 727 828 136',
    businessId: 'IČ: 23181176',
  },
  experience: [
    {
      company: 'Magna Exteriors (Bohemia), s.r.o.',
      role: 'Software Developer (Full‑stack)',
      location: 'CZ',
      period: '2025',
      bullets: [
        'C#, TypeScript',
        'SQL, PostgreSQL, databáze',
        'MAUI mobilní aplikace',
        'NFC/RFID čipy',
        'AI (automatizace/prototypy)',
        'Intranet web vývoj',
        'Testing',
      ],
    },
  ] satisfies ExperienceItem[],
  skills: [
    {
      title: 'Frontend',
      items: ['React', 'Next.js', 'TypeScript', 'CSS Modules', 'HTML/CSS', 'Framer Motion', 'UX/UI'],
    },
    { title: 'Backend', items: ['Node.js', '.NET (C#)', 'REST API', 'Auth & Integrations'] },
    { title: 'Databases', items: ['PostgreSQL', 'SQL', 'MongoDB', 'Schema & Query design'] },
    { title: 'Mobile & Integrations', items: ['.NET MAUI', 'NFC/RFID', '3rd‑party APIs', 'Automation/AI prototypes'] },
    { title: 'Testing & Tooling', items: ['Testing mindset', 'Git', 'CI/CD basics', 'Vercel', 'Figma'] },
  ] satisfies SkillGroup[],
  projects,
  selectedWork: projects.filter((project) => project.featured),
} as const;
