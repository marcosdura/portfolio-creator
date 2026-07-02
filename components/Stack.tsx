"use client";

import FadeIn from "./FadeIn";
import { useLanguage } from "./LanguageContext";

export default function Stack() {
  const { t } = useLanguage();

  return (
    <section
      id="stack"
      className="flex w-full flex-col justify-center border-t border-primary/10 px-6 py-8 md:px-10 lg:h-[100svh] lg:snap-start lg:overflow-hidden"
    >
      <div className="mx-auto w-full max-w-7xl">
        <FadeIn>
          <h2 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-secondary lg:mb-8">
            {t.stack.title}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8">
          {t.stack.groups.map((group, i) => (
            <FadeIn key={group.label} delay={i * 80} className="flex flex-col gap-2">
              <h3 className="text-xs uppercase tracking-widest text-secondary">
                {group.label}
              </h3>
              <div className="flex flex-col items-start gap-1.5">
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className="cursor-default select-none rounded-full border border-primary/20 px-3 py-1 text-xs uppercase tracking-wide text-primary transition-colors hover:border-primary hover:bg-primary hover:text-white"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
