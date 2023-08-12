import React, { useState } from 'react';

import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const MobileNav = () => {
  const [active, setActive] = useState(false);

  return (
    <div className=' flex items-center md:hidden'>
      <div
        onClick={() => setActive(true)}
        className='text-3xl cursor-pointer'
      >
        <CgMenuRight />
      </div>

      <div className={`${!active ? '-right-full' : 'right-0'} bg-white z-20 transition-all ease-in-out duration-300
        max-w-xs  w-full h-screen top-0 absolute drop-shadow-md`}
      >
        <div className='w-full relative h-screen text-primary text-2xl font-primary 
         flex flex-col justify-center items-center gap-y-8 text-center'
        >
          <Link to={'/'} onClick={() => setActive(false)} >Home</Link>
          <Link to={'/about'} onClick={() => setActive(false)} >About</Link>
          <Link to={'/portfolio'} onClick={() => setActive(false)} >Portfolio</Link>
          <Link to={'/contact'} onClick={() => setActive(false)} >Contact</Link>
        </div>

        <div onClick={() => setActive(false)} className='absolute top-5 left-5 text-3xl cursor-pointer'>
          <IoMdClose />
        </div>

      </div>



    </div>
  );
};

export default MobileNav;
