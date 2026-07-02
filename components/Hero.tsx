"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="flex w-full flex-col px-6 pb-6 pt-24 md:px-10 lg:h-[100svh] lg:snap-start lg:overflow-hidden lg:pt-24"
    >
      <div className="flex flex-1 flex-col justify-center gap-8 md:flex-row md:items-center md:justify-between md:gap-10">
        <div className="flex items-start gap-6">
          <span className="hidden text-[13px] uppercase tracking-[0.3em] text-secondary md:block [writing-mode:vertical-rl] rotate-180">
            {t.hero.role}
          </span>

          <div className="flex flex-col gap-6 md:gap-10">
            <p className="text-[13px] uppercase tracking-widest text-secondary">
              {t.hero.role}
            </p>

            <h1 className="text-hero font-semibold leading-none text-primary">
              {t.hero.greeting}
              <br />
              <span className="text-[0.5em] font-medium text-primary/60">
                {t.hero.intro}
              </span>
            </h1>
          </div>
        </div>

        <div className="group relative aspect-[679/648] w-full max-w-lg self-center overflow-hidden rounded-[2rem] md:w-[46vw] md:max-w-2xl md:self-center lg:h-[50svh] lg:w-auto lg:max-w-none">
          <Image
            src="/marcos-photo.jpg"
            alt={t.hero.photoAlt}
            fill
            priority
            sizes="(min-width: 768px) 46vw, 100vw"
            className="object-contain object-top grayscale transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      <div className="flex items-end justify-between pt-4 text-[13px] uppercase tracking-widest text-secondary">
        <a href="#about" className="transition-colors hover:text-primary">
          {t.hero.scroll}
        </a>
        <span>2026</span>
      </div>
    </section>
  );
}
