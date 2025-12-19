import React from "react";
import { motion } from "framer-motion";
import { t } from "@/i18n/i18n";
import NeonButton from "./NeonButton";

const MotionCard = motion.div;

const ReleasesGrid = ({ lang, releases }) => {
  return (
    <section id="releases" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-5 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-extrabold neon-title">{t(lang, "releasesTitle")}</h2>
            <div className="neon-divider" />
            <p className="text-white/70">{t(lang, "releasesCopy")}</p>
          </div>
          <div className="hidden md:flex text-xs tracking-[0.3em] text-white/60">
            VHS CATALOG
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {releases.map((release, idx) => (
            <MotionCard
              key={release.id}
              className="group relative overflow-hidden poster-card backdrop-blur-lg shadow-[0_15px_50px_rgba(0,0,0,0.5)] transition duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_40%_30%,rgba(255,0,200,0.3),transparent_45%),radial-gradient(circle_at_70%_70%,rgba(0,255,220,0.25),transparent_45%)]" />
                <img
                  src={release.cover}
                  alt={release.title.en}
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5 space-y-2">
                <div className="flex items-center justify-between text-xs text-white/60 tracking-[0.3em] uppercase">
                  <span>{release.year}</span>
                  <span>VHS</span>
                </div>
                <h3 className="text-xl font-extrabold">{release.title[lang] || release.title.en}</h3>
                <p className="text-sm text-white/75 min-h-[72px]">
                  {release.story[lang] || release.story.en}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {release.mood.map((mood) => (
                    <span
                      key={mood}
                      className="text-[11px] px-2 py-1 rounded-full bg-white/10 border border-white/15 text-white/80"
                    >
                      {mood}
                    </span>
                  ))}
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <NeonButton
                    className="w-full justify-center text-xs"
                    onClick={() => window.open(release.spotifyUrl, "_blank", "noopener")}
                  >
                    ♫ Spotify
                  </NeonButton>
                  <NeonButton
                    variant="secondary"
                    className="w-full justify-center text-xs"
                    onClick={() => window.open(release.youtubeUrl, "_blank", "noopener")}
                  >
                    ▶ YouTube
                  </NeonButton>
                </div>
              </div>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReleasesGrid;
