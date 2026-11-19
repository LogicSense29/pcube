import React from "react";
import { motion } from "motion/react";
import MainButton from "../components/MainButton";

export default function Onboarding() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Research",
      desc: "Understand your brand, goals, audience, and challenges. Gather references, inspirations, and assets."
    },
    {
      number: "02",
      title: "Concept Development",
      desc: "Create initial design concepts. Present moodboards, style directions, and drafts."
    },
    {
      number: "03",
      title: "Design Execution",
      desc: "Refine approved concepts. Apply precision and aesthetics to final designs."
    },
    {
      number: "04",
      title: "Review & Feedback",
      desc: "Collect structured feedback. Make revisions until the design meets your expectations."
    },
    {
      number: "05",
      title: "Final Delivery & Handover",
      desc: "Deliver all final assets in organized files. Provide usage guide and documentation."
    }
  ];

  const responsibilities = [
    "Provide brand information, assets, and references promptly",
    "Review and approve deliverables at each milestone",
    "Give clear and structured feedback"
  ];

  return (
    <div className='bg-main-bg pt-24 min-h-screen'>
      {/* Header Section */}
      <div className='bg-black py-24 px-6 md:px-20 lg:px-32 text-center text-white relative overflow-hidden'>
        <div className="absolute inset-0 premium-gradient opacity-20" />
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           className="relative z-10 max-w-4xl mx-auto"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            Welcome to PCUBE
          </div>
          <h1 className='text-4xl md:text-7xl font-black mb-8 leading-tight'>
            Client <span className="text-gradient">Onboarding</span>
          </h1>
          <p className='text-slate-400 text-xl leading-relaxed'>
            We're excited to start this journey with you. This process ensures our collaboration is smooth, intentional, and focused on delivering results.
          </p>
        </motion.div>
      </div>

      <div className='max-w-7xl mx-auto px-6 md:px-20 lg:px-32 py-32'>
        <div className="grid lg:grid-cols-3 gap-20">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-24">
            {/* The Essence */}
            <section>
              <h2 className="text-3xl font-black mb-10 flex items-center gap-4">
                <span className="w-12 h-1 bg-primary rounded-full"></span>
                The PCUBE Essence
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: "Power", desc: "Bold and confident design that communicates effectively." },
                  { title: "Precision", desc: "Every detail is crafted meticulously for perfection." },
                  { title: "Purpose", desc: "Every design decision is intentional and solves a real problem." }
                ].map((item, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
                    <h4 className="font-bold text-primary mb-2 uppercase text-xs tracking-widest">{item.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Our Process */}
            <section>
              <h2 className="text-3xl font-black mb-10 flex items-center gap-4">
                <span className="w-12 h-1 bg-primary rounded-full"></span>
                Our 5-Step Approach
              </h2>
              <div className="space-y-4">
                {steps.map((step, idx) => (
                  <div key={idx} className="group flex gap-8 p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500">
                    <div className="text-4xl font-black text-slate-100 group-hover:text-primary/10 transition-colors">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-slate-500 leading-relaxed text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-12">
            <div className="p-10 rounded-[40px] bg-black text-white sticky top-32">
              <h3 className="text-2xl font-black mb-8">Next Steps</h3>
              <ul className="space-y-6 mb-10">
                {[
                  "Fill out the Brand Questionnaire",
                  "Submit existing assets or references",
                  "Review and sign Project Agreement",
                  "Schedule the Kickoff Meeting"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start text-sm text-slate-300">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary text-[10px] font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <MainButton text="Get Started" className="w-full" />
            </div>

            <div className="p-10 rounded-[40px] bg-primary/5 border border-primary/10">
              <h3 className="text-xl font-bold mb-6">Your Role</h3>
              <ul className="space-y-4">
                {responsibilities.map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="bg-slate-50 py-20 px-6 text-center">
        <p className="text-slate-500 font-medium">Ready to deliver beautiful, purposeful, and functional design solutions.</p>
      </div>
    </div>
  );
}
