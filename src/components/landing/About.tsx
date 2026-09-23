import { motion } from "framer-motion";
import portrait from "@/assets/anchor-stage.jpg";
import { Section, SectionHeader } from "./Section";

export function About() {
  return (
    <Section id="about">
      <div className="absolute -top-20 right-0 w-[40rem] h-[40rem] rounded-full bg-[#d4af37]/[0.06] blur-3xl pointer-events-none" />
      <div className="grid lg:grid-cols-12 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#d4af37]/20">
            <img
              src={portrait}
              alt="Professional anchor hosting an event on stage"
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07060a] via-transparent to-transparent" />
          </div>
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-[#d4af37]/30 to-transparent blur-2xl opacity-50" />
          <div className="absolute -bottom-8 -right-6 glass rounded-2xl px-6 py-4 hidden md:block">
             <div className="font-display text-3xl gold-gradient">Pan-India</div>
             <div className="text-xs uppercase tracking-widest text-white/60">Available to travel</div>
          </div>
        </motion.div>

        <div className="lg:col-span-7">
          <SectionHeader
            center={false}
            eyebrow="About"
            title={
              <>
                <span className="block">The voice between</span>
                <span className="gold-gradient italic">moments &amp; memories.</span>
              </>
            }
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="space-y-6 text-white/75 text-lg leading-relaxed font-light"
          >
            <p>
              I have always felt at home on stage — from bringing families together at
              weddings to energising packed corporate rooms and social celebrations. Every
              event is different, and that is exactly what makes hosting so exciting.
            </p>
            <p>
              I anchor weddings, corporate galas, college fests and social events
              across India. My work goes beyond a script — it is about{" "}
              <span className="text-gold font-medium">
                turning a roomful of strangers into one heartbeat
              </span>
              , one moment at a time.
            </p>
          </motion.div>

          <div className="mt-10 flex flex-wrap gap-8 text-sm">
            {[
              ["Service area", "Pan-India"],
              ["Formats", "Live · Hybrid"],
              ["Languages", "English · Hindi"],
            ].map(([k, v]) => (
              <div key={k}>
                <div className="text-white/50 text-xs uppercase tracking-widest mb-1">
                  {k}
                </div>
                <div className="font-display text-lg text-white">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}