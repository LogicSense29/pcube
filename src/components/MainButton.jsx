import React from 'react'
import {motion} from 'motion/react'
import { Link } from 'react-router-dom'

function MainButton({text, destination, small}) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative overflow-hidden group ${
        small ? "px-6 py-2.5 text-xs" : "px-10 py-4 text-sm"
      } rounded-full bg-primary text-white font-bold tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(105,2,255,0.3)] hover:shadow-[0_0_30px_rgba(105,2,255,0.5)]`}>
      <span className="relative z-10">{text}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-2 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.button>
  );
}

export default MainButton
