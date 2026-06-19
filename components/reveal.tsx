"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({ children, className = "", delay = 0, direction = "up" }: { children: ReactNode; className?: string; delay?: number; direction?: "up" | "left" | "right" }) {
  const initial = direction === "left" ? { opacity: 0, x: -70 } : direction === "right" ? { opacity: 0, x: 70 } : { opacity: 0, y: 42 };
  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
