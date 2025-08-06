import React from 'react'

function MoreButton({text}) {
  return (
    <div className='text-center font-semibold text-xl text-primary'>
      <span>{text || `And lots more >>>>>>>`}</span>
    </div>
  );
}

export default MoreButton