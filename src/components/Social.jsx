import React from "react";
import { motion } from "framer-motion";
import { t } from "@/i18n/i18n";
import NeonButton from "./NeonButton";

const MotionCard = motion.a;

const socials = (lang) => [
  {
    label: t(lang, "youtube"),
    href: "https://www.youtube.com/@irezumichilllab",
    accent: "from-red-500/60 to-fuchsia-500/50",
  },
  {
    label: t(lang, "instagram"),
    href: "#",
    accent: "from-fuchsia-500/50 to-amber-400/45",
  },
  {
    label: t(lang, "email"),
    href: "mailto:hello@irezumichill.lab",
    accent: "from-cyan-400/50 to-lime-300/45",
  },
];

const Social = ({ lang }) => {
  return (
    <section id="social" className="py-16">
      <div className="mx-auto max-w-6xl px-5 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.35em] text-white/60 uppercase">SIGNAL</p>
            <h2 className="text-3xl md:text-4xl font-extrabold neon-title">{t(lang, "socialTitle")}</h2>
          </div>
          <div className="text-sm text-white/70">{t(lang, "socialCta")}</div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {socials(lang).map((social, idx) => (
            <MotionCard
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer noopener"
              className={`group relative overflow-hidden note-card backdrop-blur-xl p-6`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${social.accent} opacity-50 group-hover:opacity-80 transition blur-2xl`} />
              <div className="relative flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs tracking-[0.3em] uppercase text-white/70">CHANNEL</div>
                  <h3 className="text-2xl font-bold">{social.label}</h3>
                  <p className="text-white/75 mt-1">{t(lang, "socialCta")}</p>
                </div>
                <NeonButton variant="secondary" className="shrink-0">
                  ↗
                </NeonButton>
              </div>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Social;
