"use client";

import { useState } from "react";
import Image from "next/image";
import FadeIn from "./FadeIn";
import { useLanguage } from "./LanguageContext";

const projectLinks: { href: string; image: string | null; inDevelopment?: boolean }[] = [
  { href: "", image: "/project-rumbo.png", inDevelopment: true },
  { href: "#", image: null },
  { href: "#", image: null },
];

export default function Portfolio() {
  const { t } = useLanguage();
  const [devToastIndex, setDevToastIndex] = useState<number | null>(null);

  const showDevToast = (i: number) => {
    setDevToastIndex(i);
    setTimeout(() => setDevToastIndex((current) => (current === i ? null : current)), 2500);
  };

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
            const link = projectLinks[i];
            const isExternal = link.href.startsWith("http");
            const cardClasses =
              "group relative flex flex-col gap-2 rounded-2xl p-3 transition-colors duration-300 hover:bg-zinc-100 lg:gap-3 lg:p-4";

            const cardContent = (
              <>
                <div className="relative h-24 w-full overflow-hidden rounded-2xl bg-zinc-100 lg:h-32 xl:h-48">
                  {link.image && (
                    <Image
                      src={link.image}
                      alt={project.name}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <h3 className="text-base font-bold text-primary lg:text-lg">{project.name}</h3>
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

                {link.inDevelopment && (
                  <div
                    className={`pointer-events-none absolute inset-0 z-10 flex items-center justify-center transition-all duration-300 ${
                      devToastIndex === i ? "scale-100 opacity-100" : "scale-95 opacity-0"
                    }`}
                  >
                    <div className="mx-4 rounded-2xl bg-primary/95 px-5 py-3 text-center text-sm font-semibold text-white shadow-xl backdrop-blur-sm">
                      {t.portfolio.stillInDevelopment}
                    </div>
                  </div>
                )}
              </>
            );

            return (
              <FadeIn key={project.name} delay={i * 100}>
                {link.inDevelopment ? (
                  <button
                    type="button"
                    onClick={() => showDevToast(i)}
                    className={`${cardClasses} w-full text-left`}
                  >
                    {cardContent}
                  </button>
                ) : (
                  <a
                    href={link.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className={cardClasses}
                  >
                    {cardContent}
                  </a>
                )}
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
