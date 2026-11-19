import React from 'react'
import MainButton from './MainButton';

function PortfolioCard() {
    const portfolioCard = [
      {
        name: "NEXASAM",
        client: "NEXASAM",
        industry: "Web Development",
        services: "Custom Design, Full-Stack Development, E-commerce",
        image: "/projectimage.png",
      }
    ];

  return (
    <div className="space-y-12">
      {portfolioCard.map((item, index) => (
        <div
          className='glass group rounded-[40px] overflow-hidden flex flex-col lg:flex-row shadow-2xl hover:shadow-primary/10 transition-all duration-500'
          key={index}>
          <div className='lg:w-1/3 p-10 md:p-16 space-y-8 flex flex-col justify-center'>
            <div className="space-y-2">
                <span className="text-primary text-xs font-black uppercase tracking-widest">Selected Project</span>
                <h2 className='text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-500'>{item.name}</h2>
            </div>
            
            <div className='grid grid-cols-2 gap-8'>
                <div className="space-y-1">
                    <p className='text-xs font-bold uppercase tracking-widest text-slate-400'>Client</p>
                    <p className='text-slate-800 font-bold'>{item.client}</p>
                </div>
                <div className="space-y-1">
                    <p className='text-xs font-bold uppercase tracking-widest text-slate-400'>Industry</p>
                    <p className='text-slate-800 font-bold'>{item.industry}</p>
                </div>
            </div>
            
            <div className="space-y-1">
                <p className='text-xs font-bold uppercase tracking-widest text-slate-400'>Project Scope</p>
                <p className='text-slate-600 leading-relaxed font-medium'>{item.services}</p>
            </div>

            <div className="pt-4">
              <MainButton text="Case Study" small />
            </div>
          </div>

          <div className='lg:w-2/3 bg-slate-50 overflow-hidden relative'>
             <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <img src={item.image} alt={item.name} className='w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105'/>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PortfolioCard;
