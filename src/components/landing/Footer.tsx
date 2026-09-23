import { Instagram, Youtube, Linkedin, MessageCircle, Mail, Mic } from "lucide-react";

const socials = [
  { Icon: Instagram, href: "https://www.instagram.com/anchorgarv_official?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==", label: "Instagram" },
  { Icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-[#d4af37]/15 bg-[#050409]">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-50" />
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <a href="#top" className="flex items-center gap-2">
            <Mic className="h-5 w-5 text-gold" />
            <span className="font-display text-2xl">
              <span className="gold-gradient">Garv</span>
              <span className="text-white"> Live</span>
            </span>
          </a>
          <p className="mt-6 text-white/55 max-w-sm font-light leading-relaxed">
            Anchor. Emcee. Stage host. Turning ordinary events into the ones
            people keep talking about.
          </p>
          <div className="flex gap-3 mt-8">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-full border border-[#d4af37]/30 flex items-center justify-center text-white/70 hover:text-black hover:bg-gold hover:border-gold transition-all duration-300 hover:shadow-[0_0_24px_rgba(212,175,55,0.5)]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="text-[10px] uppercase tracking-[0.4em] text-gold mb-5">
            Quick links
          </div>
          <ul className="space-y-3 text-sm text-white/65">
            {[
              ["About", "#about"],
              ["Services", "#services"],
              ["Reel", "#reel"],
              ["Categories", "#categories"],
              ["Calendar", "#calendar"],
              ["Book", "#booking"],
            ].map(([l, h]) => (
              <li key={l}>
                <a href={h} className="hover:text-gold transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="text-[10px] uppercase tracking-[0.4em] text-gold mb-5">Contact</div>
          <ul className="space-y-3 text-sm text-white/65">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gold" /> your@email.com
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-gold" /> +91 89551 82955
            </li>
            <li>India · Available Pan-India</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <div>© {new Date().getFullYear()} Garv live. All stages reserved.</div>
          <div className="tracking-widest uppercase">Crafted with spotlight ✦ gold</div>
        </div>
      </div>
    </footer>
  );
}