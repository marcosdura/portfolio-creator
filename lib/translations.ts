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
          stack: ["Next.js", "FastAPI", "Anthropic API"],
          modal: {
            subtitle:
              "Instagram analytics dashboard built with Next.js 14, FastAPI, and SQLite. Static demo version with real data from @marcosdurayt, snapshot from July 2026.",
            sections: [
              {
                heading: "What is this?",
                blocks: [
                  {
                    type: "paragraph",
                    text: "A full-stack web app that consumes the Instagram Graph API to pull detailed metrics for posts and reels: reach, plays, engagement, audience by age/gender/location, and more.",
                  },
                  {
                    type: "paragraph",
                    text: "The project includes a built-in AI assistant that analyzes the account's content and generates strategy suggestions based on real metrics.",
                  },
                ],
              },
              {
                heading: "Why are some features disabled?",
                blocks: [
                  {
                    type: "paragraph",
                    text: "This is a portfolio demo — the backend isn't deployed, to avoid exposing Instagram credentials or generating API costs.",
                  },
                  {
                    type: "table",
                    rows: [
                      {
                        label: "Instagram sync",
                        status: "Disabled",
                        note: "Requires an Instagram Graph API token",
                      },
                      {
                        label: "AI chat",
                        status: "Simulated",
                        note: "Avoids Anthropic API costs",
                      },
                      {
                        label: "Transcriptions",
                        status: "Disabled",
                        note: "Requires a Supadata API key",
                      },
                      {
                        label: "Data",
                        status: "Real snapshot",
                        note: "Hardcoded as of July 8, 2026",
                      },
                    ],
                  },
                ],
              },
              {
                heading: "Stack",
                blocks: [
                  {
                    type: "keyValue",
                    items: [
                      { label: "Frontend", value: "Next.js 14 (App Router), Tailwind CSS" },
                      { label: "Backend", value: "FastAPI, SQLAlchemy, APScheduler, httpx" },
                      { label: "Database", value: "SQLite" },
                      { label: "AI", value: "Anthropic API (claude-sonnet) for the strategy chat" },
                      { label: "Transcriptions", value: "Supadata API" },
                      { label: "Data", value: "Instagram Graph API v22.0" },
                    ],
                  },
                ],
              },
              {
                heading: "Pages",
                blocks: [
                  {
                    type: "list",
                    items: [
                      {
                        title: "Dashboard",
                        description:
                          "General metrics, reach chart, top viral content, engagement benchmarks by follower range",
                      },
                      {
                        title: "Content",
                        description:
                          "Grid of posts and reels with filters, sorting, and a detail panel",
                      },
                      {
                        title: "Audience",
                        description:
                          "Distribution by age, gender, cities, and hourly activity heatmap",
                      },
                      {
                        title: "Strategy",
                        description: "Drag & drop kanban to organize content ideas",
                      },
                      {
                        title: "Ideas",
                        description: "AI chat using transcriptions and metrics as context",
                      },
                    ],
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
          tools: ["Cursor", "GitHub Copilot", "Vercel", "Railway", "Cloudinary"],
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
          stack: ["Next.js", "FastAPI", "Anthropic API"],
          modal: {
            subtitle:
              "Dashboard de analytics para Instagram construido con Next.js 14, FastAPI y SQLite. Versión demo estática con datos reales de @marcosdurayt, snapshot de julio 2026.",
            sections: [
              {
                heading: "¿Qué es esto?",
                blocks: [
                  {
                    type: "paragraph",
                    text: "Una aplicación web full-stack que consume la Instagram Graph API para obtener métricas detalladas de posts y reels: alcance, reproducciones, engagement, audiencia por edad/género/ubicación, y más.",
                  },
                  {
                    type: "paragraph",
                    text: "El proyecto incluye un asistente de IA integrado que analiza el contenido de la cuenta y genera sugerencias de estrategia basadas en las métricas reales.",
                  },
                ],
              },
              {
                heading: "¿Por qué algunas funciones están deshabilitadas?",
                blocks: [
                  {
                    type: "paragraph",
                    text: "Esta es una demo de portfolio — el backend no está deployado para no exponer credenciales de Instagram ni generar costos de API.",
                  },
                  {
                    type: "table",
                    rows: [
                      {
                        label: "Sync de Instagram",
                        status: "Deshabilitado",
                        note: "Requiere token de Instagram Graph API",
                      },
                      {
                        label: "Chat con IA",
                        status: "Simulado",
                        note: "Evitar costos de Anthropic API",
                      },
                      {
                        label: "Transcripciones",
                        status: "Deshabilitado",
                        note: "Requiere Supadata API key",
                      },
                      {
                        label: "Datos",
                        status: "Snapshot real",
                        note: "Hardcodeados al 8 de julio de 2026",
                      },
                    ],
                  },
                ],
              },
              {
                heading: "Stack",
                blocks: [
                  {
                    type: "keyValue",
                    items: [
                      { label: "Frontend", value: "Next.js 14 (App Router), Tailwind CSS" },
                      { label: "Backend", value: "FastAPI, SQLAlchemy, APScheduler, httpx" },
                      { label: "Base de datos", value: "SQLite" },
                      { label: "IA", value: "Anthropic API (claude-sonnet) para el chat de estrategia" },
                      { label: "Transcripciones", value: "Supadata API" },
                      { label: "Datos", value: "Instagram Graph API v22.0" },
                    ],
                  },
                ],
              },
              {
                heading: "Páginas",
                blocks: [
                  {
                    type: "list",
                    items: [
                      {
                        title: "Dashboard",
                        description:
                          "Métricas generales, gráfico de reach, top contenidos virales, benchmarks de engagement por rango de seguidores",
                      },
                      {
                        title: "Contenido",
                        description:
                          "Grid de posts y reels con filtros, ordenamiento y panel de detalle",
                      },
                      {
                        title: "Audiencia",
                        description:
                          "Distribución por edad, género, ciudades y heatmap de actividad horaria",
                      },
                      {
                        title: "Estrategia",
                        description: "Kanban con drag & drop para organizar ideas de contenido",
                      },
                      {
                        title: "Ideas",
                        description: "Chat con IA usando transcripciones y métricas como contexto",
                      },
                    ],
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
          tools: ["Cursor", "GitHub Copilot", "Vercel", "Railway", "Cloudinary"],
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
