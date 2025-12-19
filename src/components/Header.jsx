import React from "react";
import { t } from "@/i18n/i18n";
import NeonButton from "./NeonButton";

const navItems = [
  { id: "hero", href: "#hero" },
  { id: "releases", href: "#releases" },
  { id: "stages", href: "#stages" },
  { id: "stories", href: "#stories" },
  { id: "horishi", href: "#horishi" },
  { id: "social", href: "#social" },
];

const Header = ({ lang, setLang }) => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,63,180,0.2),rgba(60,242,210,0.15),rgba(255,184,47,0.25))]" aria-hidden />
      <div className="mx-auto max-w-6xl px-5 py-3 flex items-center justify-between gap-4 relative">
        <div className="font-extrabold text-sm tracking-[0.35em] uppercase text-white flex items-center gap-2 neon-title">
          <span className="h-2 w-2 rounded-full bg-fuchsia-400 animate-pulse" />
          IREZUMI CHILL LAB
        </div>
        <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-[0.25em] text-white/70">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="hover:text-white transition-colors"
            >
              {t(lang, "nav")?.[item.id] || item.id}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {["ja", "en", "es"].map((code) => (
            <NeonButton
              key={code}
              variant={lang === code ? "primary" : "secondary"}
              className="text-xs px-4 py-2"
              onClick={() => {
                localStorage.setItem("icl_lang", code);
                setLang(code);
              }}
            >
              {code.toUpperCase()}
            </NeonButton>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
