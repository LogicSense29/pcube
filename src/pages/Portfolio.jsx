import React, { useState } from 'react'
import PortfolioCard from '../components/PortfolioCard';
import MainButton from '../components/MainButton';
import { motion, AnimatePresence } from 'motion/react';

const projects = [
  {
    title: "Eco-Friendly Branding",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563cc4c?q=80&w=2070&auto=format&fit=crop",
    description: "Developing a sustainable identity for a modern eco-lifestyle brand."
  },
  {
    title: "Urban Tech Web",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1964&auto=format&fit=crop",
    description: "A high-performance web experience for an urban technology startup."
  },
  {
    title: "Minimalist App",
    category: "App Design",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop",
    description: "Intuitive mobile interface focused on simplicity and user-centric flows."
  },
  {
    title: "Creative Campaign",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2062&auto=format&fit=crop",
    description: "Impactful marketing assets that drive engagement and brand loyalty."
  },
  {
      title: "Luxury Watch Identity",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1999&auto=format&fit=crop",
      description: "Defining elegance through a premium visual language and packaging."
  },
  {
      title: "Fintech Interface",
      category: "App Design",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
      description: "Secure and modern interface for a next-gen financial platform."
  }
];

const categories = ["All", "Branding", "Web Design", "App Design", "Marketing"];

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className='bg-main-bg pt-24 min-h-screen'>
      {/* Cinematic Header */}
      <div className='max-w-7xl mx-auto px-6 md:px-20 lg:px-32 py-20 text-center'>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6"
        >
            Our Work
        </motion.div>
        <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className='text-5xl md:text-8xl font-black tracking-tighter mb-8'
        >
          Selected <span className="text-gradient">Projects</span>
        </motion.h1>
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className='text-slate-500 text-lg max-w-2xl mx-auto'
        >
          A curated collection of our best work, where strategic thinking meets creative excellence.
        </motion.p>
      </div>

      {/* Category Filter */}
      <div className='flex flex-wrap justify-center gap-4 mb-20 px-6'>
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setActiveCategory(cat)}
            className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
              activeCategory === cat 
                ? 'bg-primary text-white shadow-lg' 
                : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className='max-w-7xl mx-auto px-6 md:px-20 lg:px-32 pb-40'>
        <motion.div 
            layout
            className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, index) => (
                <motion.div
                    key={project.title}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className='group'
                >
                    <div className="relative overflow-hidden rounded-[32px] aspect-square mb-6">
                        <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="space-y-2">
                        <span className="text-primary text-xs font-bold uppercase tracking-widest">{project.category}</span>
                        <h3 className="text-2xl font-black group-hover:text-primary transition-colors">{project.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">{project.description}</p>
                    </div>
                </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Call to Action */}
      <div className='bg-white py-32 border-t border-slate-50'>
        <div className='max-w-7xl mx-auto px-6 text-center'>
            <h2 className='text-4xl font-black mb-8'>Ready to be our next <span className="text-gradient">Success Story?</span></h2>
            <MainButton text="Start your journey" />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
