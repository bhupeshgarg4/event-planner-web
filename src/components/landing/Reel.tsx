import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles } from "lucide-react";
import { Section, SectionHeader } from "./Section";

interface ReelItem {
  id: string;
  src: string;
  fallbackSrc: string;
  title: string;
  tag: string;
  category: "all" | "weddings" | "corporate" | "crowd";
  desc: string;
}

const reels: ReelItem[] = [
  {
    id: "entry",
    src: "/reels/entry-reel.mp4",
    fallbackSrc: "/entry-reel.mp4",
    title: "Grand Stage Entry",
    tag: "Event Entry",
    category: "crowd",
    desc: "Electrifying stage entrance setting the mood and commanding the room from second one.",
  },
  {
    id: "award",
    src: "/reels/award-night.mp4",
    fallbackSrc: "/award-night.mp4",
    title: "Corporate Awards Gala",
    tag: "Award Night",
    category: "corporate",
    desc: "Polished, seamless and prestigious presentation for high-stakes enterprise summits.",
  },
  {
    id: "baraat",
    src: "/reels/baarat-reel.mp4",
    fallbackSrc: "/baarat-reel.mp4",
    title: "Baraat Madness",
    tag: "Baraat",
    category: "weddings",
    desc: "Unstoppable rhythm, massive dance crowds, and high-octane celebration.",
  },
  {
    id: "sangeet",
    src: "/reels/sangeet-nnight.mp4",
    fallbackSrc: "/sangeet-nnight.mp4",
    title: "Sangeet Floor Magic",
    tag: "Sangeet Night",
    category: "weddings",
    desc: "Spontaneous dance-offs, family moments, and seamless stage hosting.",
  },
  {
    id: "sports",
    src: "/reels/sports-activity.mp4",
    fallbackSrc: "/sports-activity.mp4",
    title: "Stadium & Arena Energy",
    tag: "Sports Arena",
    category: "crowd",
    desc: "Hyping up thousands in stadiums, marathons, and massive sports fan festivals.",
  },
 
];

const categories = [
  { key: "all", label: "All Reels" },
  { key: "weddings", label: "Weddings & Baraat" },
  { key: "corporate", label: "Corporate Galas" },
  { key: "crowd", label: "Arena & Entries" },
];

function ReelCard({ reel }: { reel: ReelItem }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else {
      videoRef.current.requestFullscreen().catch(() => {});
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const duration = videoRef.current.duration || 1;
    setProgress((videoRef.current.currentTime / duration) * 100);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="group relative rounded-3xl overflow-hidden glass border border-[#d4af37]/20 hover:border-[#d4af37]/60 transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.2)] bg-[#07060a]/90 flex flex-col"
    >
      {/* Video Container */}
      <div
        className="relative aspect-[9/16] w-full bg-black cursor-pointer overflow-hidden"
        onClick={togglePlay}
      >
        <video
          ref={videoRef}
          playsInline
          preload="auto"
          muted={isMuted}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleEnded}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        >
          <source src={reel.src} type="video/mp4" />
          <source src={reel.fallbackSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Ambient Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

        {/* Top Badges & Audio Controls */}
        <div className="absolute top-4 inset-x-4 flex items-center justify-between z-20">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium tracking-wider uppercase bg-black/60 backdrop-blur-md border border-[#d4af37]/40 text-[#f3d77a]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37] animate-pulse" />
            {reel.tag}
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleMute}
              className="p-2 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white/90 hover:text-gold hover:border-[#d4af37]/60 transition-all"
              aria-label={isMuted ? "Unmute" : "Mute"}
              title={isMuted ? "Unmute audio" : "Mute audio"}
            >
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4 text-gold" />}
            </button>
            <button
              onClick={toggleFullscreen}
              className="p-2 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white/90 hover:text-gold hover:border-[#d4af37]/60 transition-all"
              aria-label="Fullscreen"
              title="Fullscreen"
            >
              <Maximize2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Center Play/Pause Indicator Overlay */}
        <AnimatePresence>
          {!isPlaying && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
            >
              <div className="h-16 w-16 rounded-full bg-black/60 backdrop-blur-md border border-[#d4af37]/70 flex items-center justify-center text-[#d4af37] shadow-[0_0_30px_rgba(212,175,55,0.4)] group-hover:scale-110 transition-transform">
                <Play className="h-7 w-7 fill-current translate-x-0.5" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Progress Bar */}
        <div className="absolute bottom-0 inset-x-0 h-1 bg-white/10 z-20">
          <div
            className="h-full bg-gradient-to-r from-[#d4af37] to-[#f3d77a] transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Card Details */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h4 className="font-display text-xl text-white group-hover:text-[#f3d77a] transition-colors mb-2">
            {reel.title}
          </h4>
          <p className="text-white/60 text-xs leading-relaxed line-clamp-2">
            {reel.desc}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-white/40">
          <span className="flex items-center gap-1.5 text-gold/80">
            <Sparkles className="h-3.5 w-3.5" />
            {isPlaying ? "Playing now" : "Click to watch"}
          </span>
          <span className="text-[11px] tracking-wider uppercase text-white/50">
            {isMuted ? "Muted" : "Audio On"}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export function Reel() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredReels =
    activeCategory === "all"
      ? reels
      : reels.filter((r) => r.category === activeCategory);

  return (
    <Section id="reel">
      <SectionHeader
        eyebrow="Performance Reel"
        title={
          <>
            Live. Unscripted.{" "}
            <span className="gold-gradient italic">Felt.</span>
          </>
        }
        subtitle="Step right into the arena. Real energy, spontaneous crowd connect, and unforgettable moments."
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`px-5 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
              activeCategory === cat.key
                ? "bg-gradient-to-r from-[#d4af37] to-[#b38f26] text-black font-semibold shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                : "glass text-white/70 hover:text-white hover:border-[#d4af37]/40"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Reels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReels.map((reel) => (
          <ReelCard key={reel.id} reel={reel} />
        ))}
      </div>
    </Section>
  );
}