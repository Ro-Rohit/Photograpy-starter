import React, { useContext } from 'react';
import { transition1 } from '../transitions';
import { motion } from 'framer-motion';
import WomenImg from '../img/about/woman.png';
import { CursorContext } from '../context/CursorContext';


const About = () => {
  const { onCursorLeave, onCursorEnter } = useContext(CursorContext);

  return (
    <motion.section
      className='section'
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
    >
      <div className='container h-full w-full mx-auto pt-[8%] md:pt-[5%] lg:pt-0'>
        <div className='flex lg:flex-row flex-col h-full w-full items-center justify-center lg:gap-x-10 gap-y-4 '>

          {/* img  */}
          <div className='flex-1 lg:flex  justify-end  overflow-hidden '>
            <div className='lg:aspect-[4/5] lg:max-h-[400px] lg:h-full w-full lg:max-w-fit  '>
              <img onMouseLeave={onCursorLeave} onMouseEnter={onCursorEnter} src={WomenImg} alt="img" className='w-full h-full object-cover' />
            </div>
          </div>


          {/* text  */}
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='flex-[1.25] order-first lg:order-last  flex flex-col h-full justify-end lg:justify-center lg:text-left text-center mx-auto lg:mx-0 items-center lg:items-start'
          >
            <h1 onMouseLeave={onCursorLeave} onMouseEnter={onCursorEnter} className='h1 mb-2  font-primary text-primary'>About Me</h1>
            <p onMouseLeave={onCursorLeave} onMouseEnter={onCursorEnter} className='max-w-[500px] px-4 lg:px-0 lg:mb-6 mb-4  w-full text-grey'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Tempore consequuntur vitae qui esse laboriosam
            </p>

            <p onMouseLeave={onCursorLeave} onMouseEnter={onCursorEnter} className='max-w-[500px] px-4 lg:px-0 lg:mb-8 mb-4 w-full text-grey'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Tempore consequuntur vitae qui esse laboriosam Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <button onMouseLeave={onCursorLeave} onMouseEnter={onCursorEnter} className='btn capitalize'>View my work</button>

          </motion.div>


        </div>

      </div>

    </motion.section>
  );
};

export default About;
