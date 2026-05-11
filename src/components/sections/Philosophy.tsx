import { Reveal } from "../Reveal";

const principles = [
  {
    n: "01",
    t: "Performance First",
    d: "Every kilobyte audited. Every render measured. Speed is a feature.",
  },
  {
    n: "02",
    t: "Pixel Precision",
    d: "Spacing, weight, motion — calibrated to the half-pixel. Details ship the product.",
  },
  {
    n: "03",
    t: "Scalable Systems",
    d: "Architectures that grow without rewrites. Tokens, primitives, composition.",
  },
  {
    n: "04",
    t: "Clean Architecture",
    d: "Boundaries between layers. Tests where it matters. Code as documentation.",
  },
  {
    n: "05",
    t: "User-Centered Engineering",
    d: "Code is the medium. The user is the point. Empathy compiled to TypeScript.",
  },
];

export function Philosophy() {
  return (
    <section id="philosophy" className="relative px-6 py-32 md:py-48">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-20 max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--neon-cyan)]">
            05 — Build Philosophy
          </span>
          <h2 className="mt-6 font-display text-5xl md:text-7xl font-bold tracking-tighter">
            How I <span className="text-gradient italic font-light pr-3">build</span>
          </h2>
        </Reveal>

        <div className="grid gap-px bg-border/50 rounded-3xl overflow-hidden glass">
          {principles.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.06}>
              <div
                className="group relative bg-background/60 p-8 md:p-12 hover:bg-card/80 transition-all duration-500"
                data-cursor="hover"
              >
                <div className="grid md:grid-cols-12 gap-6 items-baseline">
                  <div className="md:col-span-1 font-mono text-xs text-muted-foreground">{p.n}</div>
                  <div className="md:col-span-4">
                    <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight transition-colors duration-500 group-hover:text-gradient">
                      {p.t}
                    </h3>
                  </div>
                  <p className="md:col-span-6 text-muted-foreground text-lg leading-relaxed">
                    {p.d}
                  </p>
                  <div className="md:col-span-1 text-right text-2xl text-muted-foreground transition-all duration-500 group-hover:translate-x-1 group-hover:text-[var(--neon-cyan)]">
                    →
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--neon-cyan)] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
