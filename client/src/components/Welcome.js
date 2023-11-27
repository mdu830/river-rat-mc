import React from 'react';
import { Container, Row, Col, CardTitle } from 'reactstrap';
// import { Link } from "react-router-dom";
import { useMediaQuery } from 'usehooks-ts'
import { motion } from 'framer-motion'
import familyOwned from '../assets/images/badges/family-owned.webp'
import fullyInsured from '../assets/images/badges/fully-insured.webp'
import excellentService from '../assets/images/badges/excellent-service.webp'
import PageFooter from '../components/PageFooter'


export default React.memo(function Welcome() {

  const matches = useMediaQuery('(min-width: 585px)')

  return (
    <Container fluid className="border-top pt-2">

      <h1 id={matches ? 'welcomeH1' : 'wlecomeH2'} className='textShadow'>Welcome to River Rat Marine Construction</h1>

      <motion.div
        transition={{ delay: 0.9 }}
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        key={'AnimBage1'}
      >
        <Row className='mb-3'>
          <Col  />
          <Col  >
            <img id='family' alt='' className='mt-4 p-1' src={familyOwned} />
          </Col>
          <Col  >
            <img id='service' alt='' className='mt-4 p-1' src={excellentService} />
          </Col>
          <Col  >
            <img id='insured' alt='' className='mt-4 p-1' src={fullyInsured} />
          </Col>
          <Col  />
        </Row>
        <motion.div
            transition={{ delay: 0.3 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            key={'overview'}
          >
            <div color='dark p-4' className='m-4 '>
              <Row>
              </Row>
            </div>
          </motion.div>
      </motion.div>
      <Row className=''>
        <PageFooter className="d-flex align-items-end" />
      </Row>
    </Container>
  )
});