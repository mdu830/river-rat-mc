import React from 'react';
import { motion } from 'framer-motion'

const Faq = () => {

  return (
    <motion.div
    className='page'
    transition={{ delay: 0.1 }}
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    key={'animFaq'}
  >     
        <h1>FAQ</h1>
    </motion.div>
  );
}

export default Faq;