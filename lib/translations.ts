export type Lang = "en" | "es";

export type ProjectModalBlock =
  | { type: "paragraph"; text: string }
  | { type: "badges"; items: string[] }
  | { type: "keyValue"; items: { label: string; value: string }[] }
  | { type: "table"; rows: { label: string; status: string; note: string }[] }
  | { type: "list"; items: { title: string; description: string }[] }
  | { type: "subproject"; title: string; description: string; stack: string[] };

export type ProjectModalSection = {
  heading: string;
  blocks: ProjectModalBlock[];
};

export type ProjectModalContent = {
  subtitle?: string;
  status?: string;
  link?: { label: string; href: string };
  sections: ProjectModalSection[];
};

export type Translations = {
  nav: {
    about: string;
    portfolio: string;
    stack: string;
    contact: string;
    cv: string;
  };
  hero: {
    role: string;
    greeting: string;
    intro: string;
    scroll: string;
    photoAlt: string;
  };
  about: {
    label: string;
    paragraphs: string[];
    creatorLinkText: string;
    skills: string[];
  };
  portfolio: {
    label: string;
    viewProject: string;
    stillInDevelopment: string;
    closeModal: string;
    projects: {
      name: string;
      description: string;
      stack: string[];
      modal: ProjectModalContent;
    }[];
  };
  stack: {
    title: string;
    groups: {
      label: string;
      tools: string[];
    }[];
  };
  contact: {
    title: string;
    subtitle: string;
    linkedin: string;
    github: string;
    copied: string;
    backToTop: string;
    creatorLink: string;
  };
};

