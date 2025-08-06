import React from 'react'
import CircleArrow from "/circle-right-primary.png";
import Elipsce1 from "/Ellipse-1.png"
import MoreButton from './MoreButton';
const portfolios = [
  {
    title: "Brand identity designing",
    description:
      "To be the crown jewel of design and media solutions, renowned for transforming brands into majestic empires. We envision a future",
  },
  {
    title: "Brand identity designing",
    description:
      "To be the crown jewel of design and media solutions, renowned for transforming brands into majestic empires. We envision a future",
  },
  {
    title: "Brand identity designing",
    description:
      "To be the crown jewel of design and media solutions, renowned for transforming brands into majestic empires. We envision a future",
  },
  {
    title: "Brand identity designing",
    description:
      "To be the crown jewel of design and media solutions, renowned for transforming brands into majestic empires. We envision a future",
  },
  
];
function PorfolioSection() {
  return (
    <section className='flex flex-col items-center bg-main-bg pt-10  px-8 md:px-30 space-y-8'>
      <div className='text-center'>
        <h2 className='text-3xl md:text-4xl font-semibold'>
          We deliver powerful solutions, tailored
          <br className='hidden md:block' /> for excellence every time.
        </h2>
        <p className='text-black/69'>
          at pcube, we don’t just build your ideas, we elevate it with a perfect
          blend of strategy, <br className='hidden md:block' />
          creativity and technology.
        </p>
      </div>
      <div className='grid md:grid-cols-2 justify-between gap-13'>
        {portfolios.map((item, index) => (
          <div className='border border-gray-300 shadow-sm p-8 rounded-2xl flex flex-col justify-between space-y-8'>
            <div className='flex space-x-4'>
              <div className='flex flex-col items-center space-y-4'>
                <img src={Elipsce1} className='w-40' />
                <p className='text-3xl font-semibold text-wrap text-black/19'>
                  {index + 1}
                </p>
              </div>

              <div className='flex flex-col space-y-3'>
                <h3 className='text-2xl font-semibold text-wrap w-50'>
                  {item.title}
                </h3>
                <p>{item.description}</p>
              </div>
            </div>

         
              <div className='flex'>
                <button className='flex outline outline-primary text-primary text-sm font-normal hover:bg-gradient-to-primary-2 transition-all duration-500 px-8 py-4 rounded-full items-center justify-between w-full gap-3'>
                  Learn more
                  <img src={CircleArrow} className='h-5 w-5' />
                </button>
              </div>
            </div>
        ))}
      </div>

      <MoreButton text={"View all>>>>>>>>>"} />
    </section>
  );
}

export default PorfolioSection;

// md: py - 10;
