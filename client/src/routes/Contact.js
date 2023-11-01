import React from 'react';
import { Container, Card, Form, Row, Col, FormGroup, Input, Button } from 'reactstrap';
import { motion } from 'framer-motion'
import phoneImg from '../assets/images/icons/phone.png'
import emailImg from '../assets/images/icons/email.png'
import facebookImg from '../assets/images/icons/facebook.png'


const Contact = () => {

  return (

    <motion.div
      className='page'
      transition={{ delay: 0.1 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      key={'animCont'}
    >
      <Container fluid className='bg-dark pt-2  pb-5 customContainer align-items-center'>
        <h1 className='mb-5'>Contact Us</h1>

        <Row className=''>
          <Col className='m-2'>
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

          <Col className='m-2'>
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

          <Col className='m-2'>
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



        <Row className='mt-3'>
          <Col md={{ size: 8, offset: 2 }}>
            <motion.div
              transition={{ delay: 0.5 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              key={'animEmail'}
            >
              <Card className='bg-dark custainer p-3 mb-4'>

                <Form>
                  <div className='name textShadow pb-2'>
                    Send Us A Message
                  </div>
                  <Row className='m-1'>
                    <Col md={{ size: 8, offset: 2 }}>
                      <FormGroup>
                        <Input
                          className='input'
                          id="exampleName"
                          name="Name"
                          placeholder="Name"
                          type=""
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row className='m-1'>
                    <Col md={{ size: 8, offset: 2 }}>
                      <FormGroup>
                        <Input
                          className='input'
                          id="exampleEmail"
                          name="email"
                          placeholder="Email Address"
                          type="email"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row className='m-1'>
                    <Col md={{ size: 8, offset: 2 }}>
                      <FormGroup>
                        <Input
                          className='input'
                          id="exampleText"
                          name="Message"
                          placeholder="Message"
                          type="textarea"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Button
                    id='submitBtn'
                    className='customButton'
                  >
                    Submit
                  </Button>
                </Form>
              </Card>
            </motion.div>
          </Col>
        </Row>
        <div className='float-b'>
          <Row>
            <Col sm>
              <p>Address: 202 Jeff Outlaw Rd Mount Olive, NC 28365</p>
              <p>Phone: (919) 920- 9213</p>
            </Col>
            
            <Col sm>
              <p>Email: pam@riverratmarineconstruction.com</p>
              <p>Facebook: https://www.facebook.com/riverratmarineconstruction</p>
            </Col>
          </Row>
        </div>
      </Container>
    </motion.div>
  );
}

export default Contact;