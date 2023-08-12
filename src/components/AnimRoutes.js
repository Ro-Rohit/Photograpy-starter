import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import About from '../pages/About';


const AnimRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <Routes key={location.pathname} location={location}>
        <Route element={<Home />} path='/' />
        <Route element={<About />} path='/about' />
        <Route element={<Portfolio />} path='/portfolio' />
        <Route element={<Contact />} path='/contact' />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimRoutes;
