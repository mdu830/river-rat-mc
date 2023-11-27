import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { motion } from 'framer-motion'
import phoneImg from '../assets/images/icons/phone.png'
import emailImg from '../assets/images/icons/email.png'
import facebookImg from '../assets/images/icons/facebook.png'
import EmailForm from '../components/emailForm';


const Contact = React.memo(() => {

  return (

    <motion.div
      className='page'
      transition={{ delay: 0.1 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      key={'animCont'}
    >
      <div>
        <Container fluid className=' pt-5  pb-5 customContainer align-items-center'>
          <h1 className='mb-5'>Contact Us</h1>

          <Row className=''>
            <Col className=''>
              <motion.div
                transition={{ delay: 0.2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                key={'animPhone'}
              >
                <div
                  className='linkLarge btnLink pb-4'
                  onClick={() => window.location = 'tel:+19199209213'}
                >
                  <img id='phoneIcon' alt='Call' src={phoneImg}></img>
                </div>
              </motion.div>
            </Col>

            <Col className=''>
              <motion.div
                transition={{ delay: 0.3 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                key={'animPhone'}
              >
                <div
                  className='linkLarge pb-4'
                  onClick={() => window.location = 'https://www.facebook.com/riverratmarineconstruction/'}
                >
                  <img id='facebookIcon' alt='Call' src={facebookImg}></img>
                </div>
              </motion.div>
            </Col>

            <Col className=''>
              <motion.div
                transition={{ delay: 0.4 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                key={'animEmail'}
              >
                <div
                  className='linkLarge pb-4'
                  onClick={() => window.location = 'mailto:pam@riverratmarineconstruction.com'}
                >
                  <img id='emailIcon' alt='Email' src={emailImg}></img>
                </div>
              </motion.div>
            </Col>
          </Row>

          <EmailForm />
        </Container>
      </div>
    </motion.div>
  );
});

export default Contact;