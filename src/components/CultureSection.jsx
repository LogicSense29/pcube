import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Sparkles, Zap, Smartphone, Globe, Palette } from 'lucide-react';

const CultureSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textX = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const pods = [
    { 
      id: 1, 
      index: "01",
      title: "Vibe / Shift", 
      coord: "LOC: 12.0[P]",
      x: "8%", y: "15%", 
      delay: 0.1,
      color: "border-primary/30"
    },
    { 
      id: 2, 
      index: "02",
      title: "Core / Logic", 
      coord: "PCUBE_SYS_v2",
      x: "72%", y: "12%", 
      delay: 0.3,
      color: "border-primary-2/30"
    },
    { 
      id: 3, 
      index: "03",
      title: "Flow / State", 
      coord: "SYNC_09.4",
      x: "12%", y: "65%", 
      delay: 0.5,
      color: "border-accent/30"
    },
    { 
      id: 4, 
      index: "04",
      title: "Studio / DNA", 
      coord: "DNA_00.1",
      x: "68%", y: "58%", 
      delay: 0.7,
      color: "border-primary/30"
    }
  ];

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[900px] bg-[#0A0118] overflow-hidden py-32 flex items-center justify-center"
    >
      {/* Dynamic Aura Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute inset-0 pattern-grid opacity-[0.03]" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary-2/10 rounded-full blur-[140px] delay-1000 animate-pulse" />
      </motion.div>

      {/* Editorial Background Text */}
      <motion.h2 
        style={{ x: textX }}
        className="absolute w-full text-center text-[18vw] font-black uppercase tracking-tighter text-transparent stroke-text opacity-[0.06] select-none pointer-events-none z-0"
      >
        P3 FOUNDATION
      </motion.h2>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-none border-l-2 border-primary bg-white/5 backdrop-blur-sm mb-10">
            <div className="w-2 h-2 bg-primary animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">Section V.01 // Culture</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9] mb-10 text-white">
            Beyond the <br /> 
            <span className="text-gradient">Surface.</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-medium mx-auto max-w-xl">
             We don't just build websites. We architect digital identities for a generation that seeks absolute precision and visceral impact.
          </p>
        </motion.div>

        {/* Floating Architectural Units */}
        <div className="relative h-[500px] md:h-[600px] w-full max-w-6xl mx-auto">
          {pods.map((pod) => (
            <motion.div
              key={pod.id}
              initial={{ opacity: 0, scale: 0.9, x: pod.id % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -15, scale: 1.05 }}
              transition={{ 
                type: "spring", 
                stiffness: 80, 
                damping: 15, 
                delay: pod.delay 
              }}
              style={{ left: pod.x, top: pod.y }}
              className={`absolute hidden md:block w-48 bg-white/5 backdrop-blur-xl p-6 rounded-none border-t-2 ${pod.color} shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-default group overflow-hidden`}
            >
              {/* Corner Marker */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-primary/10 flex items-center justify-center">
                 <div className="w-1 h-1 bg-primary" />
              </div>

              <div className="relative z-10">
                <span className="text-4xl font-black text-white/20 group-hover:text-primary/40 transition-colors duration-500 mb-4 block leading-none">
                  {pod.index}
                </span>
                <p className="text-sm font-bold uppercase tracking-widest text-white mb-2">{pod.title}</p>
                <code className="text-[10px] font-mono text-slate-500 block mb-4 italic">{pod.coord}</code>
                
                <div className="h-[2px] w-4 bg-primary group-hover:w-full transition-all duration-700" />
              </div>

              {/* Decorative SVG Geometric Glitch */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
                  <rect x="0" y="0" width="100" height="2" />
                  <rect x="0" y="20" width="100" height="2" />
                  <rect x="0" y="40" width="100" height="2" />
                </svg>
              </div>
            </motion.div>
          ))}

          {/* Center Precision Unit */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
             <div className="relative">
                <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full border border-white/5 flex items-center justify-center">
                   <div className="absolute inset-0 border-t-2 border-primary/20 rounded-full animate-spin-slow" />
                   <div className="absolute inset-4 border-b-2 border-primary-2/10 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }} />
                   
                   <div className="w-32 h-32 md:w-48 md:h-48 rounded-none border border-white/10 flex flex-col items-center justify-center relative overflow-hidden backdrop-blur-2xl">
                      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-scanline" />
                      <span className="text-xs font-black tracking-[0.5em] text-primary mb-2">PCUBE</span>
                      <span className="text-[10px] font-mono text-slate-500">CORE.UNIT</span>
                   </div>
                </div>
                
                {/* Orbital Text / Coordinates */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                   <div className="h-20 w-[1px] bg-gradient-to-t from-primary/50 to-transparent" />
                   <span className="text-[10px] font-mono text-primary/50 uppercase tracking-widest whitespace-nowrap">EXT_REF: PRE_001</span>
                </div>
             </div>
          </motion.div>
        </div>

        {/* Mobile View - Architectural Blocks */}
        <div className="grid grid-cols-1 gap-4 md:hidden mt-20 text-left">
            {pods.map((pod) => (
              <div key={pod.id} className="bg-white/5 backdrop-blur-md p-6 border-l-2 border-primary">
                 <div className="flex justify-between items-start mb-4">
                    <span className="text-2xl font-black text-white/30">{pod.index}</span>
                    <code className="text-[10px] font-mono text-slate-500 italic">{pod.coord}</code>
                 </div>
                 <p className="text-sm font-bold uppercase tracking-widest text-white">{pod.title}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default CultureSection;