export const translations: Record<Lang, Translations> = {
  en: {
    nav: {
      about: "About Me",
      portfolio: "Portfolio",
      stack: "Stack",
      contact: "Contact",
      cv: "Download CV ↗",
    },
    hero: {
      role: "Full Stack Developer",
      greeting: "Hello,",
      intro: "— I'm Marcos Dura",
      scroll: "Scroll down ↓",
      photoAlt: "Marcos Dura",
    },
    about: {
      label: "About Me",
      paragraphs: [
        "Final year Computer Science student at Universidad de la República (FING), Uruguay. I build fullstack products with Next.js, FastAPI, and PostgreSQL — from idea to deployed app.",
        "Previously at Tata Consultancy Services supporting Microsoft enterprise clients in English. I bring both technical depth and communication skills to every team I join.",
        "When I'm not coding, I create outdoor and travel content on YouTube and Instagram — which means I also know how to ship creative projects and build an audience from scratch.",
      ],
      creatorLinkText: "YouTube and Instagram",
      skills: ["Next.js", "FastAPI", "PostgreSQL", "AI / Automation"],
    },
    portfolio: {
      label: "Selected Projects",
      viewProject: "View project ↗",
      stillInDevelopment: "Still in development",
      closeModal: "Close",
      projects: [
        {
          name: "Rumbo",
          description:
            "Outdoor spots discovery platform for Uruguay (camping, trekking, climbing, surf).",
          stack: ["Next.js", "FastAPI", "PostgreSQL", "Leaflet"],
          modal: {
            status: "Not launched yet — in development",
            sections: [
              {
                heading: "What is it?",
                blocks: [
                  {
                    type: "paragraph",
                    text: "An app to find and discover outdoor spots and experiences in Uruguay: camping, trekking, climbing, kayaking, surfing, and more.",
                  },
                  {
                    type: "paragraph",
                    text: "It hasn't launched yet — it's still in active development.",
                  },
                ],
              },
              {
                heading: "Stack",
                blocks: [
                  { type: "badges", items: ["FastAPI", "Next.js", "PostgreSQL", "Tailwind CSS"] },
                ],
              },
            ],
          },
        },
        {
          name: "Instagram Analytics Dashboard",
          description:
            "Personal analytics platform with AI-powered content analysis.",
          stack: ["Next.js", "FastAPI", "OpenAI API"],
          modal: {
            status: "Portfolio demo — some features are disabled or simulated",
            link: { label: "View demo ↗", href: "https://instagram-analytics-static.vercel.app/" },
            sections: [
              {
                heading: "What is it?",
                blocks: [
                  {
                    type: "paragraph",
                    text: "A full-stack analytics dashboard for Instagram: reach, engagement, audience breakdown, and an AI assistant that suggests content strategy.",
                  },
                  {
                    type: "paragraph",
                    text: "This is a static demo with real data from @marcosdurayt, snapshot from July 2026.",
                  },
                ],
              },
              {
                heading: "Stack",
                blocks: [
                  {
                    type: "badges",
                    items: ["Next.js 14", "FastAPI", "SQLite", "OpenAI API", "Supadata API", "Tailwind CSS"],
                  },
                ],
              },
            ],
          },
        },
        {
          name: "AI Automation Portfolio",
          description: "n8n automations using OpenAI, Supabase and Supadata.",
          stack: ["n8n", "OpenAI", "Supabase"],
          modal: {
            subtitle:
              "Several automation projects built with n8n, the OpenAI API, Supabase, and Supadata.",
            sections: [
              {
                heading: "Projects",
                blocks: [
                  {
                    type: "subproject",
                    title: "YouTube assistant",
                    description:
                      "Analyzes the latest videos from a given channel, or generates content ideas for a niche based on the latest videos in that niche.",
                    stack: ["n8n", "OpenAI API", "Supabase"],
                  },
                  {
                    type: "subproject",
                    title: "Payroll & invoicing automation",
                    description:
                      "Automates the generation of invoices and payroll receipts for a company, from the foreman's field form to the creation of the receipts. This process used to be entirely manual: the form was filled out by hand on paper, copied by hand into a spreadsheet, and receipt generation was outsourced to another company.",
                    stack: ["n8n", "Tally", "Google Sheets"],
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    stack: {
      title: "What I work with",
      groups: [
        { label: "Frontend", tools: ["Next.js", "TypeScript", "Tailwind CSS"] },
        { label: "Backend", tools: ["FastAPI", "SQLAlchemy", "PostgreSQL"] },
        {
          label: "AI / Automation",
          tools: ["n8n", "OpenAI API", "Anthropic API", "Supabase pgvector"],
        },
        {
          label: "Tools",
          tools: ["Claude Code", "Vercel", "Railway", "Cloudinary"],
        },
      ],
    },
    contact: {
      title: "Let's work together.",
      subtitle: "Open to full-time roles and freelance projects in Uruguay and remote.",
      linkedin: "LinkedIn ↗",
      github: "GitHub ↗",
      copied: "Copied",
      backToTop: "Back to top ↑",
      creatorLink: "I also create content ↗",
    },
  },
  es: {
    nav: {
      about: "Sobre Mí",
      portfolio: "Portfolio",
      stack: "Stack",
      contact: "Contacto",
      cv: "Descargar CV ↗",
    },
    hero: {
      role: "Full Stack Developer",
      greeting: "Hola,",
      intro: "— Soy Marcos Dura",
      scroll: "Scroll ↓",
      photoAlt: "Marcos Dura",
    },
    about: {
      label: "Sobre Mí",
      paragraphs: [
        "Estudiante de último año de Ingeniería en Computación en la Universidad de la República (FING), Uruguay. Construyo productos fullstack con Next.js, FastAPI y PostgreSQL — desde la idea hasta la app en producción.",
        "Anteriormente en Tata Consultancy Services, dando soporte a clientes empresariales de Microsoft en inglés. Aporto tanto profundidad técnica como habilidades de comunicación a cada equipo del que formo parte.",
        "Cuando no estoy programando, creo contenido de aire libre y viajes en YouTube e Instagram — lo que significa que también sé cómo llevar adelante proyectos creativos y construir una audiencia desde cero.",
      ],
      creatorLinkText: "YouTube e Instagram",
      skills: ["Next.js", "FastAPI", "PostgreSQL", "IA / Automatización"],
    },
    portfolio: {
      label: "Proyectos Seleccionados",
      viewProject: "Ver proyecto ↗",
      stillInDevelopment: "Todavía está en desarrollo",
      closeModal: "Cerrar",
      projects: [
        {
          name: "Rumbo",
          description:
            "Plataforma para descubrir lugares al aire libre en Uruguay (camping, trekking, escalada, surf).",
          stack: ["Next.js", "FastAPI", "PostgreSQL", "Leaflet"],
          modal: {
            status: "Todavía no ha salido — en desarrollo",
            sections: [
              {
                heading: "¿Qué es?",
                blocks: [
                  {
                    type: "paragraph",
                    text: "Una app para encontrar y descubrir lugares y experiencias al aire libre en Uruguay: camping, trekking, escalada, kayak, surf y más.",
                  },
                  {
                    type: "paragraph",
                    text: "Todavía no ha salido — está en desarrollo activo.",
                  },
                ],
              },
              {
                heading: "Stack",
                blocks: [
                  { type: "badges", items: ["FastAPI", "Next.js", "PostgreSQL", "Tailwind CSS"] },
                ],
              },
            ],
          },
        },
        {
          name: "Instagram Analytics Dashboard",
          description:
            "Plataforma personal de analítica con análisis de contenido potenciado por IA.",
          stack: ["Next.js", "FastAPI", "OpenAI API"],
          modal: {
            status: "Demo de portfolio — algunas funciones están deshabilitadas o simuladas",
            link: { label: "Ver demo ↗", href: "https://instagram-analytics-static.vercel.app/" },
            sections: [
              {
                heading: "¿Qué es?",
                blocks: [
                  {
                    type: "paragraph",
                    text: "Un dashboard de analytics full-stack para Instagram: alcance, engagement, desglose de audiencia y un asistente de IA que sugiere estrategia de contenido.",
                  },
                  {
                    type: "paragraph",
                    text: "Esta es una demo estática con datos reales de @marcosdurayt, snapshot de julio 2026.",
                  },
                ],
              },
              {
                heading: "Stack",
                blocks: [
                  {
                    type: "badges",
                    items: ["Next.js 14", "FastAPI", "SQLite", "OpenAI API", "Supadata API", "Tailwind CSS"],
                  },
                ],
              },
            ],
          },
        },
        {
          name: "AI Automation Portfolio",
          description:
            "Automatizaciones con n8n usando OpenAI, Supabase y Supadata.",
          stack: ["n8n", "OpenAI", "Supabase"],
          modal: {
            subtitle:
              "Varios proyectos de automatización construidos con n8n, la API de OpenAI, Supabase y Supadata.",
            sections: [
              {
                heading: "Proyectos",
                blocks: [
                  {
                    type: "subproject",
                    title: "Asistente de YouTube",
                    description:
                      "Analiza los últimos videos de un canal determinado, o genera ideas de contenido para un nicho basándose en los últimos videos de ese nicho.",
                    stack: ["n8n", "OpenAI API", "Supabase"],
                  },
                  {
                    type: "subproject",
                    title: "Automatización de facturación y sueldos",
                    description:
                      "Automatiza la generación de facturas y recibos de sueldo de una empresa, desde el formulario que completa el capataz hasta la creación de los recibos. Antes este proceso era completamente manual: el formulario se llenaba a lápiz, se pasaba a mano a una planilla de Excel, y la generación de los recibos se tercerizaba a otra empresa.",
                    stack: ["n8n", "Tally", "Google Sheets"],
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    stack: {
      title: "Con lo que trabajo",
      groups: [
        { label: "Frontend", tools: ["Next.js", "TypeScript", "Tailwind CSS"] },
        { label: "Backend", tools: ["FastAPI", "SQLAlchemy", "PostgreSQL"] },
        {
          label: "IA / Automatización",
          tools: ["n8n", "OpenAI API", "Anthropic API", "Supabase pgvector"],
        },
        {
          label: "Herramientas",
          tools: ["Claude Code", "Vercel", "Railway", "Cloudinary"],
        },
      ],
    },
    contact: {
      title: "Trabajemos juntos.",
      subtitle: "Abierto a roles full-time y proyectos freelance en Uruguay y remoto.",
      linkedin: "LinkedIn ↗",
      github: "GitHub ↗",
      copied: "Copiado",
      backToTop: "Volver arriba ↑",
      creatorLink: "También creo contenido ↗",
    },
  },
};
