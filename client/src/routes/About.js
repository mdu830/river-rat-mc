import React from 'react';
import AboutData from '../components/AboutData';
import { Container } from 'reactstrap';
import { motion } from 'framer-motion';


const About = () => {

  return (

    <motion.div
      className='page'
      transition={{ delay: 0.1 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      key={'animAbou'}
    >          
    <Container fluid className='bg-dark pt-2  pb-5 customContainer align-items-center'>

        <h1>About Us</h1>
      </Container>
    </motion.div>
  );
}

export default About;