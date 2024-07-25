// src/components/Balloon.js
import React from 'react';
import { motion } from 'framer-motion';


const balloonVariants = {
  initial: {
    y: 0,
    opacity: 0
  },
  animate: (custom) => ({
    y: [0, -800],
    opacity: [1, 1, 0],
    transition: {
      duration: 4,
      ease: 'easeIn',
      repeat: Infinity,
      repeatDelay: 1,
      delay: custom.delay
    }
  })
};

const Balloon = ({ color, left, delay,animate }) => {

  console.log(animate)
  return (
    <motion.div
    animate={animate ? "animate" : false}
      className="balloon"
      style={{ backgroundColor: color, left: `${left}%` }}
      custom={{ delay }}
      variants={balloonVariants}
      initial="initial"
    />
  );
};

export default Balloon;
