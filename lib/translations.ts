export type Lang = "en" | "es";

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
    projects: {
      name: string;
      description: string;
      stack: string[];
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
      projects: [
        {
          name: "Rumbo",
          description:
            "Outdoor spots discovery platform for Uruguay (camping, trekking, climbing, surf).",
          stack: ["Next.js", "FastAPI", "PostgreSQL", "Leaflet"],
        },
        {
          name: "Instagram Analytics Dashboard",
          description:
            "Personal analytics platform with AI-powered content analysis.",
          stack: ["Next.js", "FastAPI", "Anthropic API"],
        },
        {
          name: "AI Automation Portfolio",
          description: "Lead research agent, YouTube intelligence bot, RAG chatbot.",
          stack: ["n8n", "OpenAI", "Supabase"],
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
      projects: [
        {
          name: "Rumbo",
          description:
            "Plataforma para descubrir lugares al aire libre en Uruguay (camping, trekking, escalada, surf).",
          stack: ["Next.js", "FastAPI", "PostgreSQL", "Leaflet"],
        },
        {
          name: "Instagram Analytics Dashboard",
          description:
            "Plataforma personal de analítica con análisis de contenido potenciado por IA.",
          stack: ["Next.js", "FastAPI", "Anthropic API"],
        },
        {
          name: "AI Automation Portfolio",
          description:
            "Agente de investigación, bot de inteligencia para YouTube, chatbot RAG.",
          stack: ["n8n", "OpenAI", "Supabase"],
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
