import React from 'react'
import MainButton from './MainButton';

function PortfolioCard() {

    const portfolioCard = [
      {
        name: "NEXASAM",
        client: "NEXASAM",
        industry: "Web Development brand",
        services:
          "Custom Website Design, Frontend Development, Backend Development Full-Stack Development, E-commerce Development, Web Application Development",
        image: "",
      },

      {
        name: "NEXASAM",
        client: "NEXASAM",
        industry: "Web Development brand",
        services:
          "Custom Website Design, Frontend Development, Backend Development Full-Stack Development, E-commerce Development, Web Application Development",
        image: "",
      },
      {
        name: "NEXASAM",
        client: "NEXASAM",
        industry: "Web Development brand",
        services:
          "Custom Website Design, Frontend Development, Backend Development Full-Stack Development, E-commerce Development, Web Application Development",
        image: "",
      },
      {
        name: "NEXASAM",
        client: "NEXASAM",
        industry: "Web Development brand",
        services:
          "Custom Website Design, Frontend Development, Backend Development Full-Stack Development, E-commerce Development, Web Application Development",
        image: "",
      },
    ];
  return (
    <div>
      {portfolioCard.map((items, index) => (
        <div
          className='flex flex-col md:flex-row border border-gray-300 p-10 rounded-xl mb-10'
          key={index}>
          <div className='w-full md:w-1/4 space-y-2'>
            <div>
              <h2 className='text-2xl text-semibold'>{items.name}</h2>
            </div>
            <div>
              <p className='text-gray-500'>Client</p>
              <p className='text-base'>{items.client}</p>
            </div>
            <div>
              <p className='text-gray-500'>Industry</p>
              <p className='text-base'>{items.industry}</p>
            </div>
            <div>
              <p className='text-gray-500'>Services</p>
              <p className='text-base'>{items.services}</p>
            </div>
            <div>
              <MainButton />
            </div>
          </div>

          <div className='w-full md:w-3/4'>
            <img src='' alt='' />
          </div>
        </div>
      ))}
    </div>
  );
}

export default PortfolioCard;
