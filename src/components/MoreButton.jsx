import React from 'react'

function MoreButton({text}) {
  return (
    <div className='text-center group cursor-pointer'>
      <span className='font-bold text-sm uppercase tracking-widest text-primary border-b-2 border-primary/20 group-hover:border-primary transition-all pb-1'>
        {text || `View More`}
      </span>
    </div>
  );
}

export default MoreButton