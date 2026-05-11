import { Reveal } from "../Reveal";

export function About() {
  const stats = [
    { v: "2+", l: "Years Shipping" },
    { v: "20+", l: "Projects Delivered" },
    { v: "9", l: "Core Technologies" },
    { v: "∞", l: "Pixels Polished" },
  ];

  return (
    <section id="about" className="relative px-6 py-32 md:py-48">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <div className="sticky top-32">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--neon-cyan)]">
                01 — About
              </span>
              <h2 className="mt-6 font-display text-5xl md:text-6xl font-bold tracking-tighter leading-[1.15] overflow-visible">
                The <span className="text-gradient italic font-light pr-3">Architect</span>
              </h2>
            </div>
          </Reveal>
          <div className="md:col-span-8 space-y-10">
            <Reveal>
              <p className="text-2xl md:text-3xl leading-relaxed font-light tracking-tight">
                A frontend-focused full-stack engineer building scalable, modern digital products —
                pairing <span className="text-gradient">elegant UI</span> with{" "}
                <span className="text-gradient-cyan">resilient backend systems</span>.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                I craft performant, polished user experiences while engineering reliable APIs and
                business logic in Node.js & Express. Every interaction matters. Every millisecond
                counts.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/50 mt-16 glass rounded-2xl overflow-hidden">
                {stats.map((s) => (
                  <div key={s.l} className="bg-card/40 p-6 hover:bg-card/80 transition-colors">
                    <div className="font-display text-4xl font-bold text-gradient-cyan">{s.v}</div>
                    <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-12 glass rounded-2xl p-6">
                <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
                  // Education
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon-cyan)]" /> Pursuing BCA
                    — Bachelor of Computer Applications
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon-magenta)]" /> Diploma
                    in Basic Computer Applications
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon-violet)]" /> 12th
                    Completed
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
