"use client";

import { useState } from "react";
import Link from "next/link";
import FadeIn from "./FadeIn";
import { useLanguage } from "./LanguageContext";

const EMAIL = "marcosdurasosa01@gmail.com";

export default function Contact() {
  const { t, lang } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API unavailable
    }
  };

  const cvHref = lang === "es" ? "/cv-es.pdf" : "/cv-en.pdf";

  return (
    <>
      <section
        id="contact"
        className="flex w-full flex-col items-center justify-center border-t border-primary/10 px-6 py-8 text-center md:px-10 lg:h-[100svh] lg:snap-start lg:overflow-hidden"
      >
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 lg:gap-6">
          <FadeIn>
            <h2 className="text-3xl font-semibold text-primary md:text-5xl">{t.contact.title}</h2>
          </FadeIn>

          <FadeIn delay={100}>
            <p className="text-sm text-secondary md:text-lg">{t.contact.subtitle}</p>
          </FadeIn>

          <FadeIn
            delay={200}
            className="mt-2 flex flex-col items-center gap-3 sm:flex-row sm:gap-6"
          >
            <div className="relative">
              <span
                className={`pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-3 py-1 text-xs text-white transition-all duration-200 ${
                  copied ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
                }`}
              >
                {t.contact.copied}
              </span>
              <button
                onClick={handleCopy}
                className="text-sm text-primary underline-offset-4 hover:underline md:text-base"
              >
                {EMAIL}
              </button>
            </div>

            <a
              href="https://www.linkedin.com/in/marcosdura/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary underline-offset-4 hover:underline md:text-base"
            >
              {t.contact.linkedin}
            </a>

            <a
              href="https://github.com/marcosdura"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary underline-offset-4 hover:underline md:text-base"
            >
              {t.contact.github}
            </a>
          </FadeIn>

          <FadeIn delay={300} className="mt-4">
            <a
              href="#top"
              className="text-[13px] uppercase tracking-widest text-secondary transition-colors hover:text-primary"
            >
              {t.contact.backToTop}
            </a>
          </FadeIn>
        </div>
      </section>

      <footer className="border-t border-primary/10 px-6 py-6 md:px-10">
        <div className="mx-auto flex max-w-[1680px] flex-col items-center gap-4 md:flex-row md:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href={cvHref}
              download
              className="text-[13px] uppercase tracking-widest text-secondary transition-colors hover:text-primary"
            >
              {t.nav.cv}
            </a>
            <Link
              href="/creator"
              className="text-[13px] uppercase tracking-widest text-secondary transition-colors hover:text-primary"
            >
              {t.contact.creatorLink}
            </Link>
          </div>

          <p className="text-[13px] uppercase tracking-widest text-secondary">© 2026 Marcos Dura</p>
        </div>
      </footer>
    </>
  );
}
