import React from "react";
import { motion } from "framer-motion";
import NeonButton from "./NeonButton";
import { t } from "@/i18n/i18n";

const fade = {
  hidden: { opacity: 0, y: 26, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const MotionDiv = motion.div;

const Hero = ({ lang, featured }) => {
  const chips = [
    { label: t(lang, "heroChip1"), color: "from-fuchsia-500/40 to-cyan-400/40" },
    { label: t(lang, "heroChip2"), color: "from-cyan-400/40 to-lime-300/40" },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 md:pt-24 pb-14 md:pb-20">
      <div className="hero-glow" aria-hidden />
      <div className="hidden md:block sunburst" aria-hidden />
      <div className="mx-auto max-w-6xl px-4 sm:px-5 w-full">
        <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-end relative">
          <MotionDiv
            className="md:col-span-7 space-y-6"
            variants={fade}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-wrap gap-3">
              {chips.map((chip) => (
                <span
                  key={chip.label}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-gradient-to-r ${chip.color} text-[11px] sm:text-xs tracking-[0.28em] uppercase text-white shadow-[0_0_40px_rgba(0,0,0,0.3)]`}
                >
                  <span className="h-2 w-2 rounded-full bg-white/80" />
                  {chip.label}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 text-[11px] sm:text-xs tracking-[0.32em] text-white/70 uppercase">
              <span className="h-[3px] w-10 rounded-full bg-gradient-to-r from-fuchsia-400 via-amber-300 to-cyan-300 shadow-[0_0_18px_rgba(255,63,180,0.55)]" />
              <p className="leading-relaxed">VHS TRANSMISSION // PARALLEL JAPAN 1987–1999 // LATE NIGHT LABEL</p>
            </div>

            <h1 className="neon-title text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-extrabold leading-[0.9] drop-shadow-[0_0_50px_rgba(255,0,200,0.35)]">
              {lang === "ja" ? "入れ墨チルラボ" : "IREZUMI CHILL LAB"}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed">
              {t(lang, "heroSubtitle")}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <NeonButton
                onClick={() => window.open(featured.youtubeUrl, "_blank", "noopener")}
                className="shadow-lg shadow-fuchsia-500/25 justify-center sm:justify-center"
              >
                ▶ {t(lang, "heroCtaWatch")}
              </NeonButton>
              <NeonButton
                variant="secondary"
                className="backdrop-blur-md justify-center sm:justify-center"
                onClick={() => document.getElementById("releases")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t(lang, "heroCtaArchive")}
              </NeonButton>
            </div>

            <div className="flex flex-wrap gap-3 text-xs tracking-[0.3em] uppercase">
              {(featured.mood || []).map((mood) => (
                <span
                  key={mood}
                  className="px-3 py-2 rounded-full bg-white/10 border border-white/15 text-white/80"
                >
                  {mood}
                </span>
              ))}
              <span className="px-3 py-2 rounded-full bg-lime-400/15 border border-lime-300/40 text-lime-50">
                BPM 78–96
              </span>
            </div>
          </MotionDiv>

          <MotionDiv
            className="md:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.05 }}
          >
            <div className="relative holo-border p-5 sm:p-6 md:p-7 overflow-hidden">
              <div className="bubble-grid" aria-hidden />
              <div className="relative space-y-4">
                <div className="text-sm tracking-[0.35em] text-white/70 uppercase">
                  {t(lang, "featuredTitle")}
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/20 bg-black/40 poster-card">
                  <img
                    src={featured.cover}
                    alt={featured.title.en}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-xs text-white/60 tracking-[0.3em] uppercase">{featured.year}</div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold mt-1">{featured.title[lang] || featured.title.en}</h3>
                  <p className="text-white/75 leading-relaxed mt-2">
                    {featured.story[lang] || featured.story.en}
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <NeonButton
                    className="w-full justify-center"
                    onClick={() => window.open(featured.youtubeUrl, "_blank", "noopener")}
                  >
                    ▶ YouTube
                  </NeonButton>
                  <NeonButton
                    variant="secondary"
                    className="w-full justify-center"
                    onClick={() => document.getElementById("stories")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    {t(lang, "featuredStory")}
                  </NeonButton>
                </div>
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default Hero;
