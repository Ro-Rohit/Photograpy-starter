import React, { useContext } from 'react';
import Socials from './Socials';
import MobileNav from './MobileNav';
import { Link } from 'react-router-dom';
import Logo from '../img/header/logo.svg'
import { CursorContext } from '../context/CursorContext';


const Header = () => {
  const { onCursorLeave, onCursorEnter } = useContext(CursorContext);

  return (
    <header className='fixed z-30 top-0  w-full py-4 px-8 flex justify-center  items-center'>
      <div className='container mx-auto flex items-center justify-between w-full'>

        {/* logo */}
        <img onMouseLeave={onCursorLeave} onMouseEnter={onCursorEnter} src={Logo} alt="logo" className='object-contain' />


        <div className='flex h-full space-x-10'>
          {/* links for desktop  */}
          <div onMouseLeave={onCursorLeave} onMouseEnter={onCursorEnter} className='md:flex h-full items-center gap-x-4 hidden'>
            <Link to={'/'} className=''>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/portfolio'}>Portfolio</Link>
            <Link to={'/contact'}>Contact</Link>
          </div>

          {/* social media links  */}
          <Socials />

        </div>




        <MobileNav />



      </div>

    </header>
  );
};

export default Header;
