import React, { useEffect, useState } from "react";
import { detectLocale, stringsFor } from "@/i18n/i18n";

const STORAGE_KEY = "icl_lang";

const LanguageGate = ({ lang, setLang }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setLang(stored);
      return;
    }
    const detected = detectLocale();
    if (detected !== "en") {
      setOpen(true);
    }
  }, [setLang]);

  const handleSelect = (nextLang) => {
    setLang(nextLang);
    localStorage.setItem(STORAGE_KEY, nextLang);
    setOpen(false);
  };

  const copy = stringsFor(lang);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Language selection"
    >
      <div className="max-w-lg w-full rounded-3xl border border-white/15 bg-black/70 shadow-2xl p-6">
        <div className="text-sm tracking-[0.35em] text-fuchsia-200/80">
          {copy.modalTitle}
        </div>
        <p className="mt-3 text-white/80 leading-relaxed">{copy.modalBody}</p>
        <div className="mt-6 grid gap-3">
          <button
            onClick={() => handleSelect("en")}
            className="w-full py-3 rounded-2xl border border-white/20 bg-white/15 hover:bg-white/20 transition"
          >
            {copy.stayEnglish}
          </button>
          <button
            onClick={() => handleSelect("ja")}
            className="w-full py-3 rounded-2xl border border-fuchsia-400/40 bg-fuchsia-500/15 hover:bg-fuchsia-500/25 transition text-fuchsia-50"
          >
            {copy.switchJapanese}
          </button>
          <button
            onClick={() => handleSelect("es")}
            className="w-full py-3 rounded-2xl border border-cyan-400/40 bg-cyan-500/10 hover:bg-cyan-500/20 transition text-cyan-50"
          >
            {copy.switchSpanish}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageGate;
