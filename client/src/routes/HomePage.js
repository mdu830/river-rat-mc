import React from 'react';
import '../assets/style.css'
import Banner from '../components/Banner';
import Welcome from '../components/Welcome';
import PageFooter from '../components/PageFooter';
import { Row } from 'reactstrap';
import { motion } from 'framer-motion'





const HomePage = React.memo(() => {

  return (
    <>
      {/* all the other elements */}
      <div className=" page" >
        <motion.div
          transition={{ delay: 0.6 }}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          key={'AnimHome'}
        >
          <Banner />
        </motion.div>

        <motion.div
          transition={{ delay: 0.8 }}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          key={'AnimCar'}
        >
          <Welcome />
        </motion.div>
      </div >
    </>
  )

});

export default HomePage;