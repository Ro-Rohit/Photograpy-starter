import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import womenImg1 from '../img/portfolio/1.png';
import womenImg2 from '../img/portfolio/2.png';
import womenImg3 from '../img/portfolio/3.png';
import womenImg4 from '../img/portfolio/4.png';
import { CursorContext } from '../context/CursorContext';



const Portfolio = () => {
  const { onCursorLeave, onCursorEnter } = useContext(CursorContext);

  return (
    <motion.section
      className='section'
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
    >
      <div className='container mx-auto h-full w-full lg:pt-0 pt-[10%] '>
        <div className='flex lg:flex-row flex-col justify-center items-center lg:gap-x-5 gap-y-4 h-full w-full '>

          {/* text  */}
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='flex flex-col justify-center h-full lg:text-left text-center lg:mx-0'
          >
            <h1 onMouseLeave={onCursorLeave} onMouseEnter={onCursorEnter} className='h1 mb-2'> Portfolio</h1>
            <p onMouseLeave={onCursorLeave} onMouseEnter={onCursorEnter} className='max-w-[400px] px-4 lg:px-0  w-full mx-auto lg:mx-0 font-secondary text-grey mb-4'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Facilis, libero? Veritatis voluptas explicabo,
            </p>


            <p onMouseLeave={onCursorLeave} onMouseEnter={onCursorEnter} className='max-w-[400px] px-4 lg:px-0 w-full mx-auto lg:mx-0 font-secondary text-grey mb-4'
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Numquam at voluptate repudiandae,
            </p>
            <button onMouseLeave={onCursorLeave} onMouseEnter={onCursorEnter} className='btn max-w-[150px] mx-auto lg:mx-0'>Hire me</button>
          </motion.div>

          <div >
            <div onMouseLeave={onCursorLeave} onMouseEnter={onCursorEnter} className='grid grid-cols-2 lg:gap-3 gap-0 overflow-hidden mr-auto'>


              <div className='max-w-[300px] lg:max-w-[300px] h-[150px] lg:h-[180px] bg-accent overflow-hidden'>
                <motion.img whileHover={{ scale: 1.2 }} transition={transition1} src={womenImg1} alt="img" className='w-full  h-full object-cover' />
              </div>

              <div className='max-w-[300px] lg:max-w-[300px] h-[150px] lg:h-[180px] bg-accent  overflow-hidden'>
                <motion.img whileHover={{ scale: 1.2 }} transition={transition1} src={womenImg2} alt="img" className='w-full h-full object-cover' />
              </div>

              <div className='max-w-[300px] lg:max-w-[300px] h-[150px] lg:h-[180px] bg-accent overflow-hidden'>
                <motion.img whileHover={{ scale: 1.2 }} transition={transition1} src={womenImg3} alt="img" className='w-full h-full object-top object-cover' />
              </div>

              <div className='max-w-[300px] lg:max-w-[300px] h-[150px] lg:h-[180px] bg-accent  overflow-hidden'>
                <motion.img whileHover={{ scale: 1.2 }} transition={transition1} src={womenImg4} alt="img" className='w-full object-top h-full object-cover' />
              </div>

            </div>

          </div>
        </div>
      </div>

    </motion.section>
  );
};

export default Portfolio;
