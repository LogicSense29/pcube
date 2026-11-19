import React, {useRef} from 'react'
import { motion, useInView } from 'motion/react'

function LetBuild() {
const ref = useRef(null)
const inView = useInView(ref, {once:false, margin: "-100px"})



  return (
    <div ref={ref} className='relative bg-red flex items-center justify-center overflow-hidden h-screen'>
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className='absolute inset-0 flex items-center justify-center rounded-full bg-black'/>
        <motion.h2
          //   initial={{ scale: 0 }}
          //   animate={{ scale: 1 }}
          //   transition={{ duration: 1.5, ease: "easeInOut" }}
          className='absolute text-[150px] text-white'>
          Let's Build
        </motion.h2>
        <motion.h2
          initial={{ y: -100 }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className='absolute bottom-0 text-[200px] text-white'>
          Your Brand
        </motion.h2>
    
    </div>
  );
}

export default LetBuild
