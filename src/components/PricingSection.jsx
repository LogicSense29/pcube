import React from 'react'
import { useState } from 'react';
import checkmarkWhite from "/checkmark-badge-white.png";
import checkmarkPrimary from "/checkmark-badge-primary.png";
import CircleArrow from "/circle-right-primary.png";

const pricing = [
  {
    plan: "Basic Plan",
    amount: "₦200,000/month",
    benefits:{
      icon : checkmarkWhite,
      benefit: [
      "Logo design (3 concepts)",
      "Color palette (3 options)",
      "Typography system",
      "Basic brand guidelines",
    ]},
  },

  {
    plan: "Proffesional Plan",
    amount: "₦300,000/month",
    benefits: {
      icon: checkmarkPrimary,
      benefit: [
      "Logo design (5 concepts)",
      "Color palette (5 options)",
      "Typography system",
      "Comprehensive brand guidelines",
      "Social media assets",
      "5 Social media flyers",
      "1 motion video intro",
    ]},
  },

  {
    plan: "Deluxe Plan",
    amount: "₦500,000/month",
    benefits: {
      icon: checkmarkWhite,
      benefit : [
      'Custom brand strategy',
      "Logo design (unlimited concept)",
      "Color palette (unlimited options)",
      "Typography system",
      "Comprehensive brand guidelines",
      "Social media assets",
      "10 Social media flyers",
      "1 motion video intro",
      '1 website ( wordpress builder )'
    ]},
  },
];

function PricingSection() {

    const [indexs, setIndex] = useState(1);

    function handlePick(i){
            setIndex(i)
    }

  return (
    <section className='h-auto flex flex-col bg-main-bg items-center md:px-20  space-y-8'>
      <div className='text-center space-y-5'>
        <h2 className='text-3xl md:text-4xl font-semibold'>
          Our pricing is beneath our value,
          <br className='hidden md:block' /> so consider this our offer
          pocketfriendly.
        </h2>
        <div className='text-xs font-normal bg-white w-fit shadow-sm space-x-4 mx-auto rounded-full p-1'>
          {["Monttly", "Yearly coming soon"].map((item, index) => (
            <button
              key={index}
              className={`px-4 py-3 rounded-full ${
                index == indexs ? "bg-primary text-white" : "bg-white"
              } `}
              onClick={() => handlePick(index)}>
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className='h-full flex flex-col md:flex-row gap-5 md:gap-20 justify-between'>
        {pricing.map((item, index) => (
          <div
            key={index}
            className={`clipped md:w-2/5 pb-20 px-6 py-8 space-y-10 rounded-xl aspect-[343/494] bg-no-repeat bg-contain ${
              index == 1 ? `bg-[url('/vect-1.svg')]` : `bg-[url('/vect-2.svg')]`
            }`}>
            <div className='space-y-3 text-2xl font-medium'>
              <h3 className={`${index == 1 ? "text-white" : "text-black"}`}>
                {item.plan}
              </h3>
              <h3 className={`text-primary`}>{item.amount}</h3>
            </div>

            <div className='space-y-2'>
              {item.benefits.benefit.map((list, i) => (
                <div key={i} className='flex gap-2 items-center'>
                  <img
                    src={index == 1 ? checkmarkWhite : checkmarkPrimary}
                    className='w-4 h-4'
                  />
                  <p
                    className={`${
                      index == 1 ? "text-white/81" : "text-black/80"
                    }`}>
                    {list}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className='w-1/4 mx-auto'>
        <button className='flex w-full outline outline-primary text-primary text-sm font-normal hover:bg-gradient-to-primary-2 transition-all duration-500 px-8 py-4 rounded-full items-center justify-center gap-3'>
          View all of our package
          <img src={CircleArrow} className='h-5 w-5' />
        </button>
      </div>
    </section>
  );
}

export default PricingSection

// className={`clipped w-2/5 pb-20 px-6 py-8 space-y-10 outline shadow-xl rounded-xl ${
//   index == 1
//     ? `bg-[#202222] outline-3 outline-primary bg-[url('/vect-1.svg')]`
//     : "bg-white outline-gray-300"
// }`}
