import React from "react";
import "@/styles/vhs.css";

const NoiseOverlay = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="vhs-noise" />
      <div className="vhs-scanlines" />
      <div className="vhs-jitter" />
    </div>
  );
};

export default NoiseOverlay;
