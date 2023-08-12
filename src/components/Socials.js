import React from 'react';
import { ImFacebook, ImTwitter, ImPinterest, ImInstagram } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CursorContext } from '../context/CursorContext';

const Socials = () => {
  const { onCursorLeave, onCursorEnter } = useContext(CursorContext);

  return (
    <div onMouseLeave={onCursorLeave} onMouseEnter={onCursorEnter} className='lg:flex hidden gap-x-5 items-center'>
      <Link to='' className='text-lg'><ImFacebook /></Link>
      <Link to='' className='text-lg'><ImInstagram /></Link>
      <Link to='' className='text-lg'><ImPinterest /></Link>
      <Link to='' className='text-lg'><ImTwitter /></Link>

    </div>
  )
};

export default Socials;
