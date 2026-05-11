import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40 });
  const sy = useSpring(y, { stiffness: 500, damping: 40 });
  const ringX = useSpring(x, { stiffness: 120, damping: 20 });
  const ringY = useSpring(y, { stiffness: 120, damping: 20 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button, [data-cursor='hover']"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) return null;

  return (
    <>
      <motion.div
        style={{ x: sx, y: sy }}
        className="pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2"
      >
        <div className="h-2 w-2 rounded-full bg-[var(--neon-cyan)] shadow-[0_0_12px_var(--neon-cyan)]" />
      </motion.div>
      <motion.div
        style={{ x: ringX, y: ringY }}
        animate={{ scale: hover ? 1.8 : 1, opacity: hover ? 0.6 : 0.4 }}
        className="pointer-events-none fixed left-0 top-0 z-[99] -translate-x-1/2 -translate-y-1/2"
      >
        <div className="h-9 w-9 rounded-full border border-[var(--neon-magenta)]/60" />
      </motion.div>
    </>
  );
}
