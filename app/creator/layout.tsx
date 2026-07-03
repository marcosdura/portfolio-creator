import type { Metadata } from "next";
import "./creator.css";
import BodyBackground from "./BodyBackground";

export const metadata: Metadata = {
  title: "Marcos Dura | Contenido",
  description: "Aventura, camping y viajes por Latinoamérica.",
};

export default function CreatorLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BodyBackground />
      <div className="min-h-screen bg-[#0D0D0D]">{children}</div>
    </>
  );
}
