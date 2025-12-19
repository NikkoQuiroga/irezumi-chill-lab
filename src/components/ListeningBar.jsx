import React from "react";
import { motion } from "framer-motion";
import NeonButton from "./NeonButton";

const MotionContainer = motion.div;

const ListeningBar = ({ lang, featured }) => {
  if (!featured) return null;

  const title = featured.title[lang] || featured.title.en;
  const story = featured.story[lang] || featured.story.en;

  return (
    <MotionContainer
      className="fixed inset-x-0 bottom-4 z-40 flex justify-center px-3 sm:px-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 120, damping: 18 }}
    >
      <div className="pointer-events-auto relative max-w-5xl w-full overflow-hidden rounded-3xl border border-white/15 bg-black/70 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.55)]">
        <div
          className="absolute inset-0 opacity-70"
          aria-hidden
          style={{
            background:
              "radial-gradient(circle at 20% 30%, rgba(255,63,180,0.25), transparent 45%), radial-gradient(circle at 80% 70%, rgba(60,242,210,0.2), transparent 45%)",
          }}
        />
        <div className="absolute inset-0 neon-grid" aria-hidden />

        <div className="relative grid gap-4 p-4 sm:p-5 md:grid-cols-[auto,1fr,auto] items-center">
          <motion.div whileHover={{ rotate: -2, scale: 1.03 }} className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden border border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.55)]">
            <img src={featured.cover} alt={title} className="w-full h-full object-cover" />
          </motion.div>

          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-white/70">
              <span className="h-[3px] w-6 rounded-full bg-gradient-to-r from-fuchsia-400 via-amber-300 to-cyan-300 shadow-[0_0_12px_rgba(255,63,180,0.5)]" />
              <span>Now streaming</span>
              <div className="equalizer" aria-hidden>
                {[0, 1, 2, 3, 4].map((bar) => (
                  <span key={bar} style={{ animationDelay: `${bar * 120}ms` }} />
                ))}
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-lg md:text-xl font-bold leading-tight">{title}</p>
              <span className="px-2 py-1 text-[11px] rounded-full bg-white/10 border border-white/20 text-white/70">
                {featured.year}
              </span>
            </div>
            <p className="text-white/70 text-sm leading-snug max-h-16 overflow-hidden">{story}</p>
            <div className="flex flex-wrap gap-2">
              {(featured.mood || []).map((mood) => (
                <span key={mood} className="px-2 py-1 text-[11px] rounded-full bg-white/5 border border-white/15 text-white/70">
                  {mood}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 md:min-w-[180px] w-full md:w-auto">
            <NeonButton
              className="justify-center text-xs w-full"
              onClick={() => window.open(featured.spotifyUrl, "_blank", "noopener")}
            >
              ♫ Listen on Spotify
            </NeonButton>
            <NeonButton
              variant="secondary"
              className="justify-center text-xs w-full"
              onClick={() => window.open(featured.youtubeUrl, "_blank", "noopener")}
            >
              ▶ Watch on YouTube
            </NeonButton>
          </div>
        </div>
      </div>
    </MotionContainer>
  );
};

export default ListeningBar;
