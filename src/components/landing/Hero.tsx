import { motion } from "framer-motion";
import { Play, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-crowd.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden grain">
      {/* Background video with image fallback */}
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          autoPlay
          muted
          loop
          playsInline
          poster={heroBg}
        >
          <source
            src="/cheering-crowd.mp4"
            type="video/mp4"
          />
          <source
            src="/reels/cheering-crowd.mp4"
            type="video/mp4"
          />
          <source
            src="https://cdn.coverr.co/videos/coverr-concert-crowd-cheering-7068/1080p.mp4"
            type="video/mp4"
          />
        </video>
        <img
          src={heroBg}
          alt="Crowd cheering at a stage performance"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07060a]/70 via-[#07060a]/40 to-[#07060a]" />
        <div className="absolute inset-0 spotlight" />
        {/* Animated light beams */}
        <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[60vw] h-[120vh] bg-gradient-to-b from-[#d4af37]/30 via-[#d4af37]/5 to-transparent blur-3xl animate-spotlight" />
      </div>

      <div className="relative z-10 px-6 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/30 glass text-xs tracking-[0.3em] uppercase text-gold mb-8"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
          Anchor · Emcee · Stage Host
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="font-display text-[14vw] sm:text-[10vw] md:text-[8vw] lg:text-[7.5rem] leading-[0.95] tracking-tight"
        >
          <span className="block text-white/95">Garv</span>
          <span className="block gold-gradient italic">On the Mic</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-light"
        >
          Bringing energy, elegance and connection to{" "}
          <span className="italic font-display text-gold">unforgettable experiences</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#booking"
            className="group px-8 py-4 rounded-full bg-gradient-to-r from-[#f3d77a] via-[#d4af37] to-[#8a6a1f] text-black font-semibold tracking-wide transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.55)] hover:-translate-y-0.5"
          >
            Book Now
          </a>
          <a
            href="#reel"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#d4af37]/40 text-white/90 hover:text-gold hover:border-[#d4af37] transition-all duration-300 backdrop-blur-md"
          >
            <Play className="h-4 w-4 fill-current" />
            Watch Performances
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.4, y: { duration: 2, repeat: Infinity } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-gold flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em]"
      >
        Scroll
        <ChevronDown className="h-4 w-4" />
      </motion.a>
    </section>
  );
}