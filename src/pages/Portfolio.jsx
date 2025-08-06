import React from 'react'
import PortfolioCard from '../components/PortfolioCard';

function Portfolio() {
  return (
    <div className='pt-25 font-host-grotesk bg-main-gray'>
      <section></section>
      <section className='px-20 space-y-10 gap-10'>
        <PortfolioCard />
      </section>
    </div>
  );
}

export default Portfolio;
