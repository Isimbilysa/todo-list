import React from 'react';
import Work from './Work';

const HomeSection = () => {
  return (
    <div>
    <div className='flex justify-center items-center h-screen  '>
        <div className='flex flex-wrap justify-center items-center space-x-16 border border-orange-100 rounded-lg w-1/4 h-1/4'>
      <div className='flex flex-col items-center justify-center  '>
        <h3 className='text-orange-100 font-bold '>Todo Done</h3>
        <p className='text-orange-100 font-thin tracking-wide '>keep it up</p>
      </div>
      <div className='w-24 h-24 bg-orange-600 rounded-full  '></div>
    </div>
    </div>
    
    </div>
  );
};

export default HomeSection;


