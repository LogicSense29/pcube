import React from 'react'
import CircleArrow from '/circle-right.png'
import Idea from '/idea-01.png'
import pbcube from '/pcube-executives-des.png'

function AboutSection() {
  return (
    <section className='grid md:grid-cols-2 justify-center px-8 md:px-30 md:py-10 bg-main-bg gap-10'>
      <div className=' flex flex-col justify-between gap-5 md:gap-0'>
        <div className='space-y-6'>
          <button className='border border-primary bg-primary/5 text-primary py-4 px-10 rounded-full'>
            About us
          </button>

          <h2 className='text-4xl font-semibold'>
            Empowering your business <br /> through our solutions
          </h2>
          <p className=''>
            Our passion lies in crafting stunning, impactful, and purpose-driven
            designs that don’t just look good but deliver real results.
          </p>
        </div>

        <div className='space-y-5 md:space-y-15'>
          <div className='flex gap-3'>
            <img src={Idea} className='h-10 w-10' />
            <div className='flex flex-col'>
              <h3 className='text-2xl font-semibold'>Mission:</h3>
              <p className=''>
                Dedicated to designing solutions fit for kings. We aim to create
                timeless, innovative, and impactful experiences that take brands
                to new realms of success, solidifying their position as leaders
                in their industry.
              </p>
            </div>
          </div>

          <div className='flex gap-3'>
            <img src={Idea} className='h-10 w-10' />
            <div className='flex flex-col'>
              <h3 className='text-2xl font-semibold'>Vision:</h3>
              <p className=''>
                To be the crown jewel of design and media solutions, renowned
                for transforming brands into majestic empires. We envision a
                future where our work inspires awe, sparks creativity, and fuels
                the success of our clients, solidifying our position as the
                go-to partner for visionary brands
              </p>
            </div>
          </div>
        </div>

        <div className='pl-12'>
          <button className='flex bg-gradient-to-r from-primary-2 to-primary text-white text-sm font-normal hover:to-primary hover:to-primary-2 transition-all duration-500 px-8 py-4 rounded-full items-center justify-center gap-3'>
            Our Portfolio says it all
            <img src={CircleArrow} className='h-5 w-5' />
          </button>
        </div>
      </div>
      <div className={`flex justify-end relative`}>
        <img src={pbcube} className='md:w-[70%] object-cover' />
      </div>
    </section>
  );
}

export default AboutSection

