import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center max-w-3xl mx-auto mb-16" : "max-w-3xl mb-16"}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-[10px] tracking-[0.5em] uppercase text-gold mb-5"
        >
          — {eyebrow} —
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight text-white"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 text-white/65 text-base md:text-lg font-light leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-28 md:py-40 px-6 ${className}`}>
      <div className="max-w-7xl mx-auto relative">{children}</div>
    </section>
  );
}