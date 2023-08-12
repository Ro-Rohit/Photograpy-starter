import React, { createContext, useState, useEffect } from 'react';


export const CursorContext = createContext();


const CursorProvider = ({ children }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0, });
  const [activeVarient, setActiveVarient] = useState('initial');

  useEffect(() => {

    const handleMousePosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMousePosition)

    return () => window.removeEventListener('mousemove', handleMousePosition)
  }, [])



  const cursorVariant = {
    initial: {
      x: cursorPosition.x - 16,
      y: cursorPosition.y - 16,
      backgroundColor: '#0e1112',
      height: '40px',
      width: '40px'

    },
    animate: {
      x: cursorPosition.x - 72,
      y: cursorPosition.y - 72,
      mixBlendMode: 'difference',
      backgroundColor: '#fff',
      height: '120px',
      width: '120px',
    }

  }

  const onCursorEnter = () => setActiveVarient('animate');
  const onCursorLeave = () => setActiveVarient('initial');


  return <CursorContext.Provider
    value={{ onCursorEnter, onCursorLeave, activeVarient, cursorVariant }}
  >{children}</CursorContext.Provider>;
};

export default CursorProvider;