import { motion } from "motion/react";
import MainButton from "./MainButton";
import FooterSocialButton from "./FooterSocialButton";
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
    name: "Contact us",
    path: "/contact-us",
  },
];

function FooterSection() {
  return (
    <section className='relative h-screen flex flex-col bg-main-bg space-y-8'>
      <div className=' absolute p-15 top-[-180px] w-[80%] h-[70%] self-center bg-[url("/image-girl.png")] bg-no-repeat bg-cover md:bg-right rounded-3xl outline-8 outline-[#F2F7F8] z-10'>
        <div className='space-y-4'>
          <h2 className='text-5xl font-normal text-white text-center md:text-left'>
            Ready to bring <br className='hidden md:block' /> those ideas to
            life?
          </h2>
          <MainButton text={"Contact us"} />
        </div>
        <img src='' />
      </div>
      <footer className='absolute bottom-0 w-full bg-[#161616] h-full pt-75 px-8 lg:px-20 lg:pt-80 lg:pb-20'>
        <div className='flex flex-col md:flex-row justify-between md:h-[80%] gap-5 md:gap-0'>
          <div className='flex flex-col md:w-1/4 md:self-end space-y-4'>
            <img src='/pcube-logo2.png' className='' width={100} />
            <p className='text-white text-xl'>Subscribe to our newsletter</p>
            <div className='relative'>
              <img
                src='/circle-arrow-footer.png'
                className='w-5 absolute right-5 bottom-4 '
              />
              <input
                placeholder='Enter your email'
                className='w-full h-full flex outline outline-[#867A97] text-[#867A97] text-sm font-normal hover:bg-gradient-to-primary-2 transition-all duration-500 px-8 py-4 rounded-full items-center justify-center gap-3'
              />
            </div>
          </div>
          <div className='flex flex-col justify-between'>
            {/* NavBar */}
            <nav className='flex justify-between '>
              {navlinks.map((item, index) => (
                <motion.a
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    delay: 0.7 + index * 0.2,
                  }}
                  key={index}
                  href={item.path}
                  className='relative font-medium text-sm text-[#949494] hover:text-primary transition-color duration-300 group'>
                  {item.name}
                  <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300'></span>
                </motion.a>
              ))}
            </nav>
            <div className='space-y-2'>
              <p className='text-white text-sm text-[#D3D3D3]'>
                Follow us on our socials
              </p>
              <div className='space-x-3'>
                {["Instagram", "Twitter", "LinkedIn"].map((items, index) => (
                  <FooterSocialButton key={index} text={items} />
                ))}
              </div>
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
