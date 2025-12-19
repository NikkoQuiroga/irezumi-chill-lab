import React from "react";
import { motion } from "framer-motion";
import { t, stringsFor } from "@/i18n/i18n";
import NeonButton from "./NeonButton";

const Stages = ({ lang }) => {
  const copy = stringsFor(lang);
  return (
    <section id="stages" className="py-16">
      <div className="mx-auto max-w-6xl px-5 space-y-8">
        <div>
          <p className="text-xs tracking-[0.35em] text-white/60 uppercase">VHS FEST</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-1">{t(lang, "stagesTitle")}</h2>
          <p className="text-white/70 mt-3 max-w-3xl">
            {copy.heroSubtitle}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {copy.stages.map((stage, idx) => (
            <motion.div
              key={stage.tag}
              className="relative rounded-3xl border border-white/12 bg-black/45 backdrop-blur-xl p-6 overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,0,160,0.18),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(0,255,220,0.18),transparent_45%)] blur-2xl opacity-70" />
              <div className="relative space-y-3">
                <div className="text-xs tracking-[0.3em] uppercase text-white/70">{stage.tag}</div>
                <h3 className="text-2xl font-bold">{stage.title}</h3>
                <p className="text-white/75 leading-relaxed">{stage.desc}</p>
                <NeonButton variant="secondary" className="w-full justify-center">
                  {t(lang, "openPlaylist")}
                </NeonButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stages;
