import React, { useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (href) => {
    const target = document.querySelector(href);
    setMenuOpen(false);
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,63,180,0.2),rgba(60,242,210,0.15),rgba(255,184,47,0.25))]" aria-hidden />
      <div className="mx-auto max-w-6xl px-4 sm:px-5 py-3 flex items-center justify-between gap-3 relative">
        <div className="font-extrabold text-xs sm:text-sm tracking-[0.3em] uppercase text-white flex items-center gap-2 neon-title">
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
        <div className="hidden md:flex items-center gap-2">
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

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="rounded-xl border border-white/20 bg-black/60 px-3 py-2 text-[11px] uppercase tracking-[0.2em] text-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-b border-white/10 bg-black/80 backdrop-blur-xl">
          <div className="mx-auto max-w-6xl px-4 sm:px-5 py-4 space-y-4">
            <nav className="grid gap-2 text-sm uppercase tracking-[0.22em] text-white/80">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className="w-full text-left rounded-2xl border border-white/15 bg-white/5 px-4 py-3 hover:bg-white/10 transition"
                >
                  {t(lang, "nav")?.[item.id] || item.id}
                </button>
              ))}
            </nav>
            <div className="flex flex-wrap gap-2">
              {["ja", "en", "es"].map((code) => (
                <NeonButton
                  key={code}
                  variant={lang === code ? "primary" : "secondary"}
                  className="flex-1 justify-center text-xs"
                  onClick={() => {
                    localStorage.setItem("icl_lang", code);
                    setLang(code);
                    setMenuOpen(false);
                  }}
                >
                  {code.toUpperCase()}
                </NeonButton>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
