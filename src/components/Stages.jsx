import React from "react";
import { motion } from "framer-motion";
import { t, stringsFor } from "@/i18n/i18n";
import NeonButton from "./NeonButton";

const MotionCard = motion.div;

const Stages = ({ lang }) => {
  const copy = stringsFor(lang);
  return (
    <section id="stages" className="py-16">
      <div className="mx-auto max-w-6xl px-5 space-y-8">
        <div>
          <p className="text-xs tracking-[0.35em] text-white/60 uppercase">VHS FEST</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-1 neon-title">{t(lang, "stagesTitle")}</h2>
          <p className="text-white/70 mt-3 max-w-3xl">
            {copy.heroSubtitle}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {copy.stages.map((stage, idx) => (
            <MotionCard
              key={stage.tag}
              className="relative note-card backdrop-blur-xl p-6 overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
            >
              <div className="absolute inset-0 bubble-grid" aria-hidden />
              <div className="relative space-y-3">
                <div className="text-xs tracking-[0.3em] uppercase text-white/70">{stage.tag}</div>
                <h3 className="text-2xl font-bold">{stage.title}</h3>
                <p className="text-white/75 leading-relaxed">{stage.desc}</p>
                <NeonButton variant="secondary" className="w-full justify-center">
                  {t(lang, "openPlaylist")}
                </NeonButton>
              </div>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stages;
