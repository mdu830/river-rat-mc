import React, { useState, useEffect, useRef } from 'react';
import '../assets/style.css'
import { Container, Button, Spinner } from 'reactstrap';
import Banner from '../components/Banner';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'




export default function HomePage() {

  const [isLoading, setLoaded] = useState(true)


  useEffect(() => {
    console.log(isLoading)

  }, [isLoading])

  return (
    <>
      {/* all the other elements */}
      <div className="bg-dark page" >

        <Banner />

        <motion.div
          transition={{ delay: 0.7 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          key={'AnimCar'}
        >
          <Container fluid className=" bg-dark border-top pt-2">
            <Button size='md' color="primary" outline className='m-4'>
              <Link className="btnLink" to={`faq/`}>FAQ</Link>
            </Button>

            <Button size='md' className='m-4'>
              <Link className="btnLink" to={`contact/`}>Contact Us</Link>
            </Button>
            <h3 className=''>Welcome to River Rat Marine Construction</h3>
            <h2>Our website is currently under development.</h2>
          </Container>

        </motion.div>
      </div>
    </>
  )

}