import { useEffect, useState } from "react";
import { Menu, X, Mic } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#reel", label: "Reel" },
  { href: "#categories", label: "Events" },
  { href: "#calendar", label: "Calendar" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 backdrop-blur-xl bg-[#07060a]/70 border-b border-[#d4af37]/15" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="relative">
            <Mic className="h-5 w-5 text-gold" />
            <span className="absolute inset-0 blur-md bg-[#d4af37]/60 rounded-full opacity-60 group-hover:opacity-100 transition" />
          </span>
          <span className="font-display text-xl tracking-wide">
            <span className="gold-gradient">Garv</span>
            <span className="text-white/90"> Live</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-wide text-white/70 hover:text-gold transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-[#d4af37] to-transparent transition-all duration-300" />
            </a>
          ))}
          <a
            href="#booking"
            className="px-5 py-2 rounded-full text-sm font-medium border border-[#d4af37]/40 text-gold hover:bg-[#d4af37] hover:text-black transition-all duration-300 hover:shadow-[0_0_24px_rgba(212,175,55,0.5)]"
          >
            Book Now
          </a>
        </nav>

        <button
          className="md:hidden p-2 text-gold"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-3 mx-4 rounded-2xl glass p-6 flex flex-col gap-4"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-white/80 hover:text-gold"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}