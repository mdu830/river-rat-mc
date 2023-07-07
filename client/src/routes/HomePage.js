import React, { useState, useEffect, useRef } from 'react';
import '../assets/style.css'
import { Container, Button, Collapse, Card, CardBody } from 'reactstrap';
import Banner from '../components/Banner';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'




export default function HomePage() {

  return (
    <>
      {/* all the other elements */}
      <div className="bg-dark page" >
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
          <Container fluid className=" bg-dark border-top pt-2">
            <Button size='md' color="primary" outline className='m-4'>
              <Link className="btnLink textShadow" to={'faq/'}>FAQ</Link>
            </Button>

            <Button size='md' className='m-4'>
              <Link className="btnLink textShadow" to={`contact/`}>Contact Us</Link>
            </Button>
            <h3 className='textShadow'>Welcome to River Rat Marine Construction</h3>
            {/* <h2>Our website is currently under development.</h2> */}
          </Container>

        </motion.div>
      </div>
    </>
  )

}