// import React from 'react';
import { HiArrowRightStartOnRectangle } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div className='bg-black mt-0  flex items-center justify-between'>
      <h2 className=' text-orange-100 uppercase font-bold ml-20 mt-5'>Xero<span className='text-orange-600'>Todo</span></h2>
      <div className='text-orange-100 mr-20 mt-4 font-bold '>
      <HiArrowRightStartOnRectangle className=''/>
      </div>
    </div>
  );
};

export default Navbar;


