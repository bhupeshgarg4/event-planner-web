import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Section, SectionHeader } from "./Section";

const stats = [
  { value: 10, suffix: "+", label: "Event Formats" },
  { value: 2, suffix: "", label: "Languages" },
  { value: 1, suffix: "", label: "Dedicated Host" },
  { value: 100, suffix: "%", label: "Stage Ready" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, { duration: 2, ease: "easeOut" });
    const unsub = rounded.on("change", (v) => setDisplay(v));
    return () => {
      controls.stop();
      unsub();
    };
  }, [inView, to, mv, rounded]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

const reviews = [
  {
    name: "Wedding Client",
    role: "Sangeet Celebration",
    quote:
      "Our sangeet felt warm, effortless and beautifully paced. Every generation stayed involved throughout the evening.",
  },
  {
    name: "Corporate Event Team",
    role: "Product Launch",
    quote:
      "Effortlessly bilingual, sharp on cues, and somehow makes a 1,200-person product launch feel like a private dinner.",
  },
  {
    name: "College Committee",
    role: "Annual Cultural Fest",
    quote:
      "The energy never dipped. Every cue, artist introduction and crowd interaction landed exactly when it needed to.",
  },
];

export function SocialProof() {
  const [active, setActive] = useState(0);
  return (
    <Section className="bg-gradient-to-b from-transparent via-[#0c0a14] to-transparent">
      <SectionHeader
        eyebrow="Social Proof"
        title={
          <>
            Numbers, <span className="gold-gradient italic">and the people behind them.</span>
          </>
        }
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="glass rounded-2xl p-8 text-center"
          >
            <div className="font-display text-5xl md:text-6xl gold-gradient mb-3">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="text-xs uppercase tracking-[0.3em] text-white/55">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="glass rounded-3xl p-10 md:p-16 text-center"
        >
          <div className="font-display text-6xl text-gold leading-none mb-6">&ldquo;</div>
          <p className="font-display text-2xl md:text-3xl text-white/90 leading-snug italic">
            {reviews[active].quote}
          </p>
          <div className="mt-8">
            <div className="text-gold">{reviews[active].name}</div>
            <div className="text-xs uppercase tracking-[0.3em] text-white/50 mt-1">
              {reviews[active].role}
            </div>
          </div>
        </motion.div>
        <div className="flex justify-center gap-3 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Review ${i + 1}`}
              className={`h-1 rounded-full transition-all ${
                active === i ? "w-10 bg-gold" : "w-5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}