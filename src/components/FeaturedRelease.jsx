import React from "react";
import { motion } from "framer-motion";
import NeonButton from "./NeonButton";
import { t } from "@/i18n/i18n";

const FeaturedRelease = ({ lang, featured }) => {
  return (
    <section className="py-12" id="featured">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          className="relative overflow-hidden holo-border p-6 md:p-8"
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bubble-grid" aria-hidden />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-xs tracking-[0.35em] uppercase text-white/70">
                {t(lang, "featuredTitle")}
              </p>
              <h2 className="text-4xl font-extrabold leading-tight">
                {featured.title[lang] || featured.title.en}
              </h2>
              <p className="text-white/75 leading-relaxed">
                {featured.story[lang] || featured.story.en}
              </p>
              <div className="flex flex-wrap gap-2 text-xs tracking-[0.3em] uppercase">
                {featured.mood.map((mood) => (
                  <span
                    key={mood}
                    className="px-3 py-2 rounded-full bg-white/10 border border-white/15 text-white/80"
                  >
                    {mood}
                  </span>
                ))}
                <span className="px-3 py-2 rounded-full bg-cyan-400/15 border border-cyan-300/40 text-cyan-50">
                  {featured.year}
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                <NeonButton onClick={() => window.open(featured.youtubeUrl, "_blank", "noopener")}>
                  ▶ {t(lang, "youtube")}
                </NeonButton>
                <NeonButton
                  variant="secondary"
                  onClick={() => document.getElementById("stories")?.scrollIntoView({ behavior: "smooth" })}
                >
                  {t(lang, "featuredStory")}
                </NeonButton>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-white/20 bg-black/60 shadow-[0_20px_60px_rgba(0,0,0,0.5)] poster-card">
                <img
                  src={featured.cover}
                  alt={featured.title.en}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedRelease;
