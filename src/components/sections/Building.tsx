import { motion } from "framer-motion";
import { Reveal } from "../Reveal";

export function Building() {
  const items = [
    { p: 78, t: "Conversly v2", s: "Realtime threads", c: "var(--neon-cyan)" },
    { p: 54, t: "ShipDistrict ops", s: "Bulk label engine", c: "var(--neon-magenta)" },
    { p: 92, t: "Personal Lab", s: "Motion experiments", c: "var(--neon-violet)" },
  ];

  return (
    <section className="relative px-6 py-32 md:py-48">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-16 flex items-center justify-between flex-wrap gap-6">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--neon-lime)] opacity-75 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--neon-lime)]" />
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--neon-lime)]">
                06 — Currently Building · Live
              </span>
            </div>
            <h2 className="mt-6 font-display text-5xl md:text-7xl font-bold tracking-tighter">
              In the <span className="text-gradient italic font-light pr-3">forge</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-muted-foreground">
            <div>// last sync: just now</div>
            <div>// commits this week: 47</div>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-6 h-full"
                data-cursor="hover"
              >
                <div className="flex items-baseline justify-between mb-4">
                  <h3 className="font-display text-xl font-bold">{it.t}</h3>
                  <span className="font-mono text-xs text-muted-foreground">{it.p}%</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">{it.s}</p>
                <div className="h-1 rounded-full bg-border overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${it.p}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, ease: [0.2, 0.9, 0.3, 1], delay: 0.3 + i * 0.1 }}
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${it.c}, var(--neon-magenta))`,
                      boxShadow: `0 0 12px ${it.c}`,
                    }}
                  />
                </div>
                <div className="mt-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  <span>active branch</span>
                  <span className="text-[var(--neon-lime)]">main</span>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
