import { motion } from "framer-motion";
import { Reveal } from "../Reveal";

const orbits = [
  { r: 140, d: 22, items: ["React", "TypeScript", "Tailwind"] },
  { r: 220, d: 32, items: ["Angular", "Astro", "JavaScript"] },
  { r: 300, d: 44, items: ["Node.js", "Express", "APIs", "HTML5", "CSS3"] },
];

export function TechOrbit() {
  return (
    <section id="stack" className="relative px-6 py-32 md:py-48 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-16 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--neon-cyan)]">
            03 — Tech Orbit
          </span>
          <h2 className="mt-6 font-display text-5xl md:text-7xl font-bold tracking-tighter">
            Tools in my <span className="text-gradient italic font-light pr-3">orbit</span>
          </h2>
        </Reveal>

        <div className="relative mx-auto h-[680px] w-full max-w-[680px]">
          {/* center core */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[var(--neon-cyan)]/40 blur-3xl" />
              <div className="relative h-32 w-32 rounded-full glass-strong border border-[var(--neon-cyan)]/40 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-display text-2xl font-bold text-gradient">BS</div>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground mt-1">
                    core
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* orbit rings */}
          {orbits.map((o, oi) => (
            <div key={oi} className="absolute inset-0 flex items-center justify-center">
              <div
                className="absolute rounded-full border border-dashed border-border"
                style={{ width: o.r * 2, height: o.r * 2 }}
              />
              <div
                className="absolute"
                style={{
                  width: 0,
                  height: 0,
                  // @ts-expect-error css var
                  "--orbit-r": `${o.r}px`,
                  "--orbit-d": `${o.d}s`,
                }}
              >
                {o.items.map((item, i) => {
                  const angle = (360 / o.items.length) * i;
                  return (
                    <motion.div
                      key={item}
                      style={{
                        position: "absolute",
                        transformOrigin: "center",
                      }}
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: o.d,
                        repeat: Infinity,
                        ease: "linear",
                        delay: -(o.d / o.items.length) * i,
                      }}
                    >
                      <div style={{ transform: `translateX(${o.r}px)` }}>
                        <motion.div
                          animate={{ rotate: -360 }}
                          transition={{ duration: o.d, repeat: Infinity, ease: "linear" }}
                          className="-translate-x-1/2 -translate-y-1/2"
                        >
                          <div
                            className="glass rounded-full px-4 py-2 text-xs font-mono whitespace-nowrap hover:border-[var(--neon-magenta)]/60 hover:text-[var(--neon-magenta)] transition-colors"
                            data-cursor="hover"
                            style={{ transform: `rotate(${-angle}deg)` }}
                          >
                            {item}
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
