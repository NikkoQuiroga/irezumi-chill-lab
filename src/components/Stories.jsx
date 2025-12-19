import React from "react";
import { motion } from "framer-motion";
import { stringsFor, t } from "@/i18n/i18n";

const MotionCard = motion.div;

const Stories = ({ lang }) => {
  const copy = stringsFor(lang);
  return (
    <section id="stories" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-5 space-y-8">
        <div>
          <p className="text-xs tracking-[0.35em] text-white/60 uppercase">LAB NOTES</p>
          <h2 className="text-3xl md:text-4xl font-extrabold neon-title">{t(lang, "storiesTitle")}</h2>
          <p className="text-white/70 mt-3 max-w-3xl">
            VHS texture, tattoo ritual, and city pop nostalgia captured in rolling notes.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
          {copy.stories.map((story, idx) => (
            <MotionCard
              key={story.title}
              className="note-card backdrop-blur-xl p-6 space-y-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
            >
              <div className="text-xs tracking-[0.3em] text-white/60 uppercase">NOTE {idx + 1}</div>
              <h3 className="text-xl font-bold">{story.title}</h3>
              <p className="text-white/75 leading-relaxed">{story.body}</p>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stories;
