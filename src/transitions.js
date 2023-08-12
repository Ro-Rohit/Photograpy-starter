export const transition1 = {
  duration: 1.4,
  ease: [0.6, 0.01, -0.05, 0.9],
  // ease: [0.43, 0.13, 0.23, 0.96],
};


export const opacityVarient = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: transition1
  },
  exit: {
    opacity: 0,
    transition: transition1
  },
}


export const scaleVariant = {
  initial: {
    scale: 0
  },
  animate: {
    scale: 1,
    transition: transition1
  },
  exit: {
    scale: 0,
    transition: transition1
  }
}


export const slideIn = (direction) => {

  return {
    initial: {
      x: direction === 'left' ? '-50%' : direction === 'right' ? '50%' : 0,
      y: direction === 'up' ? '50%' : direction === 'down' ? '-50%' : 0,
    },
    animate: {
      x: 0,
      y: 0,
      transition: transition1,
    },
    exit: {
      x: direction === 'left' ? '-50%' : direction === 'right' ? '50%' : 0,
      y: direction === 'up' ? '50%' : direction === 'down' ? '-50%' : 0,
      transition: transition1,
    },
  }

} 
