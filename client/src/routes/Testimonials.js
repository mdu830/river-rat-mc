import React from 'react';
import { motion } from 'framer-motion';


const Testimonials = () => {

  return (

    <motion.div
      className='page'
      transition={{ delay: 0.1 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      key={'animTest'}
    >
      <h1>Testimonials</h1>
    </motion.div>
  );
}

export default Testimonials;