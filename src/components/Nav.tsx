import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { h: "#about", l: "About" },
  { h: "#work", l: "Work" },
  { h: "#stack", l: "Stack" },
  { h: "#journey", l: "Journey" },
  { h: "#philosophy", l: "Ethos" },
  { h: "#contact", l: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${scrolled ? "w-[min(95%,800px)]" : "w-[min(95%,720px)]"}`}
    >
      <nav className="glass-strong rounded-full px-3 py-2 flex items-center justify-between gap-4">
        <a href="#top" data-cursor="hover" className="flex items-center gap-2 pl-3">
          <span className="h-2 w-2 rounded-full bg-[var(--neon-cyan)] shadow-[0_0_8px_var(--neon-cyan)]" />
          <span className="font-display font-bold tracking-tight">B/S</span>
        </a>
        <ul className="hidden md:flex items-center gap-1 text-xs font-mono uppercase tracking-widest text-muted-foreground">
          {links.map((l) => (
            <li key={l.h}>
              <a
                href={l.h}
                data-cursor="hover"
                className="px-3 py-2 rounded-full hover:text-foreground hover:bg-white/5 transition-colors"
              >
                {l.l}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          data-cursor="hover"
          className="rounded-full bg-foreground text-background px-4 py-2 text-xs font-medium hover:bg-[var(--neon-cyan)] transition-colors"
        >
          Hire
        </a>
      </nav>
    </motion.header>
  );
}
