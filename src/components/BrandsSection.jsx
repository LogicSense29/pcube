import React from 'react'
import MoreButton from './MoreButton';
const brands = [
  {
    name: "nexasam",
    path: "/nexasam-logo1.png",
  },
  {
    name: "edify.png",
    path: "/edify.svg",
  },
  {
    name: "Odara.png",
    path: "/odara.svg",
  },
  {
    name: "alayoor.png",
    path: "/alayoor.svg",
  },
  {
    name: "Tov.png",
    path: "/Tov.png",
  },
];
function BrandsSection() {
  return (
    <section className='bg-main-bg pt-20 pb-10 md:pl-30 space-y-8'>
      <h2 className='text-4xl font-semibold text-center'>We built:</h2>
      <div className='flex flex-row gap-1 '>
        {brands.map((items, index) => (
          <div
            key={index}
            className='flex items-center justify-center bg-white px-6 py-2 w-1/2 z-700'>
            <img
              src={items.path}
              alt={items.name}
              className={`object-cover`}
            />
          </div>
        ))}
      </div>
      <MoreButton />
    </section>
  );
}

export default BrandsSection;