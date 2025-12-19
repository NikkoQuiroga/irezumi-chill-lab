import React from "react";
import { motion } from "framer-motion";

const variants = {
  primary:
    "bg-gradient-to-r from-fuchsia-500/70 via-cyan-400/60 to-lime-300/60 text-black font-semibold shadow-[0_0_30px_rgba(236,72,153,0.45)]",
  secondary:
    "bg-white/10 text-white border border-white/20 hover:bg-white/15 font-semibold",
};

const NeonButton = ({ children, variant = "primary", className = "", ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center gap-2 uppercase tracking-[0.15em] rounded-2xl px-5 py-3 transition duration-200 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default NeonButton;
