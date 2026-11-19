import { Link } from "react-router-dom";
import Image from "/self.png";
import Elipsce1 from "/Ellipse-1.png";
import Elipsce2 from "/Ellipse-2.png";
import Frame from "/Frame-3.png";
import { motion } from "motion/react";
import MainButton from "./MainButton";
import { Instagram } from "lucide-react";

function HeroSection() {
  return (
    <section className='lg:min-h-screen bg-main-bg flex flex-col lg:flex-row gap-10 lg:gap-10 px-4 sm:px-20 lg:px-32 items-center justify-between relative overflow-hidden pt-20 lg:pt-0'>
      {/* Decorative Background Elements */}
      <div className="hero-glow top-[-10%] left-[-10%]" />
      <div className="hero-glow bottom-[-10%] right-[-10%] opacity-50" />
      
      {/* Left Side */}
      <div className='z-40 mb-10 lg:mb-0 space-y-4 lg:flex-1 text-center md:text-left pt-5 lg:pt-20'>
        <motion.span
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.2,
          }}
          className='text-xs md:text-sm font-bold tracking-widest uppercase text-primary/80'>
          Over 1000+ {' '}
          <span className='font-bold text-header-gray'>
            jobs done
          </span>
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.4,
          }}
          className='text-5xl lg:text-6xl font-bold z-10 tracking-tight leading-tight'>
          Where <span className="text-gradient">Vision</span> Finds
          Forms & Ideas
          Wear <span className="text-gradient">Identity</span>.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.6,
          }}
          className='text-base md:text-xl text-slate-600 max-w-xl '>
          We help you build a brand that connects, communicates, and stands out in a crowded marketplace.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className='flex flex-wrap items-center justify-center md:justify-start gap-6 pt-4'>
          <MainButton text={"Contact us"} />
          <a href='https://www.instagram.com/thepcubestudio' className='text-lg font-medium hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary pb-1'>
            Instagram
            {/* <Instagram/> */}
          </a>
        </motion.div>
      </div>

      {/* Right Side */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.5 }}
        className='relative lg:h-full lg:flex-1 flex flex-col md:flex-row justify-center items-center lg:items-end lg:pt-10 pt-0 pb-10 lg:pb-0 lg:translate-y-8'>
        <div className="relative group">
          <div className="absolute -inset-4 pattern-dots opacity-20 rounded-[40px] transform -rotate-3 scale-105 hidden lg:block" />
          <div className="absolute inset-0 pattern-dots opacity-10 rounded-[32px] block lg:hidden" />
          
          {/* Nested Box Pattern */}
          <div className="absolute inset-x-0 bottom-0 top-0 z-35 bg-white/50 backdrop-blur-[2px] rounded-[32px] md:rounded-[40px] overflow-hidden pointer-events-none">
            <div className="absolute inset-0 pattern-grid opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
          </div>

          <motion.img
            src={Frame}
            alt=''
            className='w-full max-w-[280px] md:max-w-[440px] lg:max-w-[400px] z-30 drop-shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700'
          />
          <motion.img
            src={Image}
            alt=''
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] z-50 drop-shadow-2xl'
          />
          
          <img
            src={Elipsce1}
            alt=''
            className='absolute -left-10 -bottom-10 w-32 md:w-48 opacity-50 blur-sm animate-pulse'
          />
          <img
            src={Elipsce2}
            alt=''
            className='absolute -right-10 -top-10 w-32 md:w-48 opacity-50 blur-sm animate-pulse'
          />
        </div>
      </motion.div>
      {/* </div> */}
    </section>
  );
}

{
  /* <img
src={Elipsce1}
alt=''
className='w-[50%] absolute top-60 right-20'
/>
<img
src={Elipsce2}
alt=''
className='w-[50%] absolute top-30 left-40 bottom-0 z-50'
/> */
}

export default HeroSection;

{
  /* <div className='relative bg-primary w-1/2 flex flex-col items-center justify-center'>
<div className=''>
  <img src={Frame} alt='' className='absolute bottom-0 w-1/2' />
  <img src={Image} alt='' className='absolute bottom-0 w-1/2' />
</div>
<div className='absolute'>
  <img src={Elipsce1} alt='' className='w-1/2' />
  <img src={Elipsce2} alt='' className='w-1/2' />
</div>
</div> */
}
