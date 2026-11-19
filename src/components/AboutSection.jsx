import React from 'react'
import CircleArrow from '/circle-right.png'
import Idea from '/idea-01.png'
import pbcube from '/pcube-executives-des.png'
import MainButton from './MainButton'

function AboutSection() {
  return (
    <section className='min-w-7xl mx-auto bg-main-bg px-6 md:px-20 lg:px-32 pt-18 lg:pt-24'>
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className='flex flex-col space-y-12'>
          <div className='space-y-6'>
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                Our Essence
            </div>
            <h2 className='text-4xl md:text-6xl font-black tracking-tight leading-tight'>
              Empowering your <span className="text-gradient">Business</span> through our solutions
            </h2>
            <p className='text-slate-600 text-lg leading-relaxed max-w-xl'>
              Our passion lies in crafting stunning, impactful, and purpose-driven
              designs that don’t just look good but deliver real results.
            </p>
          </div>

          <div className='grid gap-10'>
            <div className='group flex gap-6 p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500'>
              <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                <img src={Idea} className='h-6 w-6 brightness-0 group-hover:brightness-100 invert-0 group-hover:invert transition-all' />
              </div>
              <div className='flex flex-col'>
                <h3 className='text-xl font-bold mb-2'>Our Mission</h3>
                <p className='text-slate-500 text-sm leading-relaxed'>
                  To ensure every client receives genuine value through our
                  intentional design and media solutions, delivering work that is
                  purposeful, beautiful, and effective.
                </p>
              </div>
            </div>

            <div className='group flex gap-6 p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500'>
              <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                <img src={Idea} className='h-6 w-6 brightness-0 group-hover:brightness-100 invert-0 group-hover:invert transition-all' />
              </div>
              <div className='flex flex-col'>
                <h3 className='text-xl font-bold mb-2'>Our Vision</h3>
                <p className='text-slate-500 text-sm leading-relaxed'>
                  To redefine the global design and media landscape by elevating
                  storytelling, inspiring clarity, and creating solutions that
                  address real problems within the creative space.
                </p>
              </div>
            </div>

          </div>

          <div className='pt-6'>
            <MainButton text="Explore Our Portfolio" />
          </div>
        </div>

        <div className='relative'>
          <div className="absolute bg-primary/5 rounded-full blur-3xl opacity-50" />
          <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
            <img src={pbcube} className='w-full object-cover transition-transform duration-1000 hover:scale-105' />
          </div>
          {/* Decorative tag */}
          {/* <div className="absolute -bottom-6 -left-6 glass px-8 py-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce">
             <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
             <span className="text-sm font-bold text-slate-800 uppercase tracking-widest">Active Studio</span>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default AboutSection

