"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { ProjectModalBlock, ProjectModalContent } from "@/lib/translations";

function Block({ block }: { block: ProjectModalBlock }) {
  switch (block.type) {
    case "paragraph":
      return <p className="text-sm leading-relaxed text-secondary lg:text-base">{block.text}</p>;

    case "badges":
      return (
        <div className="flex flex-wrap gap-1.5">
          {block.items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-primary/15 px-2.5 py-1 text-xs uppercase tracking-wide text-secondary"
            >
              {item}
            </span>
          ))}
        </div>
      );

    case "keyValue":
      return (
        <dl className="flex flex-col gap-2.5">
          {block.items.map((item) => (
            <div key={item.label} className="flex flex-col gap-0.5 sm:flex-row sm:gap-3">
              <dt className="w-full shrink-0 text-xs font-bold uppercase tracking-wide text-primary sm:w-36">
                {item.label}
              </dt>
              <dd className="text-sm text-secondary">{item.value}</dd>
            </div>
          ))}
        </dl>
      );

    case "table":
      return (
        <div className="overflow-hidden rounded-2xl border border-primary/10">
          <table className="w-full border-collapse text-left text-sm">
            <tbody>
              {block.rows.map((row, i) => (
                <tr
                  key={row.label}
                  className={i !== block.rows.length - 1 ? "border-b border-primary/10" : ""}
                >
                  <td className="px-3 py-2.5 align-top font-semibold text-primary">
                    {row.label}
                  </td>
                  <td className="px-3 py-2.5 align-top">
                    <span className="rounded-full border border-primary/15 px-2 py-0.5 text-xs uppercase tracking-wide text-secondary">
                      {row.status}
                    </span>
                  </td>
                  <td className="px-3 py-2.5 align-top text-secondary">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "list":
      return (
        <ul className="flex flex-col gap-3">
          {block.items.map((item) => (
            <li key={item.title} className="flex flex-col gap-0.5">
              <span className="text-sm font-bold text-primary">{item.title}</span>
              <span className="text-sm text-secondary">{item.description}</span>
            </li>
          ))}
        </ul>
      );

    case "subproject":
      return (
        <div className="flex flex-col gap-2 rounded-2xl border border-primary/10 p-4">
          <span className="text-sm font-bold text-primary lg:text-base">{block.title}</span>
          <p className="text-sm leading-relaxed text-secondary">{block.description}</p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {block.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-primary/15 px-2.5 py-1 text-xs uppercase tracking-wide text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
}

export default function ProjectModal({
  name,
  image,
  content,
  closeLabel,
  onClose,
}: {
  name: string;
  image: string | null;
  content: ProjectModalContent;
  closeLabel: string;
  onClose: () => void;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setVisible(true));

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 md:p-8 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label={name}
    >
      <div
        className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className={`relative flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl transition-all duration-300 ${
          visible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={closeLabel}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-primary shadow-md backdrop-blur-sm transition-colors hover:bg-zinc-100"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <div className="overflow-y-auto">
          {image && (
            <div className="relative h-40 w-full shrink-0 bg-zinc-100 sm:h-56">
              <Image src={image} alt={name} fill sizes="672px" className="object-cover object-top" />
            </div>
          )}

          <div className="flex flex-col gap-6 p-6 lg:p-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-bold text-primary lg:text-2xl">{name}</h2>
              {content.status && (
                <span className="w-fit rounded-full bg-primary/95 px-3 py-1 text-xs font-semibold text-white">
                  {content.status}
                </span>
              )}
              {content.subtitle && (
                <p className="text-sm leading-relaxed text-secondary lg:text-base">
                  {content.subtitle}
                </p>
              )}
              {content.link && (
                <a
                  href={content.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit text-sm font-semibold text-blue-600 underline underline-offset-4 transition-colors hover:text-blue-700 lg:text-base"
                >
                  {content.link.label}
                </a>
              )}
            </div>

            {content.sections.map((section) => (
              <div key={section.heading} className="flex flex-col gap-3">
                <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-secondary">
                  {section.heading}
                </h3>
                <div className="flex flex-col gap-3">
                  {section.blocks.map((block, i) => (
                    <Block key={i} block={block} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
