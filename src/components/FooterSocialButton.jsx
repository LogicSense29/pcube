import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

function FooterSocialButton({ text, destination, small }) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 1.3,
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      className={`rounded-full bg-gradient-to-r from-primary-2 to-primary 
      text-white font-normal hover:to-primary hover:to-primary-2 px-5 py-2 text-xs md:px-10 md:py-4 md:text-sm transition-all duration-500`}>
      {text}
    </motion.button>
  );
}

export default FooterSocialButton;
