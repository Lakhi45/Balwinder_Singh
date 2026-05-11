import { Reveal } from "../Reveal";

const events = [
  {
    y: "2023",
    t: "First Lines of Code",
    d: "Began the descent into web — HTML, CSS, JavaScript. Built static sites for fun.",
  },
  {
    y: "2024",
    t: "Frontend Engineer",
    d: "Joined production teams. Shipped React & Angular interfaces at scale.",
  },
  {
    y: "2025",
    t: "Full-Stack Expansion",
    d: "Extended into Node.js & Express. Designed APIs powering real product workflows.",
  },
  {
    y: "2026",
    t: "Now — Crafting Futures",
    d: "Building Conversly, ShipDistrict & beyond. Pursuing BCA. Pushing pixels & performance.",
  },
];

export function Timeline() {
  return (
    <section id="journey" className="relative px-6 py-32 md:py-48">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--neon-magenta)]">
            04 — Code Journey
          </span>
          <h2 className="mt-6 font-display text-5xl md:text-7xl font-bold tracking-tighter">
            The <span className="text-gradient italic font-light pr-3">timeline</span>
          </h2>
        </Reveal>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent md:-translate-x-1/2" />

          {events.map((e, i) => (
            <Reveal key={e.y} delay={i * 0.1}>
              <div
                className={`relative flex items-start gap-8 mb-16 md:mb-20 md:grid md:grid-cols-2 md:gap-16 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                {/* dot */}
                <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 z-10">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-[var(--neon-cyan)] blur-md animate-pulse" />
                    <div className="relative h-3 w-3 rounded-full bg-[var(--neon-cyan)] border-2 border-background" />
                  </div>
                </div>

                <div
                  className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}
                >
                  <div className="font-display text-6xl md:text-7xl font-bold text-gradient-cyan opacity-30">
                    {e.y}
                  </div>
                </div>
                <div
                  className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pl-12" : "md:text-right md:pr-12"}`}
                >
                  <div className="glass rounded-2xl p-6">
                    <h3 className="font-display text-2xl font-bold tracking-tight">{e.t}</h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{e.d}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
