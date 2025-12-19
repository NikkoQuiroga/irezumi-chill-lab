import React from "react";
import { motion } from "framer-motion";

const variants = {
  primary:
    "btn-primary text-black font-semibold shadow-[0_0_30px_rgba(236,72,153,0.45)]",
  secondary:
    "btn-secondary text-white font-semibold",
};

const NeonButton = ({ children, variant = "primary", className = "", ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      className={`neon-btn relative overflow-hidden inline-flex items-center justify-center gap-2 uppercase tracking-[0.15em] rounded-2xl px-5 py-3 transition duration-200 ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="btn-glow" aria-hidden />
      <span className="btn-sheen" aria-hidden />
      {children}
    </motion.button>
  );
};

export default NeonButton;
