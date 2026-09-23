import { motion } from "framer-motion";
import { MapPin, CalendarDays } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const events = [
  { date: "Oct 05", year: "2026", city: "Jaipur", venue: "City Stadium", title: "Corporate Cricket League · Final", type: "Cricket Commentary" },
  { date: "Oct 18", year: "2026", city: "Delhi", venue: "Central Auditorium", title: "An Evening of Poetry", type: "Poetry Event" },
  { date: "Nov 07", year: "2026", city: "Mumbai", venue: "Convention Centre", title: "Annual Leadership Awards", type: "Corporate" },
  { date: "Nov 22", year: "2026", city: "Udaipur", venue: "Lakeside Palace", title: "Destination Sangeet", type: "Wedding" },
  { date: "Dec 12", year: "2026", city: "Pune", venue: "University Grounds", title: "College Cultural Fest", type: "College" },
];

export function Calendar() {
  return (
    <Section id="calendar">
      <SectionHeader
        eyebrow="Event Calendar"
        title={
          <>
            Where I am <span className="gold-gradient italic">next.</span>
          </>
        }
        subtitle="Public dates only. For private bookings, please use the form above."
      />

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-[6.5rem] sm:left-[9rem] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#d4af37]/40 to-transparent" />
        <div className="space-y-6">
          {events.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative flex gap-4 sm:gap-10 items-stretch"
            >
              <div className="w-20 sm:w-32 flex-shrink-0 text-right">
                <div className="font-display text-2xl sm:text-4xl text-white">{e.date}</div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 mt-1">
                  {e.year}
                </div>
              </div>
              <div className="relative flex-shrink-0 pt-3">
                <div className="h-3 w-3 rounded-full bg-gold shadow-[0_0_16px_rgba(212,175,55,0.7)]" />
              </div>
              <div className="flex-1 glass rounded-2xl p-6 hover:translate-x-1 transition-transform">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-gold mb-2">
                  <CalendarDays className="h-3 w-3" />
                  {e.type}
                </div>
                <h3 className="font-display text-xl text-white mb-2">{e.title}</h3>
                <div className="flex items-center gap-2 text-sm text-white/55">
                  <MapPin className="h-3.5 w-3.5" />
                  {e.venue} · {e.city}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}