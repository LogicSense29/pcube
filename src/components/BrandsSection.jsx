import React from 'react'
import MoreButton from './MoreButton';
const brands = [
  {
    name: "nexasam",
    path: "/nexasam-logo1.png",
  },
  {
    name: "edify",
    path: "/edify.png",
  },
  {
    name: "Odara",
    path: "/Odara.png",
  },
  {
    name: "alayoor",
    path: "/alayoor.png",
  },
  {
    name: "Tov",
    path: "/Tov.png",
  },
];
function BrandsSection() {
  return (
    <section className='bg-[#0A0118] py-12 overflow-hidden border-y border-white/5'>
      <div className='max-w-7xl mx-auto px-6 mb-4'>
        <h2 className='text-[10px] font-bold tracking-[0.4em] uppercase text-primary/60 text-center lg:text-left'>
          Selected Partners & Clients
        </h2>
      </div>
      
      <div className='relative flex overflow-x-hidden group no-scrollbar py-6'>
        <div className='flex animate-marquee whitespace-nowrap w-max gap-12 px-12'>
          {[...brands, ...brands, ...brands, ...brands, ...brands].map((item, index) => (
            <div
              key={index}
              className='flex-shrink-0 flex items-center justify-center transition-all duration-500 hover:scale-110 min-w-[120px] h-12'>
              <img
                src={item.path}
                alt={item.name}
                className='h-6 md:h-8 w-auto object-contain block brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandsSection;