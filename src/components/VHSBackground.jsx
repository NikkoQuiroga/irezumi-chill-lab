import React from "react";

const VHSBackground = () => {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      <video
        className="w-full h-full object-cover scale-105"
        src="/video/vhs-loop.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/video/vhs-loop.jpg"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,0,160,0.25),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(0,255,220,0.2),transparent_40%),linear-gradient(to_bottom,rgba(0,0,0,0.35),rgba(0,0,0,0.75))]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/60" />
      <div className="pointer-events-none absolute inset-0" style={{ boxShadow: "inset 0 0 180px rgba(0,0,0,0.65)" }} />
    </div>
  );
};

export default VHSBackground;
