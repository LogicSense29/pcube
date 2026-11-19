import { motion, useInView } from "motion/react";
import { useRef } from "react";

const Services = ({ title }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className='group flex items-center gap-4 py-4 border-b border-slate-100 hover:border-primary transition-colors cursor-default'>
      <div className="w-2 h-2 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" />
      <span className='text-lg font-bold text-slate-700 group-hover:text-primary transition-colors'>
        {title}
      </span>
    </motion.div>
  );
};

export default Services;
