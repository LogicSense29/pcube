import { ArrowBigRight, ArrowRight, ArrowUpRight } from 'lucide-react';
import React from 'react'

const projects = [
  {
    company: "AfriGo",
    project: "Design AfriGo Festival",
    year: "2023",
  },

  {
    company: "AfriGo",
    project: "Design AfriGo Festival",
    year: "2023",
  },
  {
    company: "AfriGo",
    project: "Design AfriGo Festival",
    year: "2023",
  },

  {
    company: "AfriGo",
    project: "Design AfriGo Festival",
    year: "2023",
  },

  {
    company: "AfriGo",
    project: "Design AfriGo Festival",
    year: "2023",
  },

  {
    company: "AfriGo",
    project: "Design AfriGo Festival",
    year: "2023",
  },

  {
    company: "AfriGo",
    project: "Design AfriGo Festival",
    year: "2023",
  },
];

function PastProject() {
  return (
    <div className="space-y-4">
      {projects.map((items, index) => (
        <div
          key={index}
          className='group flex flex-col md:flex-row justify-between items-center py-6 px-4 border-b border-slate-100 hover:bg-slate-50 transition-all rounded-xl cursor-default'>
          <div className="flex items-center gap-4 w-full md:w-1/3">
            <span className="text-slate-300 font-bold">0{index + 1}</span>
            <span className='text-lg font-black text-slate-800 flex items-center gap-2 group-hover:text-primary transition-colors'>
                {items.company}
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </span>
          </div>
          
          <span className='w-full md:w-1/3 text-slate-500 font-medium text-sm md:text-base md:text-center mt-2 md:mt-0'>
            {items.project}
          </span>
          
          <span className='w-full md:w-1/3 text-slate-400 font-bold text-sm md:text-right mt-1 md:mt-0 uppercase tracking-widest'>
            {items.year}
          </span>
        </div>
      ))}
    </div>
  );
}

export default PastProject
