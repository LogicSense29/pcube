import { motion } from "motion/react";
import MainButton from "./MainButton";
import FooterSocialButton from "./FooterSocialButton";
import Logo from '/pcube-logo.svg'
const navlinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Portfolio",
    path: "/portfolio",
  },
  {
    name: "Pricing",
    path: "/pricing",
  },
  {
    name: "Onboarding",
    path: "/onboarding",
  },
  {
    name: "Contact us",
    path: "/contact-us",
  },
];

const social = [
  {
    text: "Instagram",
    destination: "https://www.instagram.com/thepcubestudio",
  },
  {
    text: "Twitter",
    destination: "https://www.x.com/thepcubestudio",
  },
  {
    text: "LinkedIn",
    destination: "https://www.linkedin.com/company/thepcubestudio",
  },
];

function FooterSection() {
  return (
    <section className='relative flex flex-col pt-32'>
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl h-64 glass-dark rounded-[40px] z-10 flex items-center justify-between px-10 md:px-20 overflow-hidden group'>
        <div className="absolute inset-0 premium-gradient opacity-10 group-hover:opacity-20 transition-opacity" />
        <div className='relative z-20'>
          <h2 className='text-3xl md:text-5xl font-black text-white leading-tight mb-4'>
            Ready to bring <br /> those ideas to life?
          </h2>
          <MainButton text={"Start a project"} />
        </div>
        <div className="hidden md:block relative z-20">
            <div className="w-32 h-32 rounded-full border border-white/10 flex items-center justify-center animate-pulse">
                <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/20 blur-xl" />
                </div>
            </div>
        </div>
      </div>
      <footer className='w-full bg-[#0A0A0A] pt-48 pb-12 px-6 md:px-20 lg:px-32'>
        <div className='grid md:grid-cols-4 gap-16 md:gap-8'>
          <div className='col-span-1 md:col-span-2 space-y-8'>
            <img src={Logo} className='h-8 w-auto brightness-0 invert' alt="Pcube" />
            <p className='text-slate-400 text-lg max-w-sm'>
              Transforming visions into identity. We help brands find their form and ideas find their voice.
            </p>
            <div className='flex gap-4'>
              {social.map((item, index) => (
                <a 
                  key={index} 
                  href={item.destination} 
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300"
                >
                  <span className="sr-only">{item.text}</span>
                  {/* Icon placeholder or text */}
                  <span className="text-[10px] font-bold uppercase">{item.text.substring(0, 2)}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div className='space-y-6'>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Resources</h4>
            <nav className='flex flex-col space-y-4'>
              {navlinks.map((item, index) => (
                <a
                  key={index}
                  href={item.path}
                  className='text-slate-400 hover:text-white transition-colors text-sm font-medium'>
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          <div className='space-y-6'>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Newsletter</h4>
            <p className="text-slate-400 text-sm">Stay updated with our latest insights.</p>
            <div className='relative'>
              <input
                placeholder='Email address'
                className='w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 text-white text-sm focus:outline-none focus:border-primary transition-colors'
              />
              <button className="absolute right-2 top-1.2 bottom-1.2 bg-primary text-white text-xs font-bold px-6 rounded-full hover:bg-primary-2 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
        <div className='text-center pt-10 md:pt-20'>
          <p className='text-sm text-[#949494]'>
            &copy; {new Date().getFullYear()} Pcube. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
}

export default FooterSection;
// flex flex-col md:flex-row h-full justify-between