import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-5 py-10 space-y-3 text-white/70">
        <div className="font-extrabold tracking-[0.35em] text-white text-sm uppercase">
          IREZUMI CHILL LAB
        </div>
        <div className="text-sm">
          Neon lo-fi tapes, festival-grade layout, and respectful ink credits. Broadcasting forever.
        </div>
        <div className="text-xs tracking-[0.25em] uppercase">VHS // City Pop // Tattoo Night</div>
      </div>
    </footer>
  );
};

export default Footer;
