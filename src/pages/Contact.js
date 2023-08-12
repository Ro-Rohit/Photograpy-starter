import React, { useContext } from 'react';
import WomenImg from '../img/contact/woman.png';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { CursorContext } from '../context/CursorContext';


const Contact = () => {
  const { onCursorLeave, onCursorEnter } = useContext(CursorContext);


  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section'
    >
      <div className='container mx-auto h-full w-full md:pt-[10%]'>
        <div className='flex  justify-center items-center flex-row w-full h-full'>

          <div className='container mx-auto'>
            <div className='flex flex-col lg:gap-x-4 overflow-hidden justify-center items-center lg:flex-row w-full h-full'>



              {/* form  */}
              <div className='flex px-4 lg:px-0 flex-col  max-w-[400px] w-full lg:text-left text-center mx-auto lg:mx-0'>

                <h1 onMouseLeave={onCursorLeave} onMouseEnter={onCursorEnter} className='h1'>Contact Me</h1>
                <p onMouseLeave={onCursorLeave} onMouseEnter={onCursorEnter} className='font-secondary text-primary mb-5'>I would love to get some suggestion from u</p>

                <form onMouseLeave={onCursorLeave} onMouseEnter={onCursorEnter}>
                  <div className='flex gap-x-5  overflow-hidden mb-3 w-full items-center'>
                    <input
                      type="text"
                      className='max-w-xl w-full outline-none bg-transparent placeholder:text-[#757879] border-b-2
                       border-b-primary h-[60px]'
                      required
                      placeholder='Your name'

                    />
                    <input
                      type=" text"
                      className='max-w-xl w-full outline-none bg-transparent placeholder:text-[#757879] border-b-2
                      border-b-primary h-[60px]'
                      required
                      placeholder='Your email address'

                    />

                  </div>

                  <textarea
                    type="text"
                    style={{ resize: 'none' }}
                    rows={3}
                    className='w-full outline-none bg-transparent placeholder:text-[#757879] border-b-2
                      border-b-primary h-[40px] mb-4'
                    required
                    placeholder='Your message'
                  />
                  <button className='btn max-w-fit mx-auto lg:mx-0 capitalize'>Send it</button>
                </form>


              </div>

              {/* img */}
              <div className='lg:h-full  h-[250px]   max-w-sm overflow-hidden'>
                <img onMouseLeave={onCursorLeave} onMouseEnter={onCursorEnter} src={WomenImg} alt="img" className='w-full object-cover' />
              </div>


              {/* background  */}
              <div className='hidden lg:flex absolute -z-10 bg-blue-50 left-0 bottom-0 right-0 h-[400px]'>
              </div>






            </div>

          </div>

        </div>
      </div>

    </motion.section>
  );
};

export default Contact;
