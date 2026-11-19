import { motion } from "motion/react";
import MainButton from "./MainButton";

function ExtraSection() {
  return (
    <section className='py-24 bg-main-bg px-6 md:px-20 lg:px-32'>
      <div className='relative glass overflow-hidden rounded-[48px] p-12 md:p-20 flex flex-col items-center text-center'>
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[100px] rounded-full -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-2/10 blur-[100px] rounded-full -ml-48 -mb-48" />
        
        <div className="relative z-10 max-w-3xl">
            <h2 className='text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-tight'>
              Our business model <br /> is centered <span className="text-gradient">Around You</span>
            </h2>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-12">
                We believe in personalized strategies that prioritize your unique needs, ensuring your brand stands out and dominates its niche.
            </p>
            <MainButton text="Learn about our model" />
        </div>

        <motion.img 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            src='/pie.png' 
            className='absolute -bottom-10 -left-10 w-48 md:w-96 opacity-20 hidden lg:block' 
        />
      </div>
    </section>
  );
}


export default ExtraSection
// pt-10
// h-screenh
// h-3/4