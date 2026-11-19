import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

function FooterSocialButton({ text, destination }) {
  return (
    <motion.a
      href={destination}
      whileHover={{ y: -5 }}
      className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/10 text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
    >
      {text}
    </motion.a>
  );
}

export default FooterSocialButton;
