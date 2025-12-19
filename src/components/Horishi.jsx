import React from "react";
import { motion } from "framer-motion";
import { t } from "@/i18n/i18n";

const credits = [
  { name: "Hori Kana", note: "Linework mentor, minimalist smoke shading.", link: "#" },
  { name: "Studio Kintsugi", note: "Collage sleeves with neon threads.", link: "#" },
  { name: "Hori Ryo", note: "Thundercloud motifs and koi in low light.", link: "#" },
  { name: "Kagerou Collective", note: "Printmaking duo feeding our poster grit.", link: "#" },
];

const Horishi = ({ lang }) => {
  return (
    <section id="horishi" className="py-16">
      <div className="mx-auto max-w-6xl px-5 space-y-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.35em] text-white/60 uppercase">CREDITS</p>
            <h2 className="text-3xl md:text-4xl font-extrabold neon-title">{t(lang, "horishiTitle")}</h2>
          </div>
          <p className="text-white/70">{t(lang, "horishiNote")}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {credits.map((credit, idx) => (
            <motion.a
              key={credit.name}
              href={credit.link}
              className="note-card backdrop-blur-xl p-5 hover:border-white/25 transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <div className="text-xs tracking-[0.3em] text-white/60 uppercase">HORISHI</div>
              <h3 className="text-2xl font-bold mt-1">{credit.name}</h3>
              <p className="text-white/75 mt-2">{credit.note}</p>
              <span className="text-sm text-cyan-200/80 mt-3 inline-flex items-center gap-2">
                {credit.link === "#" ? "Link coming soon" : credit.link}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Horishi;
