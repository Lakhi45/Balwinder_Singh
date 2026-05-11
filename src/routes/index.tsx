import { createFileRoute } from "@tanstack/react-router";
import { Cursor } from "@/components/Cursor";
import { Particles } from "@/components/Particles";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Work } from "@/components/sections/Work";
import { TechOrbit } from "@/components/sections/TechOrbit";
import { Timeline } from "@/components/sections/Timeline";
import { Philosophy } from "@/components/sections/Philosophy";
import { Building } from "@/components/sections/Building";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Balwinder Singh — Frontend Engineer & Node.js Developer" },
      { name: "description", content: "Frontend Engineer crafting cinematic interfaces & resilient Node.js systems. 2+ years building production products with React, Angular, TypeScript & Express." },
      { property: "og:title", content: "Balwinder Singh — Frontend Engineer" },
      { property: "og:description", content: "Cinematic interfaces. Resilient Node.js systems. Production-grade craft." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div id="top" className="relative min-h-screen noise">
      <Cursor />
      <Particles />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Work />
        <TechOrbit />
        <Timeline />
        <Philosophy />
        <Building />
        <Contact />
      </main>
    </div>
  );
}
