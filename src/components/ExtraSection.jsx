function ExtraSection() {
  return (
    <section className='flex h-98 flex-col justify-center px-8 my-10 md:px-30 space-y-8'>
      <div className='relative extra h-full bg-right bg-no-repeat bg-contain text-black py-16 px-15 rounded-3xl overflow-hidden'>
        <h2 className='text-4xl md:text-5xl font-normal text-center md:text-left'>
          Our Business model <br className='hidden md:block' /> is about you!
        </h2>

        <img src='/pie.png' className='absolute bottom-0 left-0 md:w-[40%]' />

        <img
          src='/amazed-guy.png'
          className='absolute bottom-0 right-0 hidden md:block md:w-[76%]'
        />
      </div>
    </section>
  );
}


export default ExtraSection
// pt-10
// h-screenh
// h-3/4