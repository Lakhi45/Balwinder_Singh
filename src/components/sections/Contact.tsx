import { useEffect, useState } from "react";
import { Reveal } from "../Reveal";
import { MagneticButton } from "../MagneticButton";

const lines = [
  { p: "$", c: "whoami", out: "balwinder.singh — frontend & node engineer" },
  { p: "$", c: "cat ./status.txt", out: "AVAILABLE · accepting select projects · q1 2026" },
  { p: "$", c: "echo $EMAIL", out: "balwindersunny45@gmail.com" },
  { p: "$", c: "./initiate --collab", out: "// Let's build something exceptional._" },
];

function Typed({ text, onDone }: { text: string; onDone?: () => void }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (n >= text.length) {
      onDone?.();
      return;
    }
    const t = setTimeout(() => setN(n + 1), 22);
    return () => clearTimeout(t);
  }, [n, text, onDone]);
  return <span>{text.slice(0, n)}</span>;
}

export function Contact() {
  const [step, setStep] = useState(0);

  return (
    <section id="contact" className="relative px-6 py-32 md:py-48">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-12 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--neon-magenta)]">
            07 — Initiate Contact
          </span>
          <h2 className="mt-6 font-display text-5xl md:text-7xl font-bold tracking-tighter">
            Let's build{" "}
            <span className="text-gradient italic font-light pr-3">something exceptional</span>
          </h2>
        </Reveal>

        <Reveal>
          <div className="glass-strong rounded-3xl overflow-hidden border border-[var(--neon-cyan)]/20 shadow-[0_0_60px_-10px_rgba(120,200,255,0.25)]">
            {/* Terminal bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-background/50">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-destructive/80" />
                <span className="h-3 w-3 rounded-full bg-[var(--neon-lime)]/60" />
                <span className="h-3 w-3 rounded-full bg-[var(--neon-cyan)]/60" />
              </div>
              <span className="font-mono text-[11px] text-muted-foreground">
                ~/balwinder/contact.sh
              </span>
              <span className="font-mono text-[11px] text-[var(--neon-lime)]">● connected</span>
            </div>

            {/* Body */}
            <div className="p-6 md:p-10 font-mono text-sm md:text-base min-h-[340px]">
              {lines.slice(0, step + 1).map((l, i) => (
                <div key={i} className="mb-4">
                  <div className="flex gap-3">
                    <span className="text-[var(--neon-cyan)]">{l.p}</span>
                    <span className="text-foreground">
                      {i < step ? l.c : <Typed text={l.c} onDone={() => setStep(i + 1)} />}
                      {i === step && (
                        <span className="ml-1 inline-block h-4 w-2 bg-[var(--neon-cyan)] animate-caret align-middle" />
                      )}
                    </span>
                  </div>
                  {i < step && <div className="pl-6 mt-1 text-muted-foreground">{l.out}</div>}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="border-t border-border bg-background/40 p-6 md:p-8 flex flex-wrap items-center justify-between gap-6">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  direct line
                </div>
                <a
                  href="mailto:balwindersunny45@gmail.com"
                  data-cursor="hover"
                  className="font-display text-xl md:text-2xl font-bold text-gradient-cyan hover:opacity-80 transition-opacity"
                >
                  balwindersunny45@gmail.com
                </a>
              </div>
              <MagneticButton
                href="mailto:balwindersunny45@gmail.com"
                className="rounded-full bg-foreground text-background px-8 py-4 text-sm font-medium hover:bg-[var(--neon-cyan)] transition-colors"
              >
                <span className="flex items-center gap-2">
                  Open Channel <span>→</span>
                </span>
              </MagneticButton>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <footer className="mt-20 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-muted-foreground">
            <span>© 2026 Balwinder Singh — Engineered with intent.</span>
            <span>// system idle · ready for next build</span>
          </footer>
        </Reveal>
      </div>
    </section>
  );
}
