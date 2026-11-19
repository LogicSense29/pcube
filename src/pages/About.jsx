import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "motion/react";
import Services from "../components/Services";
import LetBuild from "../components/LetBuild2";
import PastProject from "../components/PastProject";


  const services = [
    "Brand Strategy",
    "Web Development",
    "Web Design",
    "User Design",
    "User Experience",
    "Mobile Apps",
    "E-Commerce Solutions",
    "SEO Optimization",
    "Brand Identity",
    "Visual Identity",
    "Exhibition Graphics",
    "Signage & Wayfinding",
    "Social Media Strategy",
    "Campaign Strategy",
    "Naming & Verbal Identity",
    // "Editorial & Publications",
  ];
export default function About() {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    async function animate() {
      await controls.start({
        x: "-50%",
        transition: { duration: 25, ease: "linear", repeat: Infinity },
      });
    }
    animate();
  }, [controls]);

  return (
    <div className='bg-main-bg pt-24 overflow-hidden'>
      {/* Mega Marquee */}
      <div className='relative py-20 border-b border-slate-100'>
        <motion.div
          className='flex whitespace-nowrap'
          animate={controls}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ width: "fit-content" }}>
          <h2 className='text-[120px] md:text-[200px] lg:text-[300px] font-black uppercase tracking-tighter px-10'>
            About <span className="text-gradient">PCUBE</span>
          </h2>
          <h2 className='text-[120px] md:text-[200px] lg:text-[300px] font-black uppercase tracking-tighter px-10 text-transparent border-outline opacity-20' style={{ WebkitTextStroke: "2px #6902FF" }}>
            About PCUBE
          </h2>
          <h2 className='text-[120px] md:text-[200px] lg:text-[300px] font-black uppercase tracking-tighter px-10'>
            About <span className="text-gradient">PCUBE</span>
          </h2>
          <h2 className='text-[120px] md:text-[200px] lg:text-[300px] font-black uppercase tracking-tighter px-10 text-transparent border-outline opacity-20' style={{ WebkitTextStroke: "2px #6902FF" }}>
            About PCUBE
          </h2>
        </motion.div>
      </div>

      {/* The Brief - Brand Story */}
      <div className='max-w-7xl mx-auto px-6 md:px-20 lg:px-32 py-32'>
        <div className='grid lg:grid-cols-2 gap-20 items-center'>
          <div className='relative'>
            <div className="absolute -inset-4 bg-primary/5 rounded-[40px] blur-2xl" />
            <img
              src='https://img.freepik.com/free-photo/front-view-latin-friends-hanging-out_23-2151139477.jpg'
              className='relative object-cover rounded-[32px] w-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-700'
            />
          </div>

          <div className='space-y-8'>
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                Brand Story
            </div>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                Honest, Personal & <span className="text-gradient">Aesthetic-Driven</span>.
            </h3>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed text-justify">
                <p>
                  <b>PCUBE</b> was created from a simple truth: design should be beautiful — and it should work. No excuses. No complications. No empty storytelling.
                </p>
                <p>
                  As a designer obsessed with aesthetics, clarity, and functionality, I (Praise Philips) built PCUBE around the things I value most: honesty, intentionality, and results. I don’t believe in designing for applause; I design for impact. Every visual, every layout, every interaction must feel good, look good, and work flawlessly in the real world.
                </p>
            </div>
          </div>
        </div>
      </div>

      {/* Power Precision Purpose */}
      <div className='bg-slate-50 py-32'>
        <div className='max-w-7xl mx-auto px-6 md:px-20 lg:px-32'>
          <div className="text-center mb-20">
            <h2 className='text-4xl md:text-6xl font-black mb-6'>
                The <span className="text-gradient">P3</span> Foundation
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">Great design is built on three pillars: Power, Precision, and Purpose.</p>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
            {[
              { title: "Power", desc: "The strength of clean, bold, confident visuals that instantly communicate." },
              { title: "Precision", desc: "The attention to detail that makes every element align, balance, and flow perfectly." },
              { title: "Purpose", desc: "The reason behind every design decision — the logic that makes the design work." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
                <div className="text-4xl font-black text-primary/10 group-hover:text-primary/20 transition-colors mb-6">0{idx + 1}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Brand Values */}
      <div className='py-32'>
        <div className='max-w-7xl mx-auto px-6 md:px-20 lg:px-32'>
          <div className="mb-20">
            <h2 className='text-4xl md:text-6xl font-black mb-6'>
                PCUBE <span className="text-gradient">Values</span>
            </h2>
            <p className="text-slate-500 text-lg">Our commitment to excellence and integrity.</p>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {[
              { title: "Honesty & Transparency", desc: "We communicate openly and work with integrity. No fluff, no hidden agendas." },
              { title: "Aesthetic Excellence", desc: "Beauty is not optional; it’s a standard. Every piece is crafted to delight." },
              { title: "Purpose-Driven", desc: "Every design decision has meaning. We create solutions that solve problems." },
              { title: "Precision", desc: "We obsess over every element — layout, spacing, typography, color." },
              { title: "Functionality", desc: "Design must work. Practical, effective, and impactful media assets." },
              { title: "Creativity with Impact", desc: "Bold ideas brought to life while keeping them practical and purposeful." },
              { title: "Client-Centric", desc: "We listen, understand, and adapt our work to truly meet your needs." },
              { title: "Reliability", desc: "Trust PCUBE to deliver consistently high-quality work, on time." }
            ].map((value, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-100 shadow-none hover:shadow-lg transition-all duration-500">
                <h4 className="text-lg font-bold mb-3">{value.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className='bg-white py-32'>
        <div className='max-w-7xl mx-auto px-6 md:px-20 lg:px-32'>
          <div className="mb-20">
            <h2 className='text-4xl md:text-6xl font-black mb-6'>
                Our <span className="text-gradient">Capabilities</span>
            </h2>
            <p className="text-slate-500 text-lg">We provide a comprehensive suite of creative services.</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6'>
            {services.map((service, idx) => (
              <Services key={idx} title={service} />
            ))}
          </div>
        </div>
      </div>

      {/* Past Projects */}
      <div className='max-w-7xl mx-auto px-6 md:px-20 lg:px-32 py-32'>
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className='text-4xl md:text-6xl font-black'>
                Past <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-slate-500 max-w-sm text-right">A history of excellence and impactful brand transformations.</p>
        </div>
        <PastProject />
      </div>

      {/* Let's Build */}
      <div className='bg-black py-40'>
        <LetBuild />
      </div>
    </div>
  );
}
