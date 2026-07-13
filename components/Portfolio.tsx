"use client";

import { useState } from "react";
import Image from "next/image";
import FadeIn from "./FadeIn";
import ProjectModal from "./ProjectModal";
import { useLanguage } from "./LanguageContext";

const projectImages: (string | null)[] = [
  "/project-rumbo.png",
  "/project-instagram-analytics.png",
  "/project-ai-automation.png",
];

export default function Portfolio() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="portfolio"
      className="flex w-full flex-col justify-center border-t border-primary/10 px-6 py-8 max-md:py-20 md:px-10 lg:h-[100svh] lg:snap-start lg:overflow-hidden"
    >
      <div className="mx-auto w-full max-w-7xl">
        <FadeIn>
          <h2 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-secondary lg:mb-8">
            {t.portfolio.label}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-4">
          {t.portfolio.projects.map((project, i) => {
            const image = projectImages[i];

            return (
              <FadeIn key={project.name} delay={i * 100}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(i)}
                  className="group relative flex w-full flex-col gap-2 rounded-2xl p-3 text-left transition-colors duration-300 hover:bg-zinc-100 lg:gap-3 lg:p-4"
                >
                  <div className="relative h-24 w-full overflow-hidden rounded-2xl bg-zinc-100 lg:h-32 xl:h-48">
                    {image && (
                      <Image
                        src={image}
                        alt={project.name}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      />
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-base font-bold text-primary lg:text-lg">
                      {project.name}
                    </h3>
                    <p className="line-clamp-2 text-xs text-secondary lg:text-sm">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-primary/15 px-2 py-0.5 text-xs uppercase tracking-wide text-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <span className="pt-1 text-xs text-primary underline-offset-4 group-hover:underline lg:text-sm">
                      {t.portfolio.viewProject}
                    </span>
                  </div>
                </button>
              </FadeIn>
            );
          })}
        </div>
      </div>

      {openIndex !== null && (
        <ProjectModal
          name={t.portfolio.projects[openIndex].name}
          image={projectImages[openIndex]}
          content={t.portfolio.projects[openIndex].modal}
          closeLabel={t.portfolio.closeModal}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </section>
  );
}
