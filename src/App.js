import React, { useContext } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import AnimRoutes from './components/AnimRoutes';
import Header from './components/Header';
import { motion } from 'framer-motion';
import { CursorContext } from './context/CursorContext';


const App = () => {
  const { cursorVariant, activeVarient } = useContext(CursorContext);
  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
        <motion.div
          variants={cursorVariant}
          animate={activeVarient}
          className='z-30 pointer-events-none rounded-full absolute top-0 left-0'>
        </motion.div>
      </Router>
    </>
  )
};

export default App;
