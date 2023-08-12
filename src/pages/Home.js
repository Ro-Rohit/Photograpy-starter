import React, { useContext } from 'react';
import WomenImg from '../img/home/woman.png'
import { transition1, opacityVarient, slideIn, scaleVariant } from '../transitions';
import { motion } from 'framer-motion';
import { CursorContext } from '../context/CursorContext';




const Home = () => {
  const { onCursorLeave, onCursorEnter } = useContext(CursorContext);

  return (
    <motion.section variants={opacityVarient} initial='initial' animate='animate' exit='exit' className='h-screen w-full pt-20 lg:pt-0'>
      <div className='container  mx-auto w-full h-full'>
        <div className=' h-full w-full flex lg:flex-row items-center flex-col gap-y-5'>

          {/* text  */}
          <motion.div
            variants={slideIn('down')}
            className='lg:absolute z-10 lg:left-[10%] flex flex-col max-w-xl max-h-fit lg:text-left lg:mx-0 mx-auto text-center'>

            <h1 onMouseLeave={onCursorLeave} onMouseEnter={onCursorEnter} className='h1 lg:mb-4 '>Photographer <br /> &Film Maker</h1>
            <p onMouseLeave={onCursorLeave} onMouseEnter={onCursorEnter} className='font-primary text-xl mb-4 lg:mb-8'>Los Angeles, USA</p>
            <button onMouseLeave={onCursorLeave} onMouseEnter={onCursorEnter} className='btn max-w-[150px]  lg:mx-0 mx-auto'>Hire me</button>
          </motion.div>


          {/* img  */}
          <motion.div variants={scaleVariant} className='flex  justify-center  h-full w-full '>
            <div className='shrink-0  h-full w-full lg:max-w-lg relative lg:-right-[10%]  '>
              <motion.img
                onMouseLeave={onCursorLeave}
                onMouseEnter={onCursorEnter}
                whileHover={{ scale: 1.1 }}
                transition={transition1}
                src={WomenImg}
                alt="img"
                className=' object-cover   w-full h-full'
              />
            </div>
          </motion.div>

        </div>

      </div>

    </motion.section>
  );
};

export default Home;
