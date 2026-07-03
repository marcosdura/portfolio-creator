"use client";

import Link from "next/link";
import FadeIn from "./FadeIn";
import { useLanguage } from "./LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="flex w-full flex-col justify-center border-t border-primary/10 px-6 py-12 max-md:py-24 md:px-10 lg:h-[100svh] lg:snap-start lg:overflow-hidden"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <FadeIn>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-secondary">
            {t.about.label}
          </h2>
        </FadeIn>

        <FadeIn delay={100} className="flex max-w-3xl flex-col gap-6">
          <div className="flex flex-col gap-3 text-sm leading-relaxed text-primary md:text-base">
            {t.about.paragraphs.map((paragraph) => {
              if (paragraph.includes(t.about.creatorLinkText)) {
                const [before, after] = paragraph.split(t.about.creatorLinkText);
                return (
                  <p key={paragraph}>
                    {before}
                    <Link
                      href="/creator"
                      className="underline decoration-primary/30 underline-offset-4 transition-colors hover:text-primary/70 hover:decoration-primary"
                    >
                      {t.about.creatorLinkText}
                    </Link>
                    {after}
                  </p>
                );
              }
              return <p key={paragraph}>{paragraph}</p>;
            })}
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {t.about.skills.map((skill) => (
              <span
                key={skill}
                className="cursor-default select-none rounded-full border border-primary/20 px-3 py-1.5 text-xs uppercase tracking-wide text-primary transition-colors hover:border-primary hover:bg-primary hover:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
