"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";

const sectionIds = ["about", "portfolio", "stack", "contact"];

const pillTrack = "flex items-center gap-1 rounded-full bg-tertiary p-1";
const activeNavPill = "rounded-full bg-white px-4 py-1.5 text-primary shadow-sm";
const inactiveNavPill =
  "rounded-full px-4 py-1.5 text-secondary transition-colors hover:text-primary";
const activeLangPill = "rounded-full bg-white px-2.5 py-1 text-primary shadow-sm";
const inactiveLangPill =
  "rounded-full px-2.5 py-1 text-secondary transition-colors hover:text-primary";

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const navLinks = [
    { label: t.nav.about, href: "#about", id: "about" },
    { label: t.nav.portfolio, href: "#portfolio", id: "portfolio" },
    { label: t.nav.stack, href: "#stack", id: "stack" },
    { label: t.nav.contact, href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const intersecting = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            intersecting.add(entry.target.id);
          } else {
            intersecting.delete(entry.target.id);
          }
        });

        setActiveSection(sectionIds.find((id) => intersecting.has(id)) ?? null);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-primary/10 bg-white/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-[1680px] items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="opacity-100 transition-opacity hover:opacity-60">
          <Image
            src="/logo-md.png"
            alt="MD"
            width={32}
            height={32}
            className="h-8 w-8 mix-blend-multiply"
            priority
          />
        </a>

        <div className="flex items-center gap-4">
          <div className={`hidden md:flex ${pillTrack}`}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[13px] font-semibold uppercase tracking-wider ${
                  activeSection === link.id ? activeNavPill : inactiveNavPill
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href={lang === "es" ? "/cv-es.pdf" : "/cv-en.pdf"}
            download
            className="text-[13px] font-semibold uppercase tracking-wider text-secondary transition-colors hover:text-primary"
          >
            {t.nav.cv}
          </a>
        </div>

        <div className="flex items-center gap-2">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-3.5 w-3.5 text-secondary"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20" />
            <path d="M12 2c2.5 2.5 4 6 4 10s-1.5 7.5-4 10c-2.5-2.5-4-6-4-10s1.5-7.5 4-10z" />
          </svg>

          <div className={pillTrack}>
            <button
              onClick={() => setLang("es")}
              className={`text-[13px] font-semibold uppercase tracking-wider ${
                lang === "es" ? activeLangPill : inactiveLangPill
              }`}
              aria-current={lang === "es"}
            >
              ES
            </button>
            <button
              onClick={() => setLang("en")}
              className={`text-[13px] font-semibold uppercase tracking-wider ${
                lang === "en" ? activeLangPill : inactiveLangPill
              }`}
              aria-current={lang === "en"}
            >
              EN
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
