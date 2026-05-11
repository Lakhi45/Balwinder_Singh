import { motion } from "framer-motion";
import { Reveal } from "../Reveal";

const projects = [
  {
    name: "Conversly",
    tag: "Communication Platform",
    desc: "Modern conversation & messaging platform with interactive real-time features.",
    stack: ["React", "Node.js", "WebSockets"],
    accent: "from-[var(--neon-cyan)]/40 to-[var(--neon-violet)]/30",
    n: "001",
  },
  {
    name: "ShipDistrict",
    tag: "Logistics System",
    desc: "Shipping platform with advanced workflows, label generation & operational tooling.",
    stack: ["Angular", "Express", "REST APIs"],
    accent: "from-[var(--neon-magenta)]/40 to-[var(--neon-cyan)]/30",
    n: "002",
  },
  {
    name: "Collecta Gift",
    tag: "Rewards Engine",
    desc: "Gift card & rewards platform with redemption flows and transaction orchestration.",
    stack: ["React", "TypeScript", "Node.js"],
    accent: "from-[var(--neon-lime)]/30 to-[var(--neon-cyan)]/30",
    n: "003",
  },
  {
    name: "Gardnstead Admin",
    tag: "Dashboard Suite",
    desc: "Advanced admin dashboard for community platform management & analytics.",
    stack: ["React", "Tailwind", "Node.js"],
    accent: "from-[var(--neon-violet)]/40 to-[var(--neon-magenta)]/30",
    n: "004",
  },
];

export function Work() {
  return (
    <section id="work" className="relative px-6 py-32 md:py-48">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-20 flex items-end justify-between flex-wrap gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--neon-magenta)]">
              02 — Selected Work
            </span>
            <h2 className="mt-6 font-display text-5xl md:text-7xl font-bold tracking-tighter">
              Things I've <span className="text-gradient italic font-light pr-3">shipped</span>
            </h2>
          </div>
          <p className="font-mono text-xs text-muted-foreground max-w-xs">
            // 04 case studies — production systems serving real users at scale.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.2, 0.9, 0.3, 1] }}
                className="group relative overflow-hidden rounded-3xl glass p-8 md:p-10 h-full"
                data-cursor="hover"
              >
                {/* Animated preview gradient */}
                <div className="relative mb-8 aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-background">
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-80`} />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)]" />
                  {/* scan line */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent animate-scan" />
                  </div>
                  {/* mock UI */}
                  <div className="absolute inset-6 flex flex-col gap-2">
                    <div className="flex gap-1.5">
                      <div className="h-2 w-2 rounded-full bg-white/30" />
                      <div className="h-2 w-2 rounded-full bg-white/30" />
                      <div className="h-2 w-2 rounded-full bg-white/30" />
                    </div>
                    <div className="mt-auto space-y-1.5">
                      <div className="h-2 w-1/3 rounded bg-white/40" />
                      <div className="h-2 w-1/2 rounded bg-white/20" />
                      <div className="h-2 w-1/4 rounded bg-white/30" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 font-mono text-[10px] tracking-widest text-white/70">
                    {p.n}
                  </div>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                      {p.tag}
                    </span>
                    <h3 className="mt-2 font-display text-3xl md:text-4xl font-bold tracking-tight">
                      {p.name}
                    </h3>
                  </div>
                  <span className="text-2xl text-muted-foreground transition-all duration-500 group-hover:text-[var(--neon-cyan)] group-hover:-rotate-45">
                    →
                  </span>
                </div>
                <p className="mt-4 text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border px-3 py-1 text-[11px] font-mono text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
