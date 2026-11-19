import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function LetBuild() {
  const ref = useRef(null);

  // Track scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Circle growth
  const scale = useTransform(scrollYProgress, [0, 1], [0, 10]);

  // Let's build text
//   const letsOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

  // Your brand text
  const brandOpacity = useTransform(scrollYProgress, [0.6, 1], [0, 1]);
  const brandY = useTransform(scrollYProgress, [0.6, 1], [60, 0]);

  return (
    <section ref={ref} className='relative h-[200vh] bg-main-bg'>
      {/* Sticky container (pinned during scroll) */}
      <div className='sticky top-0 flex items-center justify-center h-screen overflow-hidden'>
        {/* Background Circle */}
        <motion.div
          style={{ scale }}
          className='absolute w-[200px] h-[200px] flex items-center justify-center bg-black rounded-full'
        />

        {/* Let's build */}
        <motion.h1
          //   style={{ opacity: letsOpacity }}
          className='absolute text-[60px] md:text-[80px] lg:text-[100px] font-bold text-main-bg text-center'>
          Let’s build
        </motion.h1>

        {/* Your brand */}
        <motion.h2
          style={{ opacity: brandOpacity, y: brandY }}
          className='absolute bottom-10 lg:bottom-0 text-[100px] md:text-[120px] lg:text-[200px] font-bold text-main-bg text-center leading-none md:leading-normal'>
          Your <span className='text-primary'>Brand</span>
        </motion.h2>
      </div>
    </section>
  );
}
