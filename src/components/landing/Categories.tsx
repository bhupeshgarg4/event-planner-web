import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeader } from "./Section";
import w from "@/assets/cat-wedding.jpg";
import c from "@/assets/cat-corporate.jpg";
import co from "@/assets/cat-college.jpg";
import p from "@/assets/cat-private.jpg";

const cats = [
  {
    img: w,
    name: "Weddings",
    vibe: "Warm · Personal · Cinematic",
    desc: "Sangeet floors, baraat moments, the first dance — anchored like a love story being told out loud.",
    highlights: ["Bilingual scripting", "Family rituals", "Live-band integration"],
  },
  {
    img: c,
    name: "Corporate Shows",
    vibe: "Polished · Sharp · On-brand",
    desc: "Product launches, town halls and award nights — paced, professional and impossible to look away from.",
    highlights: ["Brand briefings", "Panel moderation", "Awards flow"],
  },
  {
    img: co,
    name: "College Events",
    vibe: "High-energy · Loud · Magnetic",
    desc: "10,000+ crowds, headliners, EDM nights — keeping the floor on fire from sound-check to encore.",
    highlights: ["Crowd hype", "Headliner intros", "Tech-cue calling"],
  },
  {
    img: p,
    name: "Private Events",
    vibe: "Discreet · Luxurious · Tailored",
    desc: "Milestone birthdays, anniversaries, private galas — a host who feels like part of the inner circle.",
    highlights: ["NDA-friendly", "Bespoke scripts", "Multi-day formats"],
  },
];

export function Categories() {
  return (
    <Section id="categories">
      <SectionHeader
        eyebrow="Event Categories"
        title={
          <>
            A different room <span className="gold-gradient italic">every weekend.</span>
          </>
        }
      />

      <div className="space-y-8">
        {cats.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: i * 0.04 }}
            className="group relative grid md:grid-cols-12 gap-6 items-center glass rounded-3xl overflow-hidden"
          >
            <div className={`md:col-span-6 relative h-72 md:h-96 overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}>
              <img
                src={c.img}
                alt={c.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1.6s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#07060a]/60 to-transparent" />
            </div>
            <div className="md:col-span-6 p-8 md:p-12">
              <div className="text-[10px] tracking-[0.4em] uppercase text-gold mb-3">
                {c.vibe}
              </div>
              <h3 className="font-display text-3xl md:text-5xl text-white mb-5">
                {c.name}
              </h3>
              <p className="text-white/65 leading-relaxed mb-6">{c.desc}</p>
              <ul className="flex flex-wrap gap-2 mb-8">
                {c.highlights.map((h) => (
                  <li
                    key={h}
                    className="text-xs px-3 py-1.5 rounded-full border border-[#d4af37]/30 text-white/80"
                  >
                    {h}
                  </li>
                ))}
              </ul>
              <a
                href="#booking"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-gold group/btn"
              >
                Book this format
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}