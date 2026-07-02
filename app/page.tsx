import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="lg:h-[100svh] lg:snap-y lg:snap-mandatory lg:overflow-y-scroll lg:scroll-smooth">
        <Hero />
        <About />
        <Portfolio />
        <Stack />
        <Contact />
      </main>
    </>
  );
}
