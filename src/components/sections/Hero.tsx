import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MagneticButton } from "../MagneticButton";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-6 pt-24"
    >
      {/* Floating blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-[var(--neon-violet)]/30 blur-[120px] animate-drift" />
        <div
          className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-[var(--neon-cyan)]/25 blur-[120px] animate-drift"
          style={{ animationDelay: "-7s" }}
        />
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--neon-magenta)]/15 blur-[140px] animate-pulse-glow" />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-mono uppercase tracking-widest text-[var(--neon-cyan)]"
        >
          <span className="h-2 w-2 rounded-full bg-[var(--neon-lime)] animate-pulse" />
          Available for select projects · 2026
        </motion.div>

        <h1 className="font-display text-[clamp(3rem,11vw,10rem)] font-bold leading-[1.1] tracking-tighter">
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.9, 0.3, 1] }}
            className="block text-foreground leading-[0.8]"
          >
            BALWINDER
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.2, 0.9, 0.3, 1] }}
            className="block text-gradient italic font-light leading-[1.1]"
          >
            Singh
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mx-auto mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed"
        >
          Frontend Engineer crafting <span className="text-foreground">cinematic interfaces</span> &
          resilient <span className="text-foreground">Node.js systems</span>. Two years building
          products that feel like the future.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton
            href="#work"
            className="group rounded-full bg-foreground text-background px-8 py-4 text-sm font-medium tracking-wide hover:bg-[var(--neon-cyan)] transition-colors duration-500"
          >
            <span className="flex items-center gap-2">
              View Selected Work
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </span>
          </MagneticButton>
          <MagneticButton
            href="#contact"
            className="rounded-full glass px-8 py-4 text-sm font-medium tracking-wide hover:border-[var(--neon-magenta)]/60 transition-colors"
          >
            Initiate Contact
          </MagneticButton>
        </motion.div>

        {/* meta strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute -bottom-32 left-1/2 -translate-x-1/2 flex items-center gap-8 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
        >
          <span>Lat 30.7°N</span>
          <span className="h-px w-12 bg-border" />
          <span>v2.026</span>
          <span className="h-px w-12 bg-border" />
          <span>Online</span>
        </motion.div>
      </motion.div>

      {/* scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="h-8 w-px bg-gradient-to-b from-[var(--neon-cyan)] to-transparent"
        />
      </div>
    </section>
  );
}
