import React , {useEffect} from 'react'
import { AnimatePresence, motion } from "motion/react";
import Logo from '/pcube-logo.svg'
import { Link } from "react-router-dom";
import MainButton from "./MainButton";
import { useState } from "react";
import { MenuIcon, X } from "lucide-react";
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
    name: "Onboarding",
    path: "/onboarding",
  },
  {
    name: "Contact us",
    path: "/contact-us",
  },
];
function Header() {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 20)
      }
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggle = () => (setOpen(!open))
  return (
    <header className={`fixed top-0 w-full z-[1000] transition-all duration-500 ${scrolled ? 'py-4 glass border-b border-white/10' : 'py-4 lg:py-6 bg-transparent border-b border-white/10'}`}>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-10 md:h-20'>
        {/* logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.2,
          }}>
          <img src={Logo} alt='Pcube Logo' width={100} />
        </motion.div>

        {/* Desktop Navigation */}
        <nav className='md:flex hidden space-x-8'>
          {navlinks.map((item, index) => (
            <motion.a
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2 + index * 0.1,
              }}
              key={index}
              href={item.path}
              className='relative font-bold text-sm tracking-widest text-slate-700 hover:text-primary transition-all duration-300 group'>
              {item.name}
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500'></span>
            </motion.a>
          ))}
        </nav>

        {/* Desktop Other Buttons or Socials */}
        {/* <div className="md:flex hidden items-center space-x-4">
            
        </div> */}

        {/* <div className='md:hidden flex items-center'> */}
          {/* Moble Menu Button*/}
          <div className='md:hidden flex items-center'>
            <motion.button
              whileTap={{ scale: 0.7 }}
              className='text-header-gray'
              onClick={toggle}>
              {open ? (
                <X className='h-6 w-6' />
              ) : (
                <MenuIcon className='h-6 w-6' />
              )}
            </motion.button>
          </div>
        {/* </div> */}

        {/* Reach Out */}
        <span className='hidden md:block'>
          <MainButton text={"Reach out"} />
        </span>
      </div>

      {/* MenuDropdown */}
      {
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className='md:hidden overflow-hidden bg-white shadow-lg px-4 py-5 space-y-5'>
              <nav className='flex flex-col space-y-3'>
                {navlinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.path}
                    className='font-medium text-header-gray py-2'
                    onClick={toggle}>
                    {item.name}
                  </a>
                ))}
              </nav>
              <MainButton text={"Reach out"} />
            </motion.div>
          )}
        </AnimatePresence>
      }

      {/* Reach Out Form */}
    </header>
  );
}

export default Header;
// 8100464983
// olukantun oluwapelu
