import React from 'react';
import '../assets/style.css'
import { Container, Button, Row, Col } from 'reactstrap';
import Banner from '../components/Banner';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'
import familyOwned from '../assets/images/badges/family-owned.webp'
import fullyInsured from '../assets/images/badges/fully-insured.webp'
import excellentService from '../assets/images/badges/excellent-service.webp'




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
            <Row className='m-3'>
              <Col fluid className=''>
                <Button size='md' color="primary" outline className='w-100 mb-4 mt-4'>
                  <Link className="btnLink textShadow" to={'faq/'}>FAQ</Link>
                </Button>
              </Col>
              <Col fluid className=''>
                <Button size='md' className=' w-100 mb-4 mt-4'>
                  <Link className="btnLink textShadow" to={`contact/`}>Contact Us</Link>
                </Button>
              </Col>
              
            </Row>



            <h3 className='textShadow'>Welcome to River Rat Marine Construction</h3>
            {/* <h2>Our website is currently under development.</h2> */}
            <motion.div
              transition={{ delay: 0.9 }}
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 0 }}
              key={'AnimBage1'}
            >
              <Row className=''>
                <Col fluid />
                <Col fluid >
                  <img id='family' alt='' className='mt-4 p-1' src={familyOwned} />

                </Col>
                <Col fluid >
                  <img id='service' alt='' className='mt-4 p-1' src={excellentService} />

                </Col>
                <Col fluid >
                  <img id='insured' alt='' className='mt-4 p-1' src={fullyInsured} />

                </Col>
                <Col fluid />

              </Row>
            </motion.div>
          </Container>

        </motion.div>
      </div>
    </>
  )

}