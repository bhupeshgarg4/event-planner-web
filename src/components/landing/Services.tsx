import { motion } from "framer-motion";
import {
  Heart,
  Briefcase,
  GraduationCap,
  Trophy,
  Feather,
} from "lucide-react";
import { Section, SectionHeader } from "./Section";

const services = [
  {
    icon: Heart,
    title: "Wedding Hosting",
    desc: "Sangeet, reception or destination wedding — anchored with warmth, wit and the right pause.",
  },
  {
    icon: Briefcase,
    title: "Corporate Events",
    desc: "Product launches, gala dinners, conferences — polished, on-brand and effortlessly engaging.",
  },
  {
    icon: GraduationCap,
    title: "College Fest Anchoring",
    desc: "High-energy MC for college fests, youth events and massive crowds — keeping the energy alive from first cue to encore.",
  },
  {
    icon: GraduationCap,
    title: "School Events",
    desc: "Annual functions, cultural programs, competitions and special celebrations hosted with energy and confidence.",
  },
  {
    icon: Heart,
    title: "Birthday Celebrations",
    desc: "From intimate gatherings to grand birthday parties — fun, interactive and memorable hosting for every age.",
  },
  {
    icon: Trophy,
    title: "Award Nights",
    desc: "Elegant award ceremonies and recognition nights with smooth transitions, engaging announcements and the right stage presence.",
  },
  {
    icon: Feather,
    title: "Cultural Events",
    desc: "Hosting cultural programs, mushairas and open-mic nights with the grace and energy the stage deserves.",
  },
];

export function Services() {
  return (
    <Section id="services">
      <SectionHeader
        eyebrow="Services"
        title={
          <>
            One host. <span className="gold-gradient italic">Every stage.</span>
          </>
        }
        subtitle="From sangeet floors to cricket commentary boxes, every show is shaped around the room it lives in."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
            whileHover={{ y: -6 }}
            className="group relative glass rounded-2xl p-8 overflow-hidden cursor-pointer"
          >
            <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-[#d4af37]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 border border-[#d4af37]/30 mb-6 group-hover:scale-110 transition-transform duration-500">
                <s.icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="font-display text-2xl text-white mb-3">{s.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                Enquire <span aria-hidden>→</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
