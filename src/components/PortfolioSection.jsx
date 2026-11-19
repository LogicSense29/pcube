import React from 'react'
import CircleArrow from "/circle-right-primary.png";
import Elipsce1 from "/Ellipse-1.png"
import MoreButton from './MoreButton';
const portfolios = [
  {
    title: "Brand Identity Design",
    category: "Identity",
    description:
      "Crafting unique visual languages that resonate with your audience and define your market presence.",
  },
  {
    title: "Web Experience",
    category: "Development",
    description:
      "Building responsive, high-performance websites that blend stunning design with functional excellence.",
  },
  {
    title: "App Interface",
    category: "Mobile",
    description:
      "Connecting users through intuitive mobile interfaces designed for seamless interaction and engagement.",
  },
  {
    title: "Visual Content",
    category: "Marketing",
    description:
      "Creating impactful visual assets that tell your brand's story across all digital platforms.",
  },
];

function PortfolioSection() {
  return (
    <section className='py-24 bg-main-bg px-6 md:px-20 lg:px-32'>
      <div className='flex flex-col md:flex-row justify-between items-end mb-16 gap-8'>
        <div className='max-w-2xl'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            Crafting Digital <br /> <span className="text-gradient">Excellence</span>
          </h2>
          <p className='text-slate-600 text-lg leading-relaxed'>
            We deliver powerful solutions, tailored for excellence every time. At Pcube, we don’t just build your ideas, we elevate them with strategy, creativity, and technology.
          </p>
        </div>
        <MoreButton text={"View Projects"} />
      </div>

      <div className='grid md:grid-cols-2 gap-8'>
        {portfolios.map((item, index) => (
          <div 
            key={index}
            className='group bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between h-full relative overflow-hidden'
          >
            <div className="absolute top-0 right-0 p-8 text-6xl font-black text-slate-50 group-hover:text-primary/5 transition-colors">
              0{index + 1}
            </div>

            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                {item.category}
              </span>
              <h3 className='text-3xl font-bold mb-4 group-hover:text-primary transition-colors'>
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-10 max-w-sm">
                {item.description}
              </p>
            </div>

            <button className='flex items-center gap-3 text-primary font-bold group/btn'>
              Learn More
              <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:text-white transition-all">
                <img src={CircleArrow} className='h-5 w-5 brightness-0 group-hover/btn:brightness-100' />
              </div>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PortfolioSection;

// md: py - 10;
