


import { Link } from 'react-router-dom';
import Image from '/self.png'
import Elipsce1 from "/Ellipse-1.png";
import Elipsce2 from "/Ellipse-2.png";
import Frame from "/Frame-3.png";
import {motion} from 'motion/react'
import MainButton from './MainButton';

function HeroSection() {
  return (
    <section className='h-auto bg-main-bg flex-col flex md:pt-10 lg:flex-row gap-5 md:gap-10 px-5 md:px-30 items-center justify-between relative overflow-hidden'>
      {/* Left Side */}
      <div className='z-40 lg:mb-0 mb-[20] pt-20 lg:mt-0 space-y-4 flex-1 text-center md:text-left'>
        <motion.span
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.3,
            duration: 1.5,
          }}
          className='text-base md:text-2xl font-bold'>
          Over 1000+ <br />
          <span className='text-base md:text-[24px] font-bold text-header-gray'>
            jobs done
          </span>
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.6,
            duration: 1.5,
          }}
          className='text-4xl lg:text-6xl font-bold z-10 tracking-tight'>
          where vision finds <br />
          forms and ideas <br />
          wear identity.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.9,
            duration: 1.5,
          }}
          className='md:text-[24px] max-w-2xl'>
          we help you build a brand that connects communicates, and stand out
        </motion.p>
        <div className='space-x-6 md:max-w-2/3'>
          <MainButton text={"Contact us"} />
          <a href='#' className='underline lg:text-2xl text-gray-800'>
            Instagram
          </a>
          {/* <Link to='/' className='underline'></Link> */}
        </div>
      </div>

      {/* Right Side */}
      <div className='relative min-h-[500px] flex-1 flex flex-col md:flex-row justify-center items-center'>
        {/* <div className='relative'> */}
        {/* <div className=''> */}
        <img
          src={Frame}
          alt='Frame'
          className='absolute bottom-0 w-[80%] md:w-[440px] lg:w-[400px] z-30'
        />
        <img
          src={Image}
          alt='Self'
          className='absolute bottom-0 w-[70%] md:w-[400px] lg:w-[360px] z-50'
        />
        <img
          src={Elipsce1}
          alt='Ellipse 1'
          className='w-[50%] absolute top-[60%] right-[65%] z-10'
        />
        <img
          src={Elipsce2}
          alt='Ellipse 2'
          className='w-[50%] absolute top-[80%] left-[55%] z-100'
        />
        {/* </div> */}
      </div>
      {/* </div> */}
    </section>
  );
}

{/* <img
src={Elipsce1}
alt=''
className='w-[50%] absolute top-60 right-20'
/>
<img
src={Elipsce2}
alt=''
className='w-[50%] absolute top-30 left-40 bottom-0 z-50'
/> */}

export default HeroSection

{/* <div className='relative bg-primary w-1/2 flex flex-col items-center justify-center'>
<div className=''>
  <img src={Frame} alt='' className='absolute bottom-0 w-1/2' />
  <img src={Image} alt='' className='absolute bottom-0 w-1/2' />
</div>
<div className='absolute'>
  <img src={Elipsce1} alt='' className='w-1/2' />
  <img src={Elipsce2} alt='' className='w-1/2' />
</div>
</div> */}